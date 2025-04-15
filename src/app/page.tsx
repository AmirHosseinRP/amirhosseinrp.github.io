import Image from "next/image";
import Button from "~/components/atoms/Button/Button";
import Container from "~/components/atoms/Container/Container";
import Header from "~/components/atoms/Header/Header";
import Typography from "~/components/atoms/Typography/Typography";
import env from "~/shared/config/env";
import icons from "~/shared/libs/icons";
import Navbar from "~/views/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Header title="Welcome" />

      <Navbar />

      <Container className="ga">
        <Typography variant="h4" className="text-center xs:text-start" tagName="h4">
          &quot;Hello! I&apos;m Amirhossein, a <span className="text-prose-brand">Frontend developer </span>
          who loves making experiences that stick.&quot;
        </Typography>

        <div className="flex flex-col xs:flex-row items-center gap-3">
          <Typography variant="body1" tagName="p">
            Download my resume:
          </Typography>

          <Button href={env.links.resume ?? ""} download childrenClassName="py-1">
            download
            <Image src={icons.pdf.src} alt={icons.pdf.alt} width={24} height={24} />
          </Button>
        </div>
      </Container>
    </>
  );
}
