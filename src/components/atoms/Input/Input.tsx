import { forwardRef, type InputHTMLAttributes, memo } from "react";
import clsx from "clsx";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const { className = "", ...restInputProps } = props;

  return <input ref={ref} className={clsx("form-field", className)} {...restInputProps} />;
});

Input.displayName = "Input";
export default memo(Input);
