import Link from "next/link";
import ThemeToggle from "~/components/atoms/ThemeToggle/ThemeToggle";
import TestSection from "~/components/TestSection/TestSection";

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
    </>
  );
}
