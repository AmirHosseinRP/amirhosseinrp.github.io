"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import Container from "~/components/atoms/Container/Container";
import Cube from "~/components/atoms/Cube/Cube";
import Donut from "~/components/atoms/Donut/Donut";
import Navbar from "~/components/molecules/Navbar/Navbar";
import Window from "~/components/molecules/Window/Window";
import Hero from "~/views/Hero/Hero";
import Skills from "~/views/Skills/Skills";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <>
      <Navbar />

      <Container ref={containerRef}>
        <Hero />

        <section className="flex flex-col mb-10">
          <Window title="Skills" className="-mb-16 z-10">
            <Skills />
          </Window>

          <Window title="Donut" className="self-end">
            <Donut />
          </Window>
        </section>

        <section className="flex flex-col mb-10">
          <Window title="Dotin" className="-mb-16 z-10 h-96">
            <Cube scrollProgress={scrollYProgress} />
          </Window>
        </section>
      </Container>
    </>
  );
}
