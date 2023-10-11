import useScrollAmount from "@/shared/hooks/useScrollAmount";
import { HTMLAttributes, memo } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement>;
function ScrollMotionDiv(props: Props) {
  const { children } = props;
  const scrollAmount = useScrollAmount();
  return (
    <div
      style={{ position: "relative", transform: `translate(0,${scrollAmount + 400}px)` }}
      className="duration-1000 ease-out"
    >
      {children}
    </div>
  );
}

export default memo(ScrollMotionDiv);
