import clsx from "clsx";
import { forwardRef, memo, type RefObject } from "react";

interface Props {
  ref: RefObject<HTMLDivElement>;
  className?: string;
}

const CursorObject = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      className={clsx("w-3 h-3 bg-red-900 rounded-full", props.className)}
      style={{ transition: "transform 0.3s ease-out" }}
    />
  );
});

CursorObject.displayName = "CursorEye";
export default memo(CursorObject);
