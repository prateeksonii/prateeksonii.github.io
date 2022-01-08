import { Experience } from "@prisma/client";
import { FC } from "react";

type ExperienceProps = {
  experience: Experience;
};

const ExperienceComponent: FC<ExperienceProps> = ({ experience }) => {
  const { company, jobTitle, description } = experience;

  return (
    <div className="bg-primary p-10 flex justify-center flex-col">
      <div className="font-display text-sm mt-2 uppercase tracking-widest">
        {jobTitle}
      </div>
      <div className="font-display font-bold text-4xl">{company}</div>
      <div className="p-2" />
      <div className="text-lg">{description}</div>
    </div>
  );
};

export default ExperienceComponent;
