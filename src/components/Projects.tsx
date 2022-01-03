import { Project } from "@prisma/client";
import { NextApiResponse } from "next";
import type { FC } from "react";
import useSWR from "swr";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const Projects: FC = () => {
  const { data, error } = useSWR<{ ok: boolean; result: Project[] }>(
    "/api/projects",
    fetcher
  );

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
        <div key={project.id} className="text-left p-8">
          <div>{project.title}</div>
          <div>{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
