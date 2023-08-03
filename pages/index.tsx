import Gallery from "@/components/Gallery";
import RevealingDiv from "@/components/RevealingDiv";
import Header from "@/views/Header";
import HelloSection from "@/views/HelloSection";

export default function Home() {
  return (
    <>
      <Header />
      <HelloSection />
      <Gallery />
      <RevealingDiv>
        <h1 className="text-6xl">byeeeee</h1>
      </RevealingDiv>
      {/* <Image src={logo} alt="" className="w-20 h-10"></Image> */}
    </>
  );
}
