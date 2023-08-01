import Image from "next/image";
import Gallery from "@/components/Gallery";
import logo from "@/assets/images/logo.png";
import RevealingDiv from "@/components/RevealingDiv";
import HelloSection from "@/views/HelloSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-row w-full justify-around">
        <Image src={logo} alt="site logo" className="w-[200px] h-auto" />
        <h1 className="text-4xl mt-4">Amirhossein Rezapanah</h1>
      </div>
      <HelloSection/>
      <Gallery />
      <RevealingDiv>
        <h1 className="text-6xl">byeeeee</h1>
      </RevealingDiv>
      {/* <Image src={logo} alt="" className="w-20 h-10"></Image> */}
    </>
  );
}
