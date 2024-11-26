"use client";

import { frame, motion, useMotionValue } from "framer-motion";
import { forwardRef, memo, type PropsWithChildren, type RefObject, useEffect } from "react";
import { checkUserDevice, getBrowserName } from "~/shared/utils/helpers";

interface Props extends PropsWithChildren {
  durations: number[];
}

const CursorMotion = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const isMobile =
    checkUserDevice() === "MOBILE_DEVICE" && (getBrowserName() === "CHROME" || getBrowserName() === "SAFARI");

  useEffect(() => {
    if (!isMobile) {
      if (!(ref as RefObject<HTMLDivElement>)?.current) return;

      const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
        frame.read(() => {
          const current = (ref as RefObject<HTMLDivElement>).current;
          if (current) {
            x.set(clientX - current.offsetLeft - current.offsetWidth / 2);
            y.set(clientY - current.offsetTop - current.offsetHeight / 2);
          }
        });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, [ref]);

  useEffect(() => {
    if (isMobile) {
      if (!(ref as RefObject<HTMLDivElement>)?.current) return;

      const current = (ref as RefObject<HTMLDivElement>).current;

      if (current) {
        const handleDragStart = (event: DragEvent) => {
          event.dataTransfer?.setDragImage(new Image(), 0, 0);
        };

        const handleDrag = (event: DragEvent) => {
          if (event.clientX === 0 && event.clientY === 0) return;

          x.set(event.clientX - current.offsetLeft - current.offsetWidth / 2);
          y.set(event.clientY - current.offsetTop - current.offsetHeight / 2);
        };

        current.setAttribute("draggable", "true");
        current.addEventListener("dragstart", handleDragStart);
        current.addEventListener("drag", handleDrag);

        return () => {
          current.removeAttribute("draggable");
          current.removeEventListener("dragstart", handleDragStart);
          current.removeEventListener("drag", handleDrag);
        };
      }
    }
  }, [ref, x, y]);

  return (
    <motion.div drag={isMobile} ref={ref} className="w-fit h-fit relative flex justify-center items-center">
      {Array.isArray(props.children)
        ? props.children.map((child, index) => (
            <motion.div
              key={index}
              style={{
                x,
                y,
                transition: `transform ${props.durations[index]}s ease-out`,
              }}
              className="absolute"
            >
              {child}
            </motion.div>
          ))
        : props.children}
    </motion.div>
  );
});

CursorMotion.displayName = "CursorMotion";

export default memo(CursorMotion);
