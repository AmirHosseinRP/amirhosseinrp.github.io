import { type ChangeEventHandler, memo, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import {
  formatCellphoneNumber,
  removeNonNumericCharacters,
} from "~/component/molecules/FormField/FormField.helpers";
import Input from "~/components/atoms/Input/Input";
import { toPersianDigit } from "~/shared/utils/helpers";
import FormField from "../FormField";
import { type FormFieldProps } from "../FormField.types";

const FormFieldCellphoneNumber = (props: FormFieldProps) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name: props.name, control });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [value, setValue] = useState(field.value ? formatCellphoneNumber(field.value) : "۰۹");

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    const formattedValue = formatCellphoneNumber(event.target.value);
    setValue(formattedValue);
    field.onChange(removeNonNumericCharacters(formattedValue));
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
        dir="ltr"
        className={fieldState.error && "form-field--has-error"}
        value={toPersianDigit(value)}
        onChange={onChange}
      />
    </FormField>
  );
};

export default memo(FormFieldCellphoneNumber);
