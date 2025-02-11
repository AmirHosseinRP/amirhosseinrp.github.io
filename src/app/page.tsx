import Button from "~/components/atoms/Button/Button";
import Container from "~/components/atoms/Container/Container";
import Header from "~/components/atoms/Header/Header";
import Typography from "~/components/atoms/Typography/Typography";

export default function Home() {
  return (
    <>
      <Header title="About me" />

      <Container>
        {/* Hello, My name is Amirhossein. I&apos;m a Frontend developer. */}
        <div className="flex">
          <Typography>a:</Typography>
          <Button>Tab 02</Button>
        </div>
      </Container>
    </>
  );
}
