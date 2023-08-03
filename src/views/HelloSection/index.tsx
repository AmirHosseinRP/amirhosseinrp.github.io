import RevealingDiv from "@/components/RevealingDiv";
import Image from "next/image";
import gif from "@/assets/images/ezgif.com-gif-maker-copy.gif";

export default function HelloSection() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-5">
        <RevealingDiv visible className="!w-3/5 top-[9%] relative left-5">
          <div className="h-full flex flex-col justify-center items-center text-center gap-4">
            <h1 className="text-6xl">Hi I&apos;m <span className="text-black stroked-text-white font-bold">Amirhossein</span></h1>
            <h1 className="text-6xl"><span className="text-black stroked-text-white font-bold">Front-End</span> Developer</h1>
          </div>
        </RevealingDiv>
        <RevealingDiv visible fadeOnly className="!w-2/5 relative right-5">
          <Image src={gif} alt=".." quality={100}/>
        </RevealingDiv>
      </div>
    </>
  );
}
