import Gallery from "@/views/Gallery";
import Header from "@/views/Header";
import HelloSection from "@/views/HelloSection";

export default function Home() {
  return (
    <>
      <Header />
      <HelloSection />
      <Gallery />
      <Gallery textGallery />
    </>
  );
}
