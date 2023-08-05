import Image from "next/image";
import logo from "@/assets/images/logo-removebg.png";
import Button from "@/components/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useWindowSize from "@/hooks/useWindowSize";
export default function Header() {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;

  return (
    <>
      <div className="fixed flex flex-row w-full justify-between px-16 pt-6 pb-4 max-[1000px]:px-8 z-20 bg-[rgba(0,0,0,0.7)]">
        <Image
          src={logo}
          alt="site logo"
          className="w-auto h-14 max-[650px]:h-10"
        />
        {windowWidth < 650 && (
          <Button className="w-12 h-12 relative left-1 max-[650px]:w-8 max-[650px]:h-8">
            <MenuRoundedIcon className="bolder-icon" />
          </Button>
        )}
      </div>
    </>
  );
}
