import { memo, type PropsWithChildren } from "react";

const HelperText = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="dig-prose-label4 text-dig-text-secondary">
      <strong>Guide:</strong> {children}
    </div>
  );
};

export default memo(HelperText);
