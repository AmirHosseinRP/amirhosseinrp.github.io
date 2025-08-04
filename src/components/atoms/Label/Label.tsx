import { memo, type ReactNode } from "react";

type Props = { htmlFor: string; label: ReactNode; required?: boolean; unit?: string };

const Label = (props: Props) => {
  const { htmlFor, label, required, unit } = props;

  return (
    <label htmlFor={htmlFor} className="dig-prose-label3 text-prose-primary">
      {label}
      {required && <sup className="text-critical text-sm ml-0.5">*</sup>}
      {unit && <span className="dig-prose-caption2">&nbsp;({unit})</span>}
    </label>
  );
};

export default memo(Label);
