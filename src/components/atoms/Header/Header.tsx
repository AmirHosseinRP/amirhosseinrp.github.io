import Image from "next/image";
import { memo, PropsWithChildren, ReactNode } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import icons from "~/shared/libs/icons";

interface Props {
  title: string;
  isLoading?: boolean;
  endAdornment?: ReactNode;
}

const Header = (props: PropsWithChildren<Props>) => {
  return (
    <header className="w-full h-10 flex flex-row items-stretch bg-secondary py-0.5 px-1 border-app">
      <Image src={icons.headerLeft.src} alt={icons.headerLeft.alt} width={30} height={30} className="mr-2" />

      <div className="min-h-full w-full flex flex-col justify-center items-center flex-1 mr-3 my-0.5 relative bottom-0.5 overflow-hidden">
        <div className="w-full border-solid border-t-2 border-t-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
      </div>

      <Image src={icons.appleLogo.src} alt={icons.appleLogo.alt} width={24} height={24} className="mr-2" />

      <Typography variant="h4" className="h-full flex justify-center items-center">
        {props.isLoading ? <div className="animate-pulse bg-gray-100 rounded-sm h-6 w-28" /> : props.title}
      </Typography>

      <div className="min-h-full w-full flex flex-col justify-center items-center flex-1 ml-3 my-0.5 relative bottom-0.5 overflow-hidden">
        <div className="w-full border-solid border-t-2 border-t-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
        <div className="w-full border-t-2 border-solid border-t-tertiary border-b-2 border-b-[#999999]" />
      </div>

      <Image src={icons.headerRight.src} alt={icons.headerRight.alt} width={30} height={30} className="ml-2" />
    </header>
  );
};

export default memo(Header);
