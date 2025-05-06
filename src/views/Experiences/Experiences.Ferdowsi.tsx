import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";

const ExperiencesFerdowsi = () => {
  return (
    <section className="border-app py-6 px-7 w-full h-full bg-[#f1f1f1]">
      <Typography variant="title1" tagName="h4" className="inline">
        Ferdowsi University of Mashhad
      </Typography>

      <Typography variant="title2" tagName="p" className="inline">
        | Teaching Assistant for Web Development course
      </Typography>

      <Typography variant="body2" tagName="p">
        Jan 2023 - Jul 2023 | Mashhad, Iran
      </Typography>

      <Typography variant="body3" className="list-disc ml-7" tagName="ul">
        <li>Collaborated in teaching HTML, CSS, JavaScript, Bootstrap and React.js.</li>
        <li>Contributed to the development of customized exercises and capstone projects.</li>
        <li>Evaluated assignments.</li>
      </Typography>
    </section>
  );
};

export default memo(ExperiencesFerdowsi);
