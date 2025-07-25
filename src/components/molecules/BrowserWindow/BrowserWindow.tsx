import clsx from "clsx";
import Image from "next/image";
import { memo, PropsWithChildren } from "react";
import Header from "~/components/atoms/Header/Header";
import Typography from "~/components/atoms/Typography/Typography";
import icons from "~/shared/libs/icons";

interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

const BrowserWindow = (props: PropsWithChildren<Props>) => {
  return (
    <div className={clsx("w-full bg-tertiary", props.className)}>
      <Header title={props.title} />

      <div className="w-full border-app px-5 py-3 flex flex-row items-center justify-between bg-[#ECECEC]">
        <Typography variant="title2" className="relative bottom-0.5">
          {props.subtitle}
        </Typography>

        <div className="flex gap-5">
          <div className="flex gap-0.5">
            <button className="btn-app border-app !outline-2 bg-tertiary w-11 h-9 xs:flex justify-center items-center aspect-square hidden">
              <Image src={icons.search.src} alt={icons.search.alt} width={20} height={20} />
            </button>

            <button className="btn-app border-app !outline-2 bg-tertiary w-11 h-9 xs:flex justify-center items-center aspect-square hidden">
              <Image src={icons.earth.src} alt={icons.earth.alt} width={20} height={20} />
            </button>

            <button className="btn-app border-app !outline-2 bg-tertiary w-11 h-9 flex justify-center items-center aspect-square">
              <Image
                src={icons.bookmark.src}
                alt={icons.bookmark.alt}
                width={20}
                height={20}
                className="relative left-0.5"
              />
            </button>
          </div>

          <div className="flex gap-0.5">
            <button className="btn-app border-app !outline-2 bg-tertiary w-9 h-9 flex justify-center items-center aspect-square">
              <Image
                src={icons.arrowRight.src}
                alt={icons.arrowRight.alt}
                width={14}
                height={14}
                className="rotate-180 relative right-0.5"
              />
            </button>

            <button className="btn-app border-app !outline-2 bg-tertiary w-9 h-9 flex justify-center items-center aspect-square">
              <Image src={icons.arrowRight.src} alt={icons.arrowRight.alt} width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default memo(BrowserWindow);
