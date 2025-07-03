import clsx from "clsx";
import Image from "next/image";
import { memo, PropsWithChildren } from "react";
import Header from "~/components/atoms/Header/Header";
import icons from "~/shared/libs/icons";

interface Props {
  title: string;
  className?: string;
}

const BrowserWindow = (props: PropsWithChildren<Props>) => {
  return (
    <div className={clsx("w-full bg-tertiary", props.className)}>
      <Header title={props.title} />

      <div className="w-full border-app px-5 py-3 flex flex-row bg-[#ECECEC]">
        <button className="btn-app p-2 border-app !outline-2 after:!border-2 before:!border-2 bg-tertiary">
          <Image src={icons.arrowRight.src} alt={icons.arrowRight.alt} width={18} height={22} />
        </button>
      </div>

      {props.children}
    </div>
  );
};

export default memo(BrowserWindow);
