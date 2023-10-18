import useCursorPosition from "@/shared/hooks/useCursorPosition";
import useScrollAmount from "@/shared/hooks/useScrollAmount";
import useWindowSize from "@/shared/hooks/useWindowSize";
import gsap from "gsap";
import { memo, useEffect, useState, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  behavior: "fixed";
  delay: number;
};

function CursorMotionDiv(props: Props) {
  const { children, behavior, className, delay } = props;
  const [isStart, setIsStart] = useState(true);

  const cursorPosition = useCursorPosition();
  const windowSize = useWindowSize();
  const scrollAmount = useScrollAmount();

  useEffect(() => {
    if (cursorPosition.x !== 0 || cursorPosition.y !== 0) {
      setIsStart(false);
    }
  }, [cursorPosition]);

  useEffect(() => {
    if (!isStart) {
      gsap.to(".cursor-motion-div", { x: cursorPosition.x, y: cursorPosition.y - scrollAmount, scale: 1 });
    }
  }, [cursorPosition]);

  const styles = {
    start: {
      transform: `translate(${windowSize.width / 2}px, ${windowSize.height / 2}px) scale(5)`,
    },
    fixed: {
      transitionTimingFunction: "ease-out",
      transitionDuration: `${delay}ms`,
    },
  };

  return (
    <div
      style={!isStart ? styles[behavior] : styles.start}
      className={`cursor-motion-div fixed select-none flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}

export default memo(CursorMotionDiv);
