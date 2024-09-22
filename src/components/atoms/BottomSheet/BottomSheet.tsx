import clsx from "clsx";
import { motion } from "framer-motion";
import { memo, type MemoExoticComponent, type PropsWithChildren, type ReactNode } from "react";
import BottomSheetBody from "./components/BottomSheet.Body";

interface ComposeProps {
  Body: typeof BottomSheetBody;
}

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const BaseBottomSheet = (props: Props) => {
  return (
    <>
      <motion.div
        className={clsx(
          "fixed inset-0 backdrop-blur-sm bg-red-900 z-50 flex flex-col justify-end md:flex-row md:items-center md:justify-center",
          { hidden: !props.isOpen }
        )}
        onClick={props.onClose}
      />

      <motion.div
        drag="y"
        className={clsx(
          "fixed bottom-0 md:bottom-1/2 md:translate-y-1/2 md:p-0 bg-transparent z-[60] mx-auto max-h-dvh shadow-dig-shadow-2xl rounded-2xl",
          "animate-slide-in-out md:animate-fade-in-out w-full",
          { hidden: !props.isOpen }
        )}
      >
        <div className="bg-blue-800 flex items-center justify-between gap-2 py-3 px-4 bg-primary rounded-t-2xl"></div>

        {props.children}
      </motion.div>
    </>
  );
};

const BottomSheet = memo(BaseBottomSheet) as MemoExoticComponent<(props: Props) => ReactNode> &
  ComposeProps;
BottomSheet.Body = BottomSheetBody;

export default BottomSheet;
