import clsx from "clsx";
import { memo, PropsWithChildren } from "react";
import Header from "~/components/atoms/Header/Header";

interface Props {
  title: string;
  className?: string;
}

const Window = (props: PropsWithChildren<Props>) => {
  return (
    <div className={clsx("w-full bg-tertiary", props.className)}>
      <Header title={props.title} />

      {props.children}
    </div>
  );
};

export default memo(Window);
