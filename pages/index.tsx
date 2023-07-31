import Image from "next/image";
import {useRef, useState } from "react";
import Gallery from "@/components/Gallery";
import logo from "@/assets/images/logo.png";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-row w-full justify-around">
        <Image src={logo} alt="site logo" className="w-[200px] h-auto" />
        <h1 className="text-4xl mt-4">Amirhossein Rezapanah</h1>
      </div>
      <Gallery />

      <div ref={containerRef}>
        <Slide direction="up" in={checked} container={containerRef.current}>
          <h2>slide test</h2>
        </Slide>
      </div>
      <Switch checked={checked} onChange={handleChange} />
      {/* <Image src={logo} alt="" className="w-20 h-10"></Image> */}
    </>
  );
}
