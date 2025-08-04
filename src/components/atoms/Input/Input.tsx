import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className = "", hasError, ...restInputProps } = props;

  return (
    <div
      className={clsx(
        "relative flex items-stretch text-lg min-h-10",
        styles["input"],
        hasError && styles["input__has-error"],
        className
      )}
    >
      <span
        className={clsx("w-full flex flex-row items-center justify-center gap-2 rp-prose-body2", styles["input__span"])}
      >
        <input
          className={clsx("pointer-events-auto bg-transparent w-full h-full px-2", styles["input__field"])}
          ref={ref}
          {...restInputProps}
        />
      </span>
    </div>
  );
});

Input.displayName = "Input";
export default memo(Input);
