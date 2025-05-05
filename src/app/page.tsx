"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import Container from "~/components/atoms/Container/Container";
import Cube from "~/components/atoms/Cube/Cube";
import Donut from "~/components/atoms/Donut/Donut";
import Navbar from "~/components/molecules/Navbar/Navbar";
import Window from "~/components/molecules/Window/Window";
import logos from "~/shared/libs/logos";
import ExperiencesDotin from "~/views/Experiences/Experiences.Dotin";
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

        <section className="flex flex-col">
          <Window title="Skills" className="-mb-16 z-10">
            <Skills />
          </Window>

          <Window title="Donut" className="self-end">
            <Donut />
          </Window>
        </section>

        <section className="grid grid-cols-3">
          <Window title="Experience-Dotin" className="-mb-16 z-10 col-span-2 h-96">
            <ExperiencesDotin />
          </Window>

          <Window title="Dotin" className="self-end col-span-1 h-96">
            <Cube scrollProgress={scrollYProgress} iconSrc={logos.dotin.src} />
          </Window>
        </section>
      </Container>
    </>
  );
}
