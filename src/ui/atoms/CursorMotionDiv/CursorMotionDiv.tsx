import useCursorPosition from "@/shared/hooks/useCursorPosition";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { useLayoutEffect, useRef, useState, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  behavior: "fixed";
  delay: number;
};

export default function CursorMotionDiv(props: Props) {
  const { children, behavior, className, delay } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setElementWidth(ref.current.offsetWidth);
      setElementHeight(ref.current.offsetHeight);
    }
  }, []);

  const cursorPosition = useCursorPosition();
  const windowSize = useWindowSize();

  const cursorPercentageX = 100 / (windowSize.width / cursorPosition.x);
  const cursorPercentageY = 100 / (windowSize.height / cursorPosition.y);

  const styles = {
    fixed: {
      position: "fixed" as const,
      transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      transitionTimingFunction: "ease-out",
      transitionDuration: `${delay}ms`,
    },
    // attract: {
    //   position: "absolute" as const,
    //   top: `${cursorPercentageY}%`,
    //   left: `${cursorPercentageX}%`,
    //   transitionTimingFunction: "ease-out",
    //   transitionDuration: "200ms",
    // },
    // scape: {
    //   position: "fixed" as const,
    //   transitionTimingFunction: "ease-out",
    //   transitionDuration: "200ms",
    // },
  };

  return (
    <div ref={ref} style={styles[behavior]} className={`select-none flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}
