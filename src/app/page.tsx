import Spotlight from "~/components/atoms/Spotlight/Spotlight";
import Eye from "~/ui/Eye/Eye";

export default function Home() {
  return (
    <>
      <Eye />

      <div className="w-full flex justify-center items-center">
        <Spotlight
          primaryContent={
            <div className="text-9xl text-center leading-none font-bold w-fit h-96 flex justify-center items-center">
              My
              <br />
              Portfolio
            </div>
          }
          hoverContent={
            <div className="text-9xl text-center leading-none font-bold text-black w-fit h-96 flex justify-center items-center">
              Amirhossein&apos;s
              <br />
              Portfolio
            </div>
          }
        />
      </div>
    </>
  );
}
