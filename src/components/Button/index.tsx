import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  secondary?: boolean;
  children: ReactNode;
};
export default function Button(props: ButtonProps) {
  return (
    <>
      <button className={`text-black rounded-full bg-white ${props.className}`}>
        {props.children}
      </button>
    </>
  );
}
