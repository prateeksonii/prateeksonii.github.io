import About from "@components/About";
import Contact from "@components/Contact";
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
      <Contact />
    </div>
  );
};

export default IndexPage;
