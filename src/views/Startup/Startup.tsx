"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import env from "~/shared/config/env";
import icons from "~/shared/libs/icons";
import styles from "./Startup.module.css";

export default function Startup({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(onComplete, 500);
        return 100;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <section className="w-[90%] flex flex-col justify-between items-center border-2 border-solid border-black bg-tertiary px-6 sm:px-10 py-5 xs:py-7 max-w-[40rem] gap-5">
        <div className="w-full max-h-80 pb-5 aspect-video relative bg-white border-2 border-solid border-black flex flex-col justify-center items-center gap-2">
          <Image
            src={icons.startupFinderLogo.src}
            alt={icons.startupFinderLogo.alt}
            width={500}
            height={500}
            className="w-2/3 h-2/3 p-2"
            priority
            loading="eager"
          />

          <Typography
            variant="h1"
            className="!font-[Garamond] !font-light text-center text-[2.2rem] xs:text-[3.4rem] md:text-[4.5rem]"
          >
            a.rezapanah {env.app.version}
          </Typography>
        </div>

        <label htmlFor="loading" className="rp-prose-h5">
          Starting Up...
        </label>

        <progress id="loading" value={progress} max="100" className={clsx("w-full max-w-72 h-6", styles["progress"])}>
          32%
        </progress>
      </section>
    </div>
  );
}
