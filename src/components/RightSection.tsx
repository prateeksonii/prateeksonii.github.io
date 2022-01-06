import { Path } from "@/types";
import { FC } from "react";
import Projects from "./Projects";

type RightSectionProps = {
  selectedPath: Path;
};

const RightSection: FC<RightSectionProps> = ({ selectedPath }) => {
  if (selectedPath == "projects") {
    return <Projects />;
  }

  return null;
};

export default RightSection;
