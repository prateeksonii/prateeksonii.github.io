import Hero from "@components/Hero";
import Projects from "@components/Projects";
import { FC } from "react";

const IndexPage: FC = () => {
  return (
    <div className="h-screen">
      <Hero />
      <section>
        <Projects />
      </section>
    </div>
  );
};

export default IndexPage;
