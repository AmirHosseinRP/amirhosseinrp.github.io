import { memo, type ReactNode } from "react";
import Typography from "~/components/atoms/Typography/Typography";

interface Props {
  label: ReactNode;
  value: ReactNode;
  ltrValue?: boolean;
}

const CardRow = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 md:hidden">
        <div className="flex flex-row gap-1 w-full">
          <Typography variant="title3" color="prose-primary">
            {props.label}
          </Typography>

          <div className="flex-1 border-t border-dashed border-rp-gray-300 mt-2.5" />
        </div>

        <div className="flex flex-row gap-1 w-full">
          <div className="flex-1 border-t border-dashed border-rp-gray-300 mt-3" />

          <Typography
            variant="label3"
            color="prose-primary"
            className="whitespace-pre-wrap text-end text-ellipsis truncate"
            ltr={props.ltrValue}
          >
            {props.value}
          </Typography>
        </div>
      </div>

      <div className="hidden md:flex items-start gap-2">
        <Typography variant="title3" color="prose-primary">
          {props.label}
        </Typography>

        <div className="flex-1 border-t border-dashed border-rp-gray-300 mt-2.5" />

        <Typography variant="label3" color="prose-primary" className="whitespace-pre-wrap" ltr={props.ltrValue}>
          {props.value}
        </Typography>
      </div>
    </>
  );
};

export default memo(CardRow);
