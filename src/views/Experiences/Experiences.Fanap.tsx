import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";

const ExperiencesFanap = () => {
  return (
    <section className="border-app py-6 px-7 w-full h-full bg-[#f1f1f1]">
      <Typography variant="title1" tagName="h4" className="inline">
        Fanap
      </Typography>

      <Typography variant="title2" tagName="p" className="inline">
        | Frontend Development Intern
      </Typography>

      <Typography variant="body2" tagName="p">
        Jun 2022 - Sep 2022 | Mashhad, Iran
      </Typography>

      <Typography variant="body3" className="list-disc ml-7" tagName="ul">
        <li>Developed interactive userinterfaces using React.js.</li>
        <li>Implemented reusable and modular React.js components.</li>
      </Typography>
    </section>
  );
};

export default memo(ExperiencesFanap);
