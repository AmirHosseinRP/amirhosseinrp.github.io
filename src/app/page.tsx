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
import ExperiencesFanap from "~/views/Experiences/Experiences.Fanap";
import ExperiencesFerdowsi from "~/views/Experiences/Experiences.Ferdowsi";
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

        <section className="flex flex-col mb-16">
          <Window title="Skills" className="-mb-16 z-10 max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <Skills />
          </Window>

          <Window title="Donut" className="self-end max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <Donut />
          </Window>
        </section>

        <section className="flex flex-col gap-10">
          <div className="relative mb-6">
            <Window title="Experience" className="relative z-10 md:max-w-[72%] !h-fit max-w-[90%]">
              <ExperiencesDotin />
            </Window>

            <Window title="Dotin" className="h-96 md:max-w-[33%] absolute right-0 top-10 max-w-[90%]">
              <Cube scrollProgress={scrollYProgress} iconSrc={logos.dotin.src} rotationScale={2} />
            </Window>
          </div>

          <div className="relative">
            <Window title="Ferdowsi" className="h-96 max-w-[51%]">
              <Cube scrollProgress={scrollYProgress} iconSrc={logos.ferdowsi.src} rotationScale={4} />
            </Window>

            <Window title="Experience" className="z-10 max-w-[54%] !h-fit absolute right-0 bottom-0">
              <ExperiencesFerdowsi />
            </Window>
          </div>

          <div className="relative">
            <Window title="Experience" className="relative z-10 max-w-[46%] !h-fit top-36">
              <ExperiencesFanap />
            </Window>

            <Window title="Fanap" className="h-72 max-w-[59%] absolute right-0 top-10">
              <Cube scrollProgress={scrollYProgress} iconSrc={logos.fanap.src} rotationScale={6} />
            </Window>
          </div>
        </section>
      </Container>
    </>
  );
}
