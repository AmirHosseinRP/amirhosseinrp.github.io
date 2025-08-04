"use client";

import clsx from "clsx";

import { memo, type MemoExoticComponent, type PropsWithChildren, type ReactNode } from "react";
import ErrorMessage from "~/components/atoms/ErrorMessage/ErrorMessage";
import Label from "~/components/atoms/Label/Label";
import Typography from "~/components/atoms/Typography/Typography";
import FormFieldText from "./components/FormField.Text";
import FormFieldTextarea from "./components/FormField.Textarea";

interface ComposeProps {
  Text: typeof FormFieldText;
  Textarea: typeof FormFieldTextarea;
}

export interface FormFieldWrapperProps {
  name: string;
  label: string;
  required?: boolean;
  unit?: string;
  helperText?: string;
  errorMessage?: string;
  description?: ReactNode;
}

const FormFieldWrapper = (props: PropsWithChildren<FormFieldWrapperProps>) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={props.name} label={props.label} required={props.required} unit={props.unit} />

      {props.children}

      <div className={clsx("flex flex-col gap-1", props.helperText ? "min-h-9" : "min-h-5")}>
        {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
        {props.description && <Typography variant="caption1">{props.description}</Typography>}
      </div>
    </div>
  );
};

const FormField = memo(FormFieldWrapper) as MemoExoticComponent<
  (props: PropsWithChildren<FormFieldWrapperProps>) => ReactNode
> &
  ComposeProps;
FormField.Text = FormFieldText;
FormField.Textarea = FormFieldTextarea;

export default FormField;
