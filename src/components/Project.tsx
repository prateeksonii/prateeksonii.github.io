import { Language, Project } from "@prisma/client";
import { FC } from "react";

type ProjectProps = {
  project: Project & { language: Language };
};

const ProjectComponent: FC<ProjectProps> = ({ project }) => {
  const { title, language, description } = project;

  return (
    <div className="bg-primary p-20 flex items-center justify-center flex-col text-center rounded-xl">
      <div className="font-display font-bold text-4xl mt-2">{title}</div>
      <div className="text-lg mt-2">{description}</div>
    </div>
  );
};

export default ProjectComponent;
