import useScrollAmount from "@/shared/hooks/useScrollAmount";
import gsap from "gsap";
import { ReactNode, memo, useEffect } from "react";

type Props = { children: ReactNode };
function ScrollMotionDiv(props: Props) {
  const { children } = props;
  const scrollAmount = useScrollAmount();
  useEffect(() => {
    gsap.to(".scroll-motion-div", { y: scrollAmount });
  }, [scrollAmount]);
  return <div className="scroll-motion-div duration-500 ease-out relative top-[50vh]">{children}</div>;
}

export default memo(ScrollMotionDiv);
