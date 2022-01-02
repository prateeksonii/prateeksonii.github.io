import type { NextPage } from "next";

type PathProps = {
  num: string;
  isSelected?: boolean;
  title: string;
};

const Path: NextPage<PathProps> = ({ isSelected, num, title }) => {
  const fontWeight = isSelected ? "font-bold" : "";
  const border = isSelected ? "border-4" : "border";
  const fontSize = isSelected ? "text-2xl" : "text-xl";

  return (
    <div
      className={`flex items-center gap-4 ${fontSize} ${fontWeight}`}
      style={isSelected ? { fontWeight: "bold" } : {}}
    >
      <div>{num}</div>
      <div className={`h-min w-40 rounded ${border}`} />
      <div className="uppercase">{title}</div>
    </div>
  );
};

export default Path;
