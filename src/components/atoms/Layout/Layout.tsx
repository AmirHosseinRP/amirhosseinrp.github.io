"use client";

import clsx from "clsx";
import { useState, type PropsWithChildren } from "react";
import Startup from "~/views/Startup/Startup";

const Layout = (props: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Startup onComplete={() => setIsLoading(false)} />
      ) : (
        <section
          className={clsx(
            "relative flex-1 container-app mx-auto flex flex-col overflow-auto border-[3px] border-solid border-[#262626] bg-secondary"
          )}
        >
          {props.children}
        </section>
      )}
    </>
  );
};

export default Layout;
