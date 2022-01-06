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
    <div className="flex flex-col items-end">
      {data.result.map((experience) => (
        <ExperienceComponent key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default Experiences;
