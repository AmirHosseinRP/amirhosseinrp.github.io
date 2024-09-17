"use client";

import { type PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
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

      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SWRConfig>
  );
};

export default ConfigProvider;
