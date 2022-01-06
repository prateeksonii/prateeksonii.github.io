import { Path } from "@/types";
import { FC } from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";

type RightSectionProps = {
  selectedPath: Path;
};

const RightSection: FC<RightSectionProps> = ({ selectedPath }) => {
  console.log(selectedPath);
  if (selectedPath === "projects") {
    return <Projects />;
  }

  if (selectedPath === "experience") {
    return <Experiences />;
  }

  return null;
};

export default RightSection;
