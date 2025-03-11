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
  download?: boolean;
  isIconBtn?: boolean;
  childrenClassName?: string;
}

const Button = (props: Props) => {
  const button = useMemo(() => {
    return (
      <button className={clsx("relative flex items-stretch text-lg", styles["btn"])}>
        <span
          className={clsx(
            "px-2 flex flex-row items-center justify-center gap-2 rp-prose-body2",
            props.childrenClassName,
            styles["border-button__span"]
          )}
        >
          {props.children}
        </span>
      </button>
    );
  }, [props]);

  if (props.href) {
    return (
      <Link href={props.href} download={props.download} className="block">
        {button}
      </Link>
    );
  }

  return <>{button}</>;
};

export default memo(Button);
