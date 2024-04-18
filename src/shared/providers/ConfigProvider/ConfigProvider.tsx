"use client";

import { type PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";

interface Props extends PropsWithChildren {
  theme: string;
}

const ConfigProvider = (props: Props) => {
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

      <ToastContainer
        position="top-right"
        theme={props.theme === "dark" ? "dark" : "light"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ConfigProvider;
