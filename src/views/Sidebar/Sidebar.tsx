"use client";

import clsx from "clsx";
import Image from "next/image";
import { memo, useState } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import icons from "~/shared/libs/icons";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "h-full flex justify-center items-stretch cursor-pointer z-[99] select-none max-h-[29px] relative",
          styles["sidebar-btn"]
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-end items-center gap-2 btn-app px-2">
          <Image
            src={icons.navbar.src}
            alt={icons.navbar.alt}
            width={20}
            height={20}
            className={isOpen ? styles["sidebar-btn-image__open"] : styles["sidebar-btn-image__close"]}
          />

          <Typography variant="label3" tagName="p" className={styles["sidebar-text"]}>
            Finder
          </Typography>
        </div>
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
