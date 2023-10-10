import { useEffect, useState } from "react";

function useCursorPosition(): { cursorX: number; cursorY: number } {
  const [cursorPosition, setCursorPosition] = useState({ cursorX: 0, cursorY: 0 });

  useEffect(() => {
    const handleCursorMove = (event: MouseEvent) => {
      setCursorPosition({
        cursorX: event.clientX,
        cursorY: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleCursorMove);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  return cursorPosition;
}

export default useCursorPosition;
