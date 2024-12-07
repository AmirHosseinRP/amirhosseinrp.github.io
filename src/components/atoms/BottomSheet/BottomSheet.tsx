import clsx from "clsx";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import Image from "next/image";
import { memo, useRef, type MemoExoticComponent, type PropsWithChildren, type ReactNode } from "react";
import icons from "~/shared/libs/icons";
import BottomSheetBody from "./components/BottomSheet.Body";

interface ComposeProps {
  Body: typeof BottomSheetBody;
}

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const BaseBottomSheet = (props: Props) => {
  const rightKnobRef = useRef<HTMLDivElement>(null);
  const leftKnobRef = useRef<HTMLDivElement>(null);

  const onDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (rightKnobRef.current && leftKnobRef.current) {
      if (info.velocity.y > 0) {
        rightKnobRef.current.style.transform = "rotate(12deg)";
        leftKnobRef.current.style.transform = "rotate(-12deg)";
      } else if (info.velocity.y < 0) {
        rightKnobRef.current.style.transform = "rotate(-12deg)";
        leftKnobRef.current.style.transform = "rotate(12deg)";
      }
    }
  };

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (rightKnobRef.current && leftKnobRef.current) {
      rightKnobRef.current.style.transform = "rotate(0)";
      leftKnobRef.current.style.transform = "rotate(0)";
    }
    if (info.offset.y > 100) {
      props.onClose();
    }
  };

  return (
    <AnimatePresence>
      {props.isOpen && (
        <div className="fixed inset-0 w-dvw h-dvh flex justify-center items-center z-50">
          <motion.div
            className={clsx(
              "w-full h-full inset-0 backdrop-blur-sm bg-transparent-black-12 z-[60] flex flex-col justify-end md:flex-row md:items-center md:justify-center"
            )}
            onClick={props.onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.dialog
            open={props.isOpen}
            className={clsx(
              "fixed bottom-0 md:bottom-auto md:p-0 bg-transparent z-[70] mx-auto max-h-dvh md:shadow-dig-shadow-2xl rounded-2xl md:max-w-[36rem]",
              "animate-slide-in-out md:animate-fade-in-out w-full"
            )}
            drag={window.screen.width < 768 && "y"}
            dragConstraints={{ top: 0 }}
            dragSnapToOrigin
            dragElastic={0.01}
            onDragEnd={onDragEnd}
            onDrag={onDrag}
            initial={window.screen.width < 768 ? { y: "100%" } : { opacity: 0 }}
            animate={window.screen.width < 768 ? { y: 0 } : { opacity: 1 }}
            exit={window.screen.width < 768 ? { y: "100%" } : { opacity: 0 }}
            transition={{ ease: "easeOut" }}
          >
            <div className="flex md:hidden items-center justify-center py-4 px-4 bg-primary rounded-t-2xl">
              <div
                ref={leftKnobRef}
                className="bg-highlight w-4 h-1 rounded -m-[1px] right-knob"
                style={{ transition: "transform ease-in-out 0.1s" }}
              />
              <div
                ref={rightKnobRef}
                className="bg-highlight w-4 h-1 rounded -m-[1px] left-knob"
                style={{ transition: "transform ease-in-out 0.1s" }}
              />
            </div>

            <div className="hidden md:flex items-center justify-between gap-2 py-3 px-4 bg-primary rounded-t-2xl">
              <Image
                src={icons.close.src}
                alt={icons.close.alt}
                width={24}
                height={24}
                onClick={props.onClose}
                className="cursor-pointer"
              />
            </div>

            {props.children}
          </motion.dialog>
        </div>
      )}
    </AnimatePresence>
  );
};

const BottomSheet = memo(BaseBottomSheet) as MemoExoticComponent<(props: Props) => ReactNode> & ComposeProps;
BottomSheet.Body = BottomSheetBody;

export default BottomSheet;
