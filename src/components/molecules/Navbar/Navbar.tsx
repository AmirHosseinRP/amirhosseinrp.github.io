import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Sidebar from "~/components/molecules/Sidebar/Sidebar";
import icons from "~/shared/libs/icons";
import { routes } from "~/shared/libs/routes";
import styles from "./Navbar.module.css";
import NavbarClock from "./components/Navbar.Clock";
import NavbarMenu from "./components/Navbar.Menu";

const Navbar = () => {
  return (
    <nav className={clsx("w-full min-h-9 flex flex-row justify-between items-stretch", styles["nav"])}>
      <div className="flex justify-start items-stretch">
        <Link href={routes.home()} className="flex justify-center items-center min-h-8 pr-4 pl-5 btn-app">
          <Image
            src={icons.appleLogo.src}
            alt={icons.appleLogo.alt}
            width={20}
            height={20}
            className="relative bottom-[1px]"
          />
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
