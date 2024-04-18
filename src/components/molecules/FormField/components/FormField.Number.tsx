import Input from "@/components/atoms/Input/Input";
import { removeNonNumericCharacters } from "@/components/molecules/FormField/FormField.helpers";
import { memo, useState, type ChangeEventHandler } from "react";
import { useController, useFormContext } from "react-hook-form";
import FormField from "../FormField";
import { type FormFieldProps } from "../FormField.types";

const FormFieldText = (props: FormFieldProps) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name: props.name, control });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [value, setValue] = useState(field.value ? removeNonNumericCharacters(field.value) : "");

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    const formattedValue = removeNonNumericCharacters(event.target.value);
    setValue(formattedValue);
    field.onChange(formattedValue);
  };

  return (
    <FormField
      name={props.name}
      label={props.label}
      required={props.required}
      unit={props.unit}
      helperText={props.helperText}
      errorMessage={fieldState.error?.message}
    >
      <Input
        ref={field.ref}
        id={props.name}
        name={props.name}
        className={fieldState.error && "form-field--has-error"}
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
};

export default memo(FormFieldText);
