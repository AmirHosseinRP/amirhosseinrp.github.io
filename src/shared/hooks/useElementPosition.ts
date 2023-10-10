import { useCallback, useState, type RefObject } from "react";

function useElementPosition(ref: RefObject<HTMLElement>) {
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });

  const handlePosition = useCallback(() => {
    const element = ref.current;
    if (element) {
      const elemRect = element.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      const x = elemRect.left - bodyRect.left;
      const y = elemRect.top - bodyRect.top;

      setElementPosition({ x, y });
    }
  }, [ref]);

  return elementPosition;
}

export default useElementPosition;
