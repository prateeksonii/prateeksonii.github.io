import About from "@components/About";
import Experiences from "@components/Experiences";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import { FC } from "react";

const IndexPage: FC = () => {
  return (
    <div className="h-screen">
      <Hero />
      <Projects />
      <Experiences />
      <About />
    </div>
  );
};

export default IndexPage;
