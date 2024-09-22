import ThemeToggle from "~/components/atoms/ThemeToggle/ThemeToggle";
import TestSection from "~/components/TestSection/TestSection";

export default function Home() {
  return (
    <>
      <div className="bg-primary">Amirhossein Rezapanah</div>

      <ThemeToggle />

      <TestSection />
    </>
  );
}
