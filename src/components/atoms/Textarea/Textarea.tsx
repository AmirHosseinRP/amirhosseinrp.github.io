import clsx from "clsx";
import { forwardRef, memo, type TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { cols = 30, rows = 4, className = "", hasError, ...restTextareaProps } = props;

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
        <textarea
          cols={cols}
          rows={rows}
          className={clsx("pointer-events-auto bg-transparent w-full h-full px-2 py-1", styles["input__field"])}
          ref={ref}
          {...restTextareaProps}
        />
      </span>
    </div>
  );
});

Textarea.displayName = "Textarea";
export default memo(Textarea);
