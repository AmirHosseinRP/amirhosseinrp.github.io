import useCursorPosition from "@/shared/hooks/useCursorPosition";
import useElementPosition from "@/shared/hooks/useElementPosition";
import { useRef, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement>;

export default function CursorMotionDiv(props: Props) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const elementPosition = useElementPosition(ref);

  const { cursorX, cursorY } = useCursorPosition();
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        bottom: `${elementPosition.x - cursorY / 10}px`,
        right: `${elementPosition.x - cursorX / 10}px`,
      }}
      className="duration-1000 ease-out"
    >
      {elementPosition.x} {elementPosition.y} <br /> {cursorX} {cursorY}
    </div>
  );
}
