import { Experience } from "@prisma/client";
import { FC } from "react";

type ExperienceProps = {
  experience: Experience;
};

const ExperienceComponent: FC<ExperienceProps> = ({ experience }) => {
  const { company, jobTitle, description } = experience;

  return (
    <div className="text-left p-8 w-2/3 bg-dark">
      <div className="font-display font-light uppercase text-lg tracking-widest">
        {jobTitle}
      </div>
      <div className="p-3" />
      <div className="font-display font-bold text-4xl">{company}</div>
      <div className="p-2" />
      <div className="text-lg">{description}</div>
    </div>
  );
};

export default ExperienceComponent;
