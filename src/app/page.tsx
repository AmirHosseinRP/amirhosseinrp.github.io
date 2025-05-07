"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import Container from "~/components/atoms/Container/Container";
import Navbar from "~/components/molecules/Navbar/Navbar";
import Experiences from "~/views/Experiences/Experiences";
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

        <Skills />

        <Experiences ref={containerRef} scrollYProgress={scrollYProgress} />
      </Container>
    </>
  );
}
