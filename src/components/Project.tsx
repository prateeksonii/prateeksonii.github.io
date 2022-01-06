import { Language, Project } from "@prisma/client";
import { FC } from "react";

type ProjectProps = {
  project: Project & { language: Language };
};

const Project: FC<ProjectProps> = ({ project }) => {
  const { title, language, description } = project;

  return (
    <div className="text-left p-8 w-2/3 bg-dark">
      <div className="font-display font-light uppercase text-lg tracking-widest">
        {language.name}
      </div>
      <div className="p-3" />
      <div className="font-display font-bold text-4xl">{title}</div>
      <div className="p-2" />
      <div className="text-lg">{description}</div>
    </div>
  );
};

export default Project;
