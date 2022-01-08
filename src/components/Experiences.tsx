import { fetcher } from "@/utils";
import { Experience } from "@prisma/client";
import { FC } from "react";
import useSWR from "swr";
import ExperienceComponent from "./Experience";

const Experiences: FC = () => {
  const { data, error } = useSWR<{
    ok: boolean;
    result: Experience[];
  }>("/api/experiences", fetcher);

  if (error) {
    return <div>Failed to load...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div id="experience" className="text-white py-10 container m-auto">
      <h2 className="text-6xl text-center font-bold text-primary-light">
        This is my work experience
      </h2>
      <div className="mt-20 grid grid-cols-3 gap-8">
        {data.result.map((experience) => (
          <ExperienceComponent key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
