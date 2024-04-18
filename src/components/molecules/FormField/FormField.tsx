"use client";

import { memo, type MemoExoticComponent, type PropsWithChildren, type ReactNode } from "react";
import ErrorMessage from "~/component/atoms/(form-field)/ErrorMessage/ErrorMessage";
import HelperText from "~/component/atoms/(form-field)/HelperText/HelperText";
import Label from "~/component/atoms/(form-field)/Label/Label";
import FormFieldCellphoneNumber from "~/component/molecules/FormField/components/FormField.CellphoneNumber";
import FormFieldNumber from "~/component/molecules/FormField/components/FormField.Number";
import FormFieldText from "~/component/molecules/FormField/components/FormField.Text";

interface MemoizedModalCompose {
  Text: typeof FormFieldText;
  CellphoneNumber: typeof FormFieldCellphoneNumber;
  Number: typeof FormFieldNumber;
}

interface Props {
  name: string;
  label: string;
  required?: boolean;
  unit?: string;
  helperText?: string;
  errorMessage?: string;
}

const BaseFormField = (props: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={props.name} label={props.label} required={props.required} unit={props.unit} />

      {props.children}

      <div className="flex flex-col gap-1 min-h-4">
        {props.helperText && <HelperText>{props.helperText}</HelperText>}
        {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
      </div>
    </div>
  );
};

const FormField = memo(BaseFormField) as MemoExoticComponent<
  (props: PropsWithChildren<Props>) => ReactNode
> &
  MemoizedModalCompose;
FormField.Text = FormFieldText;
FormField.CellphoneNumber = FormFieldCellphoneNumber;
FormField.Number = FormFieldNumber;

export default FormField;
