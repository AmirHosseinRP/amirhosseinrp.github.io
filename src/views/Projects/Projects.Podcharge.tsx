import Image from "next/image";
import { memo } from "react";
import BrowserWindow from "~/components/molecules/BrowserWindow/BrowserWindow";
import images from "~/shared/libs/images";

const ProjectsPodCharge = () => {
  return (
    <>
      <BrowserWindow title="Podcharge">
        <section className="border-app p-1">
          <Image
            src={images.podcharge.desktop.src}
            alt={images.podcharge.desktop.alt}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </section>
      </BrowserWindow>
    </>
  );
};

export default memo(ProjectsPodCharge);
