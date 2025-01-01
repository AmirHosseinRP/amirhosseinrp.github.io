"use client";

import { AnimatePresence, motion } from "motion/react";
import { memo, useEffect, useRef, useState, type ReactNode } from "react";
import { useCursorMotion } from "~/hooks/useCursorMorion";

interface Props {
  primaryChildren: ReactNode;
  secondaryChildren: ReactNode;
}

const HoverReveal = (props: Props) => {
  const { ref, style } = useCursorMotion({ duration: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {props.primaryChildren}

      <AnimatePresence>
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-fit h-fit">{props.secondaryChildren}</div>
            <motion.div ref={ref} style={style} className="fixed w-32 h-32 rounded-full bg-red-600" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(HoverReveal);
