"use client";

import { type PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";

const ConfigProvider = (props: PropsWithChildren) => {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          provider: () => new Map(),
        }}
      >
        {props.children}
      </SWRConfig>

      <Toaster />
    </>
  );
};

export default ConfigProvider;
