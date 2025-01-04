"use client";

import { type ReactNode, useEffect, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface Props {
  primaryContent: ReactNode;
  hoverContent: ReactNode;
}

const HoverReveal = (props: Props) => {
  const hoveredRef = useRef<boolean>(false);
  const clipPathElement = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const cursorPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const cursorCircleRef = useRef<HTMLDivElement | null>(null);

  const showHidden = (): void => {
    if (!hoveredRef.current) {
      hoveredRef.current = true;
      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.width = "300px";
        cursorCircleRef.current.style.height = "300px";
      }
    }
  };

  const hideText = (): void => {
    if (hoveredRef.current) {
      hoveredRef.current = false;
      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.border = "none";
        cursorCircleRef.current.style.width = "20px";
        cursorCircleRef.current.style.height = "20px";
      }
    }
  };

  const setCursor = (e: MouseEvent): void => {
    cursorPosition.current = { x: e.clientX, y: e.clientY };

    if (clipPathElement.current) {
      if (hoveredRef.current) {
        clipPathElement.current.style.clipPath = `circle(150px at ${cursorPosition.current.x}px ${cursorPosition.current.y + window.scrollY}px)`;
      } else {
        clipPathElement.current.style.clipPath = "circle(0px)";
      }
    }

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setCursor(e);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="relative w-fit h-fit flex justify-center items-center">
      {/* <div
        ref={cursorCircleRef}
        className="fixed pointer-events-none transition-all bg-green-400 rounded-full h-5 w-5 z-10"
        style={{
          transform: "translate(-50%, -50%)",
          top: "0",
          left: "0",
        }}
      /> */}

      <div onMouseOver={showHidden} onMouseOut={hideText} className="absolute inset-0">
        {props.primaryContent}
      </div>

      <div
        ref={clipPathElement}
        className="absolute inset-0"
        style={{
          transform: "translateX(-50%)",
          pointerEvents: "none",
          clipPath: "circle(0px)",
        }}
      >
        {props.hoverContent}
      </div>
    </div>
  );
};

export default HoverReveal;
