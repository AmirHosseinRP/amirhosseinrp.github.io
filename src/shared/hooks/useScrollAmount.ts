import { useEffect, useState } from "react";

function useScrollAmount(): number {
  const [scrollAmount, setScrollAmount] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollAmount;
}

export default useScrollAmount;
