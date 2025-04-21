import Container from "~/components/atoms/Container/Container";
import Header from "~/components/atoms/Header/Header";
import Navbar from "~/components/molecules/Navbar/Navbar";
import Hero from "~/views/Hero/Hero";
import Skills from "~/views/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header title="Welcome" />

      <Navbar />

      <Container>
        <Hero />

        <Skills />
      </Container>
    </>
  );
}
