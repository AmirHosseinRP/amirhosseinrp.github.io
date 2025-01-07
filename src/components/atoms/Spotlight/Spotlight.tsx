"use client";

import { animate, AnimatePresence, motion, useMotionTemplate, useMotionValue } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const CursorMotion = dynamic(async () => await import("~/components/atoms/CursorMotion/CursorMotion"), { ssr: false });

interface Props {
  primaryContent: ReactNode;
  hoverContent: ReactNode;
}

const HoverReveal = (props: Props) => {
  const [size] = useState<{ width: number; height: number } | undefined>(undefined);
  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);
  const maskSize = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(circle at ${maskX}px ${maskY}px, black 0px, black ${maskSize}px, transparent ${maskSize}px)`;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!size) return;

    const { width, height } = size;

    void animate(maskSize, Math.sqrt(width * width + height * height));
    void animate(maskX, width / 2);
    void animate(maskY, height / 2);
  }, [size]);

  return (
    <div className="relative w-full flex justify-center items-center">
      {props.primaryContent}

      <CursorMotion duration={0}>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="bg-blue-400 w-[500px] h-[500px] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                duration: 0.25,
              }}
            />
          )}
        </AnimatePresence>
      </CursorMotion>

      <section className="w-fit absolute inset-0 mx-auto">
        <motion.div
          onHoverStart={async () => {
            setIsHovered(true);
            if (!size) await animate(maskSize, 250);
          }}
          onHoverEnd={async () => {
            setIsHovered(false);
            if (!size) await animate(maskSize, 0);
          }}
          onPointerMove={e => {
            if (size) return;
            const { top, left } = e.currentTarget.getBoundingClientRect();
            maskX.set(e.clientX - left);
            maskY.set(e.clientY - top);
          }}
          onTouchStart={async () => {
            setIsHovered(true);
            if (!size) await animate(maskSize, 250);
          }}
          onTouchEnd={async () => {
            setIsHovered(false);
            if (!size) await animate(maskSize, 0);
          }}
          onTouchMove={e => {
            e.preventDefault();
            if (size) return;
            const touch = e.touches[0];
            const { top, left } = e.currentTarget.getBoundingClientRect();
            maskX.set(touch.clientX - left);
            maskY.set(touch.clientY - top);
          }}
          style={{ WebkitMaskImage: maskImage, maskImage }}
        >
          {props.hoverContent}
        </motion.div>
      </section>
    </div>
  );
};

export default HoverReveal;
