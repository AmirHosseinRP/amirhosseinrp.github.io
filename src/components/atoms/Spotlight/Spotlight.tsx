"use client";

import { type ReactNode, useEffect, useRef } from "react";
import CursorMotion from "../CursorMotion/CursorMotion";

interface CursorPosition {
  x: number;
  y: number;
}

interface Props {
  primaryContent: ReactNode;
  hoverContent: ReactNode;
}

const Spotlight = (props: Props) => {
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
        cursorCircleRef.current.style.width = "0";
        cursorCircleRef.current.style.height = "0";
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
    <div className="relative w-fit h-fit flex justify-center items-center z-40">
      <div onMouseOver={showHidden} onMouseOut={hideText} className="absolute inset-0">
        {props.primaryContent}
      </div>

      <CursorMotion duration={0}>
        <div ref={cursorCircleRef} className="bg-[#3990E2] w-0 h-0 rounded-full transition-all duration-300" />
      </CursorMotion>

      <div
        ref={clipPathElement}
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: "circle(0px)",
        }}
      >
        {props.hoverContent}
      </div>
    </div>
  );
};

export default Spotlight;
