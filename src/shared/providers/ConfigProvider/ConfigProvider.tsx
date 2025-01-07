"use client";

import { type PropsWithChildren } from "react";
import { SWRConfig } from "swr";

const ConfigProvider = (props: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        provider: () => new Map(),
      }}
    >
      {props.children}
    </SWRConfig>
  );
};

export default ConfigProvider;
