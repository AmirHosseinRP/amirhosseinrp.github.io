import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import icons from "~/shared/libs/icons";
import { routes } from "~/shared/libs/routes";
import Sidebar from "~/views/Sidebar/Sidebar";
import styles from "./Navbar.module.css";
import NavbarClock from "./components/Navbar.Clock";
import NavbarMenu from "./components/Navbar.Menu";

const Navbar = () => {
  return (
    <nav className={clsx("w-full min-h-9 flex flex-row justify-between items-stretch", styles["nav"])}>
      <div className="flex justify-start items-stretch gap-5">
        <Link href={routes.home()} className="max-h-[29px] relative top-[3px]">
          <Typography variant="title1" tagName="h5" className="btn-app px-2 h-full pt-0.5">
            a.rezapanah
          </Typography>
        </Link>

        <NavbarMenu />
      </div>

      <div className="flex justify-end items-center">
        <NavbarClock />

        <Image src={icons.separator.src} alt={icons.separator.alt} width={8} height={36} />

        <Sidebar />
      </div>
    </nav>
  );
};

export default memo(Navbar);
