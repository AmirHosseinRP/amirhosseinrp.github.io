import Spotlight from "~/components/atoms/Spotlight/Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight
        primaryContent={
          <div className="text-6xl text-center leading-none font-bold w-96 h-96">primary content here</div>
        }
        hoverContent={
          <div className="text-6xl text-center leading-none font-bold text-black w-96 h-96">hover content here</div>
        }
      />

      {/* <Eye /> */}
    </>
  );
}
