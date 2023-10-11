import useCursorPosition from "@/shared/hooks/useCursorPosition";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { useRef, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  behavior: "fixed" | "attract" | "scape";
};

export default function CursorMotionDiv(props: Props) {
  const { children, behavior } = props;
  const ref = useRef<HTMLDivElement>(null);
  const cursorPosition = useCursorPosition();
  const windowSize = useWindowSize();
  const styles = {
    fixed: {
      position: "fixed" as const,
      top: `${cursorPosition.y - 5}px`,
      left: `${cursorPosition.x - 15}px`,
      transitionTimingFunction: "ease-out",
      transitionDuration: "50ms",
    },
    attract: {
      position: "fixed" as const,
      bottom: `${windowSize.height / 2 - cursorPosition.y / 10}px`,
      right: `${windowSize.width / 2 - cursorPosition.x / 10}px`,
      transitionTimingFunction: "ease-out",
      transitionDuration: "200ms",
    },
    scape: {
      position: "fixed" as const,
      transitionTimingFunction: "ease-out",
      transitionDuration: "200ms",
    },
  };

  return (
    <div ref={ref} style={styles[behavior]} className="select-none">
      {children}
    </div>
  );
}
