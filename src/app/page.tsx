import dynamic from "next/dynamic";

// const Eye = dynamic(async () => await import("~/ui/Eye/Eye"), { ssr: false });
const HoverReveal = dynamic(async () => await import("~/components/atoms/HoverReveal/HoverReveal"), { ssr: false });

export default function Home() {
  return (
    <>
      <HoverReveal primaryChildren={<div>amirhossein</div>} secondaryChildren={<div>irho</div>} />

      {/* <Eye /> */}
    </>
  );
}
