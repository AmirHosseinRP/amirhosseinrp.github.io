import useCursorPosition from "@/shared/hooks/useCursorPosition";
import useScrollAmount from "@/shared/hooks/useScrollAmount";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { memo, useEffect, useLayoutEffect, useRef, useState, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  behavior: "fixed";
  delay: number;
};

function CursorMotionDiv(props: Props) {
  const { children, behavior, className, delay } = props;
  const [isStart, setIsStart] = useState(true);
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
  const scrollAmount = useScrollAmount();

  const cursorPercentageX = 100 / (windowSize.width / cursorPosition.x);
  const cursorPercentageY = 100 / (windowSize.height / cursorPosition.y);

  useEffect(() => {
    if (cursorPosition.x !== 0 || cursorPosition.y !== 0) {
      setIsStart(false);
    }
  }, [cursorPosition]);

  const styles = {
    start: {
      position: "fixed" as const,
      backgroundColor: "red",
      transform: `translate(${windowSize.width / 2}px, ${windowSize.height / 2}px) scale(10)`,
    },
    fixed: {
      position: "fixed" as const,
      transform: `translate(${cursorPosition.x}px, ${cursorPosition.y - scrollAmount}px)`,
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
    <div
      ref={ref}
      style={!isStart ? styles[behavior] : styles.start}
      className={`select-none flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}

export default memo(CursorMotionDiv);
