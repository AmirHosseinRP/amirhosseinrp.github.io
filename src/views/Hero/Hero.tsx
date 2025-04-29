import Image from "next/image";
import { memo } from "react";
import Button from "~/components/atoms/Button/Button";
import Typography from "~/components/atoms/Typography/Typography";
import env from "~/shared/config/env";
import icons from "~/shared/libs/icons";

const Hero = () => {
  return (
    <section className="mb-8 mt-3 flex flex-col gap-3 text-center">
      <Typography variant="h4" tagName="h4">
        &quot;Hello! I&apos;m Amirhossein, a <span className="text-prose-brand">Frontend developer</span>.&quot;
        <Typography variant="body1" color="prose-secondary" className="mt-2">
          ..this portfolio is under construction ツ..
        </Typography>
      </Typography>

      <div className="flex flex-col xs:flex-row justify-center items-center gap-3">
        <Typography variant="body1" tagName="p">
          Download my resume:
        </Typography>

        <Button href={env.links.resume ?? ""} download childrenClassName="py-1">
          download
          <Image src={icons.pdf.src} alt={icons.pdf.alt} width={24} height={24} />
        </Button>
      </div>
    </section>
  );
};

export default memo(Hero);
