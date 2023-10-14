import { useEffect, useState } from "react";

function useCursorPosition(): { x: number; y: number } {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleCursorMove = (event: MouseEvent) => {
      setCursorPosition({
        x: window.scrollX + event.clientX,
        y: window.scrollY + event.clientY,
      });
    };

    const updateCursorPosition = (event: MouseEvent) => {
      animationFrameId = window.requestAnimationFrame(() => handleCursorMove(event));
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return cursorPosition;
}

export default useCursorPosition;
