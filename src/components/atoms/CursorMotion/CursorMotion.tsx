"use client";

import { motion } from "motion/react";
import { memo, type PropsWithChildren } from "react";
import { useCursorMotion } from "~/hooks/useCursorMorion";

interface Props extends PropsWithChildren {
  duration: number;
}

const CursorMotion = (props: Props) => {
  const { ref, style } = useCursorMotion({ duration: props.duration, defaultCircular: true });

  return (
    <motion.div ref={ref} style={style} className="fixed w-fit h-fit">
      {props.children}
    </motion.div>
  );
};

export default memo(CursorMotion);
