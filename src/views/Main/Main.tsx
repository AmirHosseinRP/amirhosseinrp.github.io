"use client";

import { useScroll } from "motion/react";
import { memo, useRef } from "react";
import Container from "~/components/atoms/Container/Container";
import Experiences from "~/views/Experiences/Experiences";
import Hero from "~/views/Hero/Hero";
import Projects from "~/views/Projects/Projects";
import Skills from "~/views/Skills/Skills";

const Main = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <Container ref={containerRef}>
      <Hero />

      <Skills />

      <Experiences ref={containerRef} scrollYProgress={scrollYProgress} />

      <Projects />
    </Container>
  );
};

export default memo(Main);
