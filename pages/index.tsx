import Image from "next/image";
import { Inter } from "next/font/google";
import bgGif from "@/assets/images/ezgif.com-gif-maker.gif";
import background from "@/assets/images/background.jpg";
import bgDown from "@/assets/images/background-upsidedown.jpg";
import { useState, useEffect } from "react";
import useScrollAmount from "@/hooks/useScrollAmount";
import Gallery from "@/components/Gallery";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-row w-full justify-around">
        <Image src={logo} alt="site logo" className="w-[200px] h-auto" />
        <h1 className="text-4xl mt-4">Amirhossein Rezapanah</h1>
      </div>
      {/* <Gallery />
      <Image src={logo} alt="" className="w-20 h-10"></Image> */}
    </>
  );
}
