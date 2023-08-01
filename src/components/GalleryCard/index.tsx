import testImage from "@/assets/images/64601dd4ba26bca451a809c4_645c18e71f7eb71b9a4a5aa8_640f62fdb97d747d22b81c08_studio-blackthorns-XpPNzr_ZeRk-unsplash (1).webp";
import Image from "next/image";
export default function GalleryCard() {
  return (
    <>
      <div className="relative h-[50vh] w-[35.5vw] aspect-[4/3] max-[1000px]:w-[50vw] max-[1000px]:h-[40vh] max-[500px]:w-[80vw] max-[500px]:h-[30vh]">
        <Image src={testImage} alt={".."} fill className="object-cover" />
      </div>
    </>
  );
}
