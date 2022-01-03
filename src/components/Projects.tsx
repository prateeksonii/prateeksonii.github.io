import { Language, Project } from "@prisma/client";
import { NextApiResponse } from "next";
import type { FC } from "react";
import useSWR from "swr";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const Projects: FC = () => {
  const { data, error } = useSWR<{
    ok: boolean;
    result: (Project & { language: Language })[];
  }>("/api/projects", fetcher);

  if (error) {
    return <div>Failed to load...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data.result);

  return (
    <div className="flex flex-col items-end">
      {data.result.map((project) => (
        <div key={project.id} className="text-left p-8 w-2/3 bg-dark">
          <div className="font-display font-light uppercase text-lg tracking-widest">
            {project.language.name}
          </div>
          <div className="p-3" />
          <div className="font-display font-bold text-4xl">{project.title}</div>
          <div className="p-2" />
          <div className="text-lg">{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
