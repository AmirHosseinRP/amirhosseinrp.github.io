import { memo } from "react";
import ProjectMava from "./Project.Mava";
import ProjectsPodcharge from "./Projects.Podcharge";

const Projects = () => {
  return (
    <>
      <ProjectsPodcharge />

      <ProjectMava />
    </>
  );
};

export default memo(Projects);
