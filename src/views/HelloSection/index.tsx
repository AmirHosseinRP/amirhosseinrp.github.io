import RevealingDiv from "@/components/RevealingDiv";

export default function HelloSection() {
  return (
    <>
      <RevealingDiv visible>
        <div className="h-[450px] flex justify-center items-center">
          <h1 className="text-7xl">Hi, I&apos;m Amirhossein</h1>
        </div>
      </RevealingDiv>
    </>
  );
}
