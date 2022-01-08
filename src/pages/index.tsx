import About from "@components/About";
import Contact from "@components/Contact";
import Experiences from "@components/Experiences";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import Head from "next/head";
import { FC } from "react";

const IndexPage: FC = () => {
  return (
    <>
      <Head>
        <title>Prateek Soni</title>
      </Head>
      <div className="h-screen">
        <Hero />
        <Projects />
        <Experiences />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default IndexPage;
