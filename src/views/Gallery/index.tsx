import useScrollAmount from "@/hooks/useScrollAmount";
import GalleryCard from "../../components/GalleryCard";
import TextCard from "../../components/TextCard";
import testImage from "@/assets/images/test1.webp";
import testImage2 from "@/assets/images/test2.webp";
import testImage3 from "@/assets/images/test3.webp";
import testImage4 from "@/assets/images/test4.webp";
import RevealingDiv from "@/components/RevealingDiv";

type GalleryProps = {
  textGallery?: boolean;
};

export default function Gallery(props: GalleryProps) {
  const scrollAmount = useScrollAmount();
  return (
    <>
      {props.textGallery ? (
        <section className="w-screen h-[50vw] overflow-hidden mt-10">
          <div className="flex flex-col h-fit gap-4 relative items-center">
            <div
              className="flex flex-row overflow-hidden gap-4 relative w-[400vw] justify-center items-center duration-500 ease-out"
              style={{ left: `${-scrollAmount / 3 + 250}px` }}
            >
              <RevealingDiv direction="left" slideOnly>
                <div className="flex flex-row gap-4 w-full justify-center">
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                </div>
              </RevealingDiv>
            </div>
            <div
              className="flex flex-row overflow-hidden gap-4 relative w-[400vw] justify-center items-center duration-500 ease-out"
              style={{ left: `${scrollAmount / 3 - 300}px` }}
            >
              <RevealingDiv direction="right" slideOnly>
                <div className="flex flex-row gap-4 w-full justify-center">
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                  <TextCard>Hello</TextCard>
                  <TextCard isBlack>Hello</TextCard>
                </div>
              </RevealingDiv>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-screen h-[85vh] max-[650px]:h-[60vh] overflow-hidden">
          <div className="flex flex-col h-fit gap-4 relative bottom-[40%] -rotate-[23deg] items-center">
            <div
              className="flex flex-row overflow-hidden gap-4 w-[300vw] relative duration-500 ease-out"
              style={{ left: `${-scrollAmount / 2 + 40}px` }}
            >
              <RevealingDiv direction="right" visible slideOnly>
                <div className="flex flex-row gap-4">
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                  <GalleryCard image={testImage} />
                </div>
              </RevealingDiv>
            </div>
            <div
              className="flex flex-row overflow-hidden gap-4 w-[300vw] relative duration-500 ease-out"
              style={{ left: `${scrollAmount / 5}px` }}
            >
              <RevealingDiv direction="left" visible slideOnly>
                <div className="flex flex-row gap-4">
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                  <GalleryCard image={testImage2} />
                </div>
              </RevealingDiv>
            </div>
            <div
              className="flex flex-row overflow-hidden gap-4 w-[300vw] relative duration-500 ease-out"
              style={{ left: `${-scrollAmount / 2 + 100}px` }}
            >
              <RevealingDiv direction="right" visible slideOnly>
                <div className="flex flex-row gap-4">
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                  <GalleryCard image={testImage3} />
                </div>
              </RevealingDiv>
            </div>
            <div
              className="flex flex-row overflow-hidden gap-4 w-[300vw] relative duration-500 ease-out"
              style={{ left: `${scrollAmount / 3 - 370}px` }}
            >
              <RevealingDiv direction="left" visible slideOnly>
                <div className="flex flex-row gap-4">
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                  <GalleryCard image={testImage4} />
                </div>
              </RevealingDiv>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

//910px
