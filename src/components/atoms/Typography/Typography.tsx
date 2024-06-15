import clsx from "clsx";
import { memo, useMemo, type ElementType, type PropsWithChildren } from "react";
import { type TypographyColor, type TypographyVariant } from "./Typography.types";

interface Props {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  noWrap?: boolean;
  tagName?: ElementType;
}

const Typography = (props: PropsWithChildren<Props>) => {
  const {
    children,
    variant = "body1",
    color = "text-primary",
    className = "",
    noWrap = false,
    tagName: Tag = "div",
  } = props;

  const textVariant = useMemo(() => {
    const variants = {
      h1: "rp-prose-h1",
      h2: "rp-prose-h2",
      h3: "rp-prose-h3",
      h4: "rp-prose-h4",
      h5: "rp-prose-h5",
      title1: "rp-prose-title1",
      title2: "rp-prose-title2",
      title3: "rp-prose-title3",
      body1: "rp-prose-body1",
      body2: "rp-prose-body2",
      body3: "rp-prose-body3",
      label1: "rp-prose-label1",
      label2: "rp-prose-label2",
      label3: "rp-prose-label3",
      label4: "rp-prose-label4",
      caption1: "rp-prose-caption1",
      caption2: "rp-prose-caption2",
      "btn-sm": "rp-prose-btn-sm",
      "btn-md": "rp-prose-btn-md",
      "btn-lg": "rp-prose-btn-lg",
    };

    return variants[variant];
  }, [variant]);

  const textColor = useMemo(() => {
    const colors = {
      "text-primary": "text-rp-text-primary",
      "text-secondary": "text-rp-text-secondary",
      "text-disabled": "text-rp-text-placeholder",
      "text-placeholder": "text-rp-text-disabled",
      "text-white": "text-rp-text-white",
      "text-link": "text-rp-text-link",
      primary: "text-rp-brand-500",
      info: "text-rp-info-500",
      success: "text-rp-success-500",
      warning: "text-rp-warning-500",
      danger: "text-rp-error-500",
    };

    return colors[color];
  }, [color]);

  const textNoWrap = useMemo(() => {
    return noWrap ? "whitespace-nowrap" : "";
  }, [noWrap]);

  return <Tag className={clsx(textVariant, textColor, textNoWrap, className)}>{children}</Tag>;
};

export default memo(Typography);
