import clsx from "clsx";
import { memo, PropsWithChildren } from "react";
import Header from "~/components/atoms/Header/Header";

interface Props {
  title: string;
  className?: string;
}

const Window = (props: PropsWithChildren<Props>) => {
  return (
    <div className={clsx("w-full max-w-[90%] md:max-w-[80%] xl:max-w-[60%] bg-tertiary", props.className)}>
      <Header title={props.title} />

      {props.children}
    </div>
  );
};

export default memo(Window);
