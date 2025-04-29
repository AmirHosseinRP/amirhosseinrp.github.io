"use client";

import clsx from "clsx";
import { useState, type PropsWithChildren } from "react";
import env from "~/shared/config/env";
import Startup from "~/views/Startup/Startup";

const Layout = (props: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(env.mode !== "development" ? true : false);

  return (
    <>
      <div
        className={clsx({
          hidden: !isLoading,
        })}
      >
        <Startup onComplete={() => setIsLoading(false)} />
      </div>

      <section
        className={clsx(
          "relative flex-1 container-app mx-auto flex flex-col overflow-auto rounded-t-3xl border-[2px] border-solid border-[#262626] bg-secondary transition-opacity",
          {
            "opacity-0 pointer-events-none absolute": isLoading,
            "opacity-100": !isLoading,
          }
        )}
      >
        {props.children}
      </section>
    </>
  );
};

export default Layout;
