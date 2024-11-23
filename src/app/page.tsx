import dynamic from "next/dynamic";
import Link from "next/link";
import ThemeToggle from "~/components/atoms/ThemeToggle/ThemeToggle";
import TestSection from "~/components/TestSection/TestSection";
const Eye = dynamic(async () => await import("~/ui/Eye/Eye"), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="bg-primary">Amirhossein Rezapanah</div>

      <Link href="https://amirhosseinrp.github.io" target="_blank">
        go
      </Link>

      <br />

      <ThemeToggle />

      <br />

      <TestSection />

      {/* <CursorMotion speed={2}>
        <div className="w-28 h-28 bg-blue-600 rounded-full" />
      </CursorMotion> */}

      <Eye />
    </>
  );
}
