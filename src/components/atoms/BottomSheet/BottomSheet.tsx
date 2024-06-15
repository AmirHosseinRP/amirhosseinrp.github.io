"useClient";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { memo, type MemoExoticComponent, type PropsWithChildren, type ReactNode } from "react";
import Typography from "../Typography/Typography";
import BottomSheetBody from "./components/BottomSheet.Body";

interface ComposeProps {
  Body: typeof BottomSheetBody;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: "small" | "medium" | "large";
}

const BaseBottomSheet = (props: PropsWithChildren<Props>) => {
  const matchMedia = gsap.matchMedia();

  useGSAP(() => {
    matchMedia.add("(min-width: 768px)", () => {
      if (props.isOpen) {
        gsap.to(".sheet-back-drop", {
          opacity: 1,
          display: "block",
        });

        gsap.to(".sheet", {
          transform: "translate(50%, 50%) scale(1)",
          bottom: "50%",
          right: "50%",
          display: "block",
          duration: 0.2,
        });
      } else {
        gsap.to(".sheet-back-drop", {
          opacity: 0,
          display: "none",
        });

        gsap.to(".sheet", {
          transform: "translate(50%, 50%) scale(0)",
          bottom: "50%",
          right: "50%",
          display: "none",
          duration: 0.2,
        });
      }
    });

    matchMedia.add("(max-width: 767px)", () => {
      if (props.isOpen) {
        gsap.to(".sheet-back-drop", {
          opacity: 1,
          display: "block",
        });

        gsap.to(".sheet", {
          bottom: 0,
          right: 0,
          transform: "none",
          display: "block",
        });

        gsap.registerPlugin(Draggable);

        Draggable.create(".sheet", {
          type: "y",
        });
      } else {
        gsap.to(".sheet-back-drop", {
          opacity: 0,
          display: "none",
        });

        gsap.to(".sheet", {
          bottom: "-100dvh",
          right: 0,
          transform: "none",
          display: "none",
        });
      }
    });
  }, [props.isOpen]);

  return (
    <>
      <div
        className={
          "sheet-back-drop fixed inset-0 backdrop-blur-sm bg-rp-transparent-black-12 z-40 hidden"
        }
        onClick={props.onClose}
      />

      <div
        className={clsx(
          "fixed sheet md:p-0 bg-transparent z-50 max-h-dvh shadow-dig-shadow-2xl rounded-2xl w-full hidden",
          { "md:max-w-[28rem]": props.size === "small" },
          { "md:max-w-[36rem]": !props.size || props.size === "medium" },
          { "md:max-w-[48rem]": props.size === "large" }
        )}
      >
        <div className="flex items-center justify-between gap-2 py-3 px-4 bg-rp-bg-paper rounded-t-2xl">
          <Typography variant="title1">{props.title}</Typography>

          {/* <Image
            src={images.icon.close.src}
            alt={images.icon.close.alt}
            width={24}
            height={24}
            priority
            className="btn btn-square btn-sm btn-link"
            onClick={props.onClose}
          /> */}
        </div>

        {props.children}
      </div>
    </>
  );
};

const BottomSheet = memo(BaseBottomSheet) as MemoExoticComponent<
  (props: PropsWithChildren<Props>) => ReactNode
> &
  ComposeProps;
BottomSheet.Body = BottomSheetBody;

export default BottomSheet;
