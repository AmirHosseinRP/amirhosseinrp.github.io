import RevealingDiv from "@/components/RevealingDiv";

export default function HelloSection() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-5 w-full mt-[90px]">
        <RevealingDiv visible className="!h-96 max-[650px]:!h-[50vw]">
          <div className="h-full flex flex-col justify-center items-center text-center gap-4">
            <h1 className="text-7xl max-[800px]:text-6xl max-[650px]:text-[9vw] stroked-text-black">Hi I&apos;m <span className="text-black stroked-text-white font-bold">Amirhossein</span></h1>
            <h1 className="text-7xl max-[800px]:text-6xl max-[650px]:text-[9vw] stroked-text-black"><span className="text-black stroked-text-white font-bold">Front-End</span> Developer</h1>
          </div>
        </RevealingDiv>
      </div>
    </>
  );
}
