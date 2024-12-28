import { frame, useMotionValue, type MotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { checkUserDevice } from "~/shared/utils/helpers";

interface UseCursorMotionParams {
  duration: number;
  defaultCircular?: boolean;
}

interface UseCursorMotionReturn {
  ref: React.RefObject<HTMLDivElement>;
  x: MotionValue;
  y: MotionValue;
  style: {
    x: MotionValue;
    y: MotionValue;
    transition: string;
  };
}

export const useCursorMotion = (params: UseCursorMotionParams): UseCursorMotionReturn => {
  const ref = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false);

  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const isMobile = checkUserDevice() === "MOBILE_DEVICE";

  // Circular motion animation
  useEffect(() => {
    if (params.defaultCircular) {
      const radius = Math.min(window.innerWidth, window.innerHeight) / 3;
      const speed = 4;
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
    }
  }, []);

  // Desktop pointer movement
  useEffect(() => {
    if (isMobile || !ref?.current) return;

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
  }, [ref]);

  // Mobile touch movement
  useEffect(() => {
    if (!isMobile || !ref?.current) return;

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
  }, [ref]);

  return {
    ref,
    x,
    y,
    style: {
      x,
      y,
      transition: `transform ${params.duration}s ease-out`,
    },
  };
};
