import clsx from "clsx";
import { type PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <section
        className={clsx(
          "flex-1 container-app mx-auto flex flex-col overflow-auto border-[3px] border-solid border-[#262626] bg-secondary"
        )}
      >
        {props.children}
      </section>
    </>
  );
};

export default Layout;
