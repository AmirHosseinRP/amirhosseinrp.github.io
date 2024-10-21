"use client";

import { frame, motion, useMotionValue } from "framer-motion";
import { memo, type PropsWithChildren, useEffect, useRef } from "react";

interface Props extends PropsWithChildren {
  duration: number;
}

const CursorMotion = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        if (ref.current) {
          x.set(clientX - ref.current.offsetLeft - ref.current.offsetWidth / 2);
          y.set(clientY - ref.current.offsetTop - ref.current.offsetHeight / 2);
        }
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <motion.div ref={ref} style={{ x, y, transition: `transform ${props.duration}s ease-out` }} className="w-fit h-fit">
      {props.children}
    </motion.div>
  );
};

export default memo(CursorMotion);
