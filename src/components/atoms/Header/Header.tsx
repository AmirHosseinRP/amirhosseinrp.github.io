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
    <header className="w-full h-auto flex flex-row items-stretch bg-secondary py-0.5 px-2 border-2 border-solid border-reverse">
      <Image src={icons.headerLeft.src} alt={icons.headerLeft.alt} width={13} height={13} className="mr-2" />

      <div className="min-h-full flex-1 bg-header bg-contain bg-center bg-no-repeat mr-3" />

      <Typography variant="title1">
        {props.isLoading ? <div className="animate-pulse bg-gray-100 rounded-sm h-6 w-28" /> : props.title}
      </Typography>

      <div className="min-h-full flex-1 bg-header bg-contain bg-center bg-no-repeat ml-3" />

      <Image src={icons.headerRight.src} alt={icons.headerRight.alt} width={34} height={13} className="ml-2" />
    </header>
  );
};

export default memo(Header);
