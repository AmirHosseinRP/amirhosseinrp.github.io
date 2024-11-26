import dynamic from "next/dynamic";
const Eye = dynamic(async () => await import("~/ui/Eye/Eye"), { ssr: false });

export default function Home() {
  return (
    <>
      <Eye />
    </>
  );
}
