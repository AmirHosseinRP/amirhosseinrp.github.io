import { Fade } from "@mui/material";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { useRef, useState, useEffect, ReactElement } from "react";

type RevealDivProps = {
  visible?: boolean;
  children: ReactElement;
  fadeOnly?: boolean;
  className?: string;
};
export default function RevealingDiv(props: RevealDivProps) {
  const [isElementVisible, setIsElementVisible] = useState(props.visible);

  // Ref to the element you want to track
  const targetElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to check if the target element is in the viewport
    const checkElementVisibility = () => {
      if (!targetElementRef.current) return;

      const element = targetElementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is at least 50% visible
      if (rect.top < windowHeight * 0.95 && rect.bottom >= 0)
        setIsElementVisible(true);
    };

    // Add event listener to track scroll and resize events
    document.addEventListener("scroll", checkElementVisibility);
    window.addEventListener("resize", checkElementVisibility);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener("scroll", checkElementVisibility);
      window.removeEventListener("resize", checkElementVisibility);
    };
  }, []);
  return (
    <>
      <div
        ref={targetElementRef}
        className={`h-fit w-full flex flex-col justify-center items-center ${props.className}`}
      >
        {props.fadeOnly ? (
          <Fade in={isElementVisible} timeout={1800}>
            {props.children}
          </Fade>
        ) : (
          <Slide
            direction="up"
            in={isElementVisible}
            container={targetElementRef.current}
            timeout={800}
          >
            <div className="w-full">
              <Fade in={isElementVisible} timeout={1800}>
                {props.children}
              </Fade>
            </div>
          </Slide>
        )}
      </div>
    </>
  );
}
