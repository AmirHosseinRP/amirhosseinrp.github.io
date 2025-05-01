import Container from "~/components/atoms/Container/Container";
import Donut from "~/components/atoms/Donut/Donut";
import Navbar from "~/components/molecules/Navbar/Navbar";
import Window from "~/components/molecules/Window/Window";
import Hero from "~/views/Hero/Hero";
import Skills from "~/views/Skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />

        <section className="flex flex-col mb-10">
          <Window title="Skills" className="-mb-16 z-10">
            <Skills />
          </Window>

          <Window title="Donut" className="self-end">
            <Donut />
          </Window>
        </section>
      </Container>
    </>
  );
}
