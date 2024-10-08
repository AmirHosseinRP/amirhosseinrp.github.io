import clsx from "clsx";
import { memo, type PropsWithChildren } from "react";
import styles from "./BottomSheet.Body.module.css";

interface Props {
  className?: string;
}

const BottomSheetBody = (props: PropsWithChildren<Props>) => {
  return (
    <div
      id="bottom-sheet-body"
      className={clsx("bg-primary safe-area-inset  md:rounded-b-2xl", styles["bottom-sheet-body"], props.className)}
    >
      {props.children}
    </div>
  );
};

export default memo(BottomSheetBody);
