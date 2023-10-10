import { memo, type ElementType, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  tagName?: ElementType;
};
function Typography(props: Props) {
  const { tagName: Tag = "div", children, className } = props;
  return <Tag className={className}>{children}</Tag>;
}

export default memo(Typography);
