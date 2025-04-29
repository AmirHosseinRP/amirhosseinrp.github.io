import Container from "~/components/atoms/Container/Container";
import Donut from "~/components/atoms/Donut/Donut";
import Header from "~/components/atoms/Header/Header";
import Navbar from "~/components/molecules/Navbar/Navbar";
import Hero from "~/views/Hero/Hero";
import Skills from "~/views/Skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />

        <section className="flex flex-col h-screen mb-10">
          <div className="w-full max-w-[90%] md:max-w-[75%] -mb-16 z-10">
            <Header title="Skills" />

            <Skills />
          </div>

          <div className="w-full max-w-[75%] self-end">
            <Header title="Donut" />

            <Donut />
          </div>
        </section>
      </Container>
    </>
  );
}
