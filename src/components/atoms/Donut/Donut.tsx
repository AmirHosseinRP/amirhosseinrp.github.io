"use client";
import { memo, useEffect, useRef, useState } from "react";

interface Props {
  width?: number;
  height?: number;
  innerRadius?: number;
  r1Points?: number;
  r2Points?: number;
  fov?: number;
  scale?: number;
  shades?: string;
}

const Donut = (props: Props) => {
  const {
    width = 80,
    height = 24,
    innerRadius = 2,
    r1Points = 90,
    r2Points = 314,
    fov = 5,
    scale = 30,
    shades = ".,-~:;=!*#$@",
  } = props;

  const [output, setOutput] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState<number>(12);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const anglesRef = useRef({ A: 0, B: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newFontSize = (containerWidth * 1.5) / width;
        setFontSize(newFontSize);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    const canvasWidth = width;
    const canvasHeight = height;
    const canvasArea = canvasHeight * canvasWidth;
    const yOffset = Math.floor(canvasHeight / 2);
    const xOffset = Math.floor(canvasWidth / 2);
    const shadeChars = shades.split("");

    const renderFrame = () => {
      const buffer = Array(canvasArea).fill(" ");
      const zBuffer = Array(canvasArea).fill(0);

      const { A, B } = anglesRef.current;

      for (let j = 0; j < 6.28; j += 6.28 / r1Points) {
        for (let i = 0; i < 6.28; i += 6.28 / r2Points) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + innerRadius;
          const D = 1 / (c * h * e + f * g + fov);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;

          const x = Math.floor(xOffset + scale * D * (l * h * m - t * n));
          const y = Math.floor(yOffset + (scale / 2) * D * (l * h * n + t * m));

          const o = x + canvasWidth * y;

          const shadeConstant = Math.ceil(shadeChars.length * (2 / 3));
          const N = Math.floor(shadeConstant * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

          if (y >= 0 && y < canvasHeight && x >= 0 && x < canvasWidth && D > zBuffer[o]) {
            zBuffer[o] = D;
            buffer[o] = shadeChars[N > 0 ? Math.min(N, shadeChars.length - 1) : 0];
          }
        }
      }

      const lines: string[] = [];
      for (let y = 0; y < canvasHeight; y++) {
        let line = "";
        for (let x = 0; x < canvasWidth; x++) {
          line += buffer[x + y * canvasWidth];
        }
        lines.push(line);
      }

      setOutput(lines);

      anglesRef.current.A += 0.03;
      anglesRef.current.B += 0.02;

      frameRef.current = requestAnimationFrame(renderFrame);
    };

    frameRef.current = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [width, height, innerRadius, r1Points, r2Points, fov, scale, shades]);

  return (
    <div ref={containerRef} className="w-full h-full flex justify-center items-center col-span-1 border-app p-1">
      <pre
        className="donut-container m-0 flex flex-col justify-center items-center text-[#CCCCCC] w-full h-full bg-black py-10 text-center"
        style={{
          fontFamily: "monospace",
          lineHeight: "1",
          fontSize: `${fontSize}px`,
        }}
      >
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
};

export default memo(Donut);
