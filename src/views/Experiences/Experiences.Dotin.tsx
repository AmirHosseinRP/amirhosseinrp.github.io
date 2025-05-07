import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";

const ExperiencesDotin = () => {
  return (
    <section className="border-app py-6 px-7 w-full h-full bg-[#f1f1f1]">
      <Typography variant="title1" tagName="h4" className="inline">
        Dotin (Datis Arian Qeshm)
      </Typography>

      <Typography variant="title2" tagName="p" className="inline">
        | Frontend Software Engineer
      </Typography>

      <Typography variant="body2" tagName="p">
        Mar 2023 - Present | Mashhad, Iran
      </Typography>

      <Typography variant="body3" className="list-disc ml-7" tagName="ul">
        <li>Designed and developed scalable web applications using Next.js, React.js and TypeScript.</li>
        <li>
          Improved application performance through advanced rendering strategies, including SSR, SSG, ISR and CSR.
        </li>
        <li>
          Created Progressive Web Apps (PWA) and Trusted Web Activities (TWA) to deliver seamless, app-like user
          experiences.
        </li>
        <li>
          Integrated and implemented RESTAPIs, including building custom endpoints using Next.js APIroutes and route
          handlers.
        </li>
        <li>Managed version control and CI/CD pipelines utilizing Git workflows and GitLab pipelines.</li>
        <li>
          Streamlined project workflows and enhanced team collaboration using Jira for task management and progress
          tracking.
        </li>
      </Typography>
    </section>
  );
};

export default memo(ExperiencesDotin);
