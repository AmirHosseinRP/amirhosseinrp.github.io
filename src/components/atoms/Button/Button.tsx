import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributeAnchorTarget, memo, useMemo } from "react";
import styles from "./Button.module.css";

export interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  //   variant?: "contained" | "tinted" | "outlined";
  color?: "primary" | "secondary" | "success" | "critical" | "info" | "warning" | "gray";
  size?: "small" | "medium" | "large";
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  isIconBtn?: boolean;
  childrenClassName?: string;
  iconClassName?: string;
  endIconSrc?: string;
  isLoading?: boolean;
}

const Button = (props: Props) => {
  const button = useMemo(() => {
    return (
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={clsx(
          "relative flex items-stretch text-lg",
          styles["btn"],
          props.className,
          props.disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <span
          className={clsx(
            "w-full px-2 flex flex-row items-center justify-center gap-2 rp-prose-body2",
            props.childrenClassName,
            props.endIconSrc && "py-1",
            styles["border-button__span"]
          )}
        >
          {props.isLoading ? (
            <svg
              width="32"
              height="32"
              className="animate-spin p-1"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path fill="url(#a)" d="M0 0h32v32H0z" />
              <defs>
                <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#b" transform="scale(.01563)" />
                </pattern>
                <image
                  id="b"
                  width="64"
                  height="64"
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhklEQVR4Xu2a4RKDIAyD9f0f2t3uNk/FEWpb0fnt58AqaZJWcBzif1NwyDE43ipcRnAACM5YRpLmR8wI/vcMCF3gNNXDjaPMkZxQY+SRiwEgUuMw4AYSCKX8lj2KAYptOx5hknXLZABQWfCMwwDhAQrcDAmkUj7aA7bxrIDseQAAKNpFjns9AAZsEEAC5btDtdTjATt6xgQjTU7FuoIJnprx7D7AWhXeHgAAiqaZ49ESgAHGvgAJ4AGYIFWgaxnMrDA/Yq/a/+4mCADnIwADlpgXEujQmZ3NgToDAMC5Ta3S2XDaq0J4x2EAHrBAABPcvgxhgg80wWKbbvlHNCM6VAHfuQAABEsCBujP3ryNTrEvWgsoj8aQABKI3TDCA27gAal9wQkMaPn0b15jy+SVBrymCAD5EmhJKgz4ImBC63NRtSwoiSRI4MgaTAyomqL1gwcAiPcAGOB5eXCh9+PGsa3jMGQ8o8sDFOAAoBAyjsMAI2Cm6anomp6k02QA6AT8ZW77eAa8AJt0zEEhpQYlAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          ) : (
            props.children
          )}

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
        className={clsx("relative flex items-stretch text-lg", styles["btn"], props.className)}
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
      </Link>
    );
  }

  return <>{button}</>;
};

export default memo(Button);
