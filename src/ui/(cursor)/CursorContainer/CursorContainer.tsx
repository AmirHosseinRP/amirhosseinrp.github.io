"use client";

import CursorObject from "@/ui/(cursor)/CursorObject/CursorObject";
import { memo, useEffect, useRef, type MouseEvent } from "react";
import CursorEye from "../CursorEye/CursorEye";

const CursorContainer = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  let lastX = 0;
  let lastY = 0;

  const handleMouseMove = (event: MouseEvent) => {
    lastX = event.clientX;
    lastY = event.clientY;
  };

  useEffect(() => {
    const animationLoop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${lastX}px, ${lastY}px)`;
      }

      requestAnimationFrame(animationLoop);
    };

    animationLoop();
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-500 absolute" onMouseMove={handleMouseMove}>
      <CursorObject ref={cursorRef} />
      <CursorEye />
    </div>
  );
};

export default memo(CursorContainer);
