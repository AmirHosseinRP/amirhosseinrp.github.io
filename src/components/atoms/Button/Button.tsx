import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, memo, useMemo } from "react";
import styles from "./Button.module.css";

export interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  //   variant?: "contained" | "tinted" | "outlined";
  //   color?: "primary" | "success" | "critical" | "info" | "warning" | "gray";
  size?: "small" | "medium" | "large";
  fullRounded?: boolean;
  href?: string;
}

const Button = (props: Props) => {
  const button = useMemo(() => {
    return (
      <button className={clsx("relative flex items-stretch text-lg", styles["btn"])}>
        <span className={clsx("px-2", styles["border-button__span"])}>{props.children}</span>
      </button>
    );
  }, [props]);

  if (props.href) {
    return (
      <Link href={props.href} className="block w-full">
        {button}
      </Link>
    );
  }

  return <>{button}</>;
};

export default memo(Button);
