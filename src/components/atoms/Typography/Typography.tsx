import clsx from "clsx";
import { memo, useMemo, type ElementType, type PropsWithChildren } from "react";
import { type TypographyColor, type TypographyVariant } from "~/components/atoms/Typography/Typography.types";

interface Props {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  noWrap?: boolean;
  tagName?: ElementType;
  ltr?: boolean;
}

const Typography = (props: PropsWithChildren<Props>) => {
  const {
    children,
    variant = "body1",
    color = "prose-primary",
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
      "prose-primary": "text-prose-primary",
      "prose-secondary": "text-prose-secondary",
      "prose-hint": "text-prose-hint",
      "prose-inverse": "text-prose-inverse",
      "prose-disabled": "text-prose-disabled",
      "prose-link": "text-prose-link",
      "prose-white": "text-prose-white",
      brand: "text-brand",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      critical: "text-critical",
    };

    return colors[color];
  }, [color]);

  const textNoWrap = useMemo(() => {
    return noWrap ? "whitespace-nowrap" : "";
  }, [noWrap]);

  return (
    <Tag className={clsx(textVariant, textColor, textNoWrap, className)} {...(props.ltr && { dir: "ltr" })}>
      {children}
    </Tag>
  );
};

export default memo(Typography);
