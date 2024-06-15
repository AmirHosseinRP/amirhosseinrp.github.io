import { memo, type PropsWithChildren } from "react";

const HelperText = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="rp-prose-label4 text-rp-text-secondary">
      <strong>Guide:</strong> {children}
    </div>
  );
};

export default memo(HelperText);
