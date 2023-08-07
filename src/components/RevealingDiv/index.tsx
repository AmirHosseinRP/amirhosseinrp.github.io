import { Fade } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useRef, useState, useEffect, ReactElement } from "react";

type RevealDivProps = {
  visible?: boolean;
  children: ReactElement;
  slideOnly?: boolean;
  className?: string;
  direction: "up" | "left" | "right" | "down";
};
export default function RevealingDiv(props: RevealDivProps) {
  const [isElementVisible, setIsElementVisible] = useState(props.visible);

  const targetElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkElementVisibility = () => {
      if (!targetElementRef.current) return;

      const element = targetElementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight * 0.95 && rect.bottom >= 0)
        setIsElementVisible(true);
    };

    document.addEventListener("scroll", checkElementVisibility);
    window.addEventListener("resize", checkElementVisibility);

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
        {props.slideOnly ? (
          <Slide
            direction={props.direction}
            in={isElementVisible}
            container={targetElementRef.current}
            easing={{
              enter: "cubic-bezier(0, 1.5, 0.8, 1)",
            }}
            timeout={800}
          >
            <div className="w-full">
              <Fade in={isElementVisible} timeout={100}>
                {props.children}
              </Fade>
            </div>
          </Slide>
        ) : (
          <Slide
            direction={props.direction}
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
