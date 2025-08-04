import { memo } from "react";
import { useController, useFormContext } from "react-hook-form";
import Input from "~/components/atoms/Input/Input";
import { toEnglishDigit } from "~/shared/utils/helpers";
import FormField from "../FormField";
import { type FormFieldProps } from "../FormField.types";

const FormFieldText = (props: FormFieldProps<HTMLInputElement>) => {
  const { name, label, required, unit, helperText, ...restProps } = props;

  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  return (
    <FormField
      name={name}
      label={label}
      required={required}
      unit={unit}
      helperText={helperText}
      errorMessage={fieldState.error?.message}
    >
      <Input
        ref={field.ref}
        id={name}
        name={name}
        hasError={Boolean(fieldState.error)}
        value={field.value ? toEnglishDigit(field.value as string) : ""}
        onChange={event => field.onChange(toEnglishDigit(event.target.value))}
        {...restProps}
      />
    </FormField>
  );
};

export default memo(FormFieldText);
