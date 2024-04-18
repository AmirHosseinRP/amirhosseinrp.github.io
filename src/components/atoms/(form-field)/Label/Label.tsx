import { memo, type ReactNode } from "react";

type Props = { htmlFor: string; label: ReactNode; required?: boolean; unit?: string };

const Label = (props: Props) => {
  const { htmlFor, label, required, unit } = props;

  return (
    <label htmlFor={htmlFor} className="dig-prose-label3 text-dig-text-primary px-2">
      {label}
      {required && <sup className="text-dig-error-500 text-base">*</sup>}
      {unit && <span className="dig-prose-caption1">&nbsp;({unit})</span>}
    </label>
  );
};

export default memo(Label);
