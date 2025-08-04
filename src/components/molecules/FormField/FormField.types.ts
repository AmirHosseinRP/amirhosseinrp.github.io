import { type InputHTMLAttributes } from "react";

export type FormFieldProps<T> = InputHTMLAttributes<T> & {
  name: string;
  label: string;
  required?: boolean;
  unit?: string;
  helperText?: string;
};
