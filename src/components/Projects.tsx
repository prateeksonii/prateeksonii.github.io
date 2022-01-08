import { fetcher } from "@/utils";
import { Language, Project } from "@prisma/client";
import type { FC } from "react";
import useSWR from "swr";
import ProjectComponent from "./Project";

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
    <div id="projects" className="text-white py-40 container m-auto">
      <h2 className="text-6xl text-center font-bold text-primary-light">
        Here are some of my projects
      </h2>
      <div className="mt-20 grid grid-cols-3 gap-8">
        {data.result.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
