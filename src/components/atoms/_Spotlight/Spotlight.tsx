"use client";

import { type ReactNode } from "react";

interface Props {
  primaryContent: ReactNode;
  hoverContent: ReactNode;
}

const HoverReveal = (props: Props) => {
  return (
    <div className="relative w-fit h-fit flex justify-center items-center">
      <div className="absolute inset-0">{props.primaryContent}</div>

      {/* <CursorMotion duration={0}>
        <div className="bg-green-600 w-40 h-40 rounded-full" />
      </CursorMotion> */}

      <div className="absolute inset-0">{props.hoverContent}</div>
    </div>
  );
};

export default HoverReveal;
