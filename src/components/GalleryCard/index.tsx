import Image, { StaticImageData } from "next/image";

type GalleryCardProps = {
  image: string | StaticImageData;
};
export default function GalleryCard(props : GalleryCardProps) {
  return (
    <>
      <div className="relative h-[50vh] w-[35.5vw] aspect-[4/3] max-[1000px]:w-[50vw] max-[1000px]:h-[40vh] max-[650px]:w-[80vw] max-[650px]:h-[30vh]">
        <Image
          src={props.image}
          alt={".."}
          fill
          className="object-cover"
          loading="eager"
          sizes="50vw"
        />
      </div>
    </>
  );
}
