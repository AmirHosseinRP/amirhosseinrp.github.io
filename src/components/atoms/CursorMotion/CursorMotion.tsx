"use client";

import { frame, motion, useMotionValue } from "motion/react";
import { memo, type PropsWithChildren, useEffect, useRef } from "react";
import { checkUserDevice } from "~/shared/utils/helpers";

interface Props extends PropsWithChildren {
  duration: number;
}

const CursorMotion = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const isUserInteracting = useRef(false);

  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const isMobile = checkUserDevice() === "MOBILE_DEVICE";

  useEffect(() => {
    const radius = Math.min(window.innerWidth, window.innerHeight) / 3;
    const speed = 2;
    let angle = 0;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const animate = () => {
      if (!isUserInteracting.current) {
        angle += (Math.PI * 2) / (60 * speed);
        const newX = centerX + radius * Math.cos(angle);
        const newY = centerY + radius * Math.sin(angle);

        x.set(newX - (ref.current?.offsetWidth ?? 0) / 2);
        y.set(newY - (ref.current?.offsetHeight ?? 0) / 2);
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (!ref?.current) return;

      const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
        isUserInteracting.current = true;

        frame.read(() => {
          const current = ref.current;
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
      if (!ref?.current) return;

      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();

        isUserInteracting.current = true;

        const touch = e.touches[0];

        frame.read(() => {
          const current = ref.current;
          if (current) {
            x.set(touch.clientX - current.offsetLeft - current.offsetWidth / 2);
            y.set(touch.clientY - current.offsetTop - current.offsetHeight / 2);
          }
        });
      };

      window.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => window.removeEventListener("touchmove", handleTouchMove);
    }
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, transition: `transform ${props.duration}s ease-out` }}
      className="fixed w-fit h-fit"
    >
      {props.children}
    </motion.div>
  );
};

CursorMotion.displayName = "CursorMotion";

export default memo(CursorMotion);
