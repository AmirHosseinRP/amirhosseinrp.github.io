"use client";

import clsx from "clsx";
import Image from "next/image";
import { memo, useState } from "react";
import icons from "~/shared/libs/icons";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "h-full flex justify-center items-center aspect-square cursor-pointer z-[99] select-none",
          styles["sidebar-btn"]
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={icons.navbar.src}
          alt={icons.navbar.alt}
          width={42}
          height={42}
          className={isOpen ? styles["sidebar-btn-image__open"] : styles["sidebar-btn-image__close"]}
        />
      </div>

      {isOpen && (
        <div
          className="bg-transparent-black-24 absolute inset-0 w-full mt-10 z-50"
          style={{ height: "calc(100% - 2.5rem)" }}
        >
          menu
        </div>
      )}
    </>
  );
};

export default memo(Sidebar);
