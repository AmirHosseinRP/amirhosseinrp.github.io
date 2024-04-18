import { memo } from "react";
import { useController, useFormContext } from "react-hook-form";
import Input from "~/components/atoms/Input/Input";
import FormField from "../FormField";
import { type FormFieldProps } from "../FormField.types";

const FormFieldText = (props: FormFieldProps) => {
  const formMethods = useFormContext();
  const controller = useController({ name: props.name, control: formMethods.control });

  return (
    <FormField
      name={props.name}
      label={props.label}
      required={props.required}
      unit={props.unit}
      helperText={props.helperText}
      errorMessage={controller.fieldState.error?.message}
    >
      <Input ref={controller.field.ref} id={props.name} name={props.name} />
    </FormField>
  );
};

export default memo(FormFieldText);
