import Link from "next/link";
import Container from "~/components/atoms/Container/Container";
import Header from "~/components/atoms/Header/Header";
import env from "~/shared/config/env";

export default function Home() {
  return (
    <>
      <Header title="About me" />
      <Link href={env.links.resume ?? ""} download>
        download
      </Link>
      <Container>Hello, My name is Amirhossein. I&apos;m a Frontend developer.</Container>
    </>
  );
}
