import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Button from "@/components/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
export default function Header() {
  return (
    <>
      <div className="flex flex-row w-full justify-between px-16 mt-6 max-[1000px]:px-8">
        <Image src={logo} alt="site logo" className="w-auto h-12" />
        <Button className="w-12 h-12 relative left-1">
          <MenuRoundedIcon className="bolder-icon"/>
        </Button>
      </div>
    </>
  );
}
