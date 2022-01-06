import { Language, Project } from "@prisma/client";
import type { FC } from "react";
import useSWR from "swr";
import ProjectComponent from "./Project";

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

  return (
    <div className="flex flex-col items-end">
      {data.result.map((project) => (
        <ProjectComponent key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
