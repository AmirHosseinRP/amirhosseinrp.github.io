import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributeAnchorTarget, memo, useMemo } from "react";
import styles from "./Button.module.css";

export interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  //   variant?: "contained" | "tinted" | "outlined";
  color?: "primary" | "secondary" | "success" | "critical" | "info" | "warning" | "gray";
  size?: "small" | "medium" | "large";
  fullRounded?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  linkClassName?: string;
  isIconBtn?: boolean;
  childrenClassName?: string;
  iconClassName?: string;
  endIconSrc?: string;
}

const Button = (props: Props) => {
  const button = useMemo(() => {
    return (
      <button
        className={clsx("relative flex items-stretch text-lg", props.href && "w-full", styles["btn"], props.className)}
      >
        <span
          className={clsx(
            "w-full px-2 flex flex-row items-center justify-center gap-2 rp-prose-body2",
            props.childrenClassName,
            props.endIconSrc && "py-1",
            styles["border-button__span"]
          )}
        >
          {props.children}

          {props.endIconSrc && (
            <Image src={props.endIconSrc} alt="icon" width={24} height={24} className={props.iconClassName} />
          )}
        </span>
      </button>
    );
  }, [props]);

  if (props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        download={props.download}
        className={clsx("block", props.linkClassName)}
      >
        {button}
      </Link>
    );
  }

  return <>{button}</>;
};

export default memo(Button);
