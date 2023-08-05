import useScrollAmount from "@/hooks/useScrollAmount";
import GalleryCard from "../GalleryCard";

export default function Gallery() {
  const scrollAmount = useScrollAmount();
  return (
    <>
      <section className="w-screen h-[85vh] max-[650px]:h-[60vh] overflow-hidden">
        <div className="flex flex-col h-fit gap-4 relative bottom-[40%] -rotate-[23deg] items-center">
          <div
            className="flex flex-row overflow-hidden gap-4 w-[300vw] relative"
            style={{ left: `${-scrollAmount / 2 + 40}px` }}
          >
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
          <div
            className="flex flex-row overflow-hidden gap-4 w-[300vw] relative"
            style={{ left: `${scrollAmount / 5}px` }}
          >
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
          <div
            className="flex flex-row overflow-hidden gap-4 w-[300vw] relative"
            style={{ left: `${-scrollAmount / 2 + 100}px` }}
          >
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
          <div
            className="flex flex-row overflow-hidden gap-4 w-[300vw] relative"
            style={{ left: `${scrollAmount / 3 - 370}px` }}
          >
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </section>
    </>
  );
}

//910px
