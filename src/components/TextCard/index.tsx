import { ReactNode } from "react";

type TextCardProps = {
  children: ReactNode;
  isBlack?: boolean;
};

export default function TextCard(props: TextCardProps) {
  return (
    <>
      <h1
        className={`text-[4.5rem] max-[800px]:text-[4rem] max-[650px]:text-[9vw] font-bold ${
          props.isBlack
            ? "text-black stroked-text-white"
            : "text-white stroked-text-black"
        }`}
      >
        {props.children}{" "}
        <span className="text-[4.5rem] max-[800px]:text-[4rem] max-[650px]:text-[9vw] font-bold text-white stroked-text-black">
          /
        </span>
      </h1>
    </>
  );
}
