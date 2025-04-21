import Image from "next/image";
import { memo } from "react";
import Button from "~/components/atoms/Button/Button";
import Typography from "~/components/atoms/Typography/Typography";
import env from "~/shared/config/env";
import icons from "~/shared/libs/icons";

const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default memo(Hero);
