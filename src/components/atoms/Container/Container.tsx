import clsx from "clsx";
import { memo, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Container = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={clsx(
        "relative w-full h-full flex flex-col gap-3 p-4 !overflow-y-scroll platinum-scrollbars",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default memo(Container);
