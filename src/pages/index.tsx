import PathComponent from "@components/Path";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Head from "next/head";
import Projects from "@components/Projects";
import { useState } from "react";
import { Path } from "@/types";
import RightSection from "@components/RightSection";

const IndexPage: NextPage = () => {
  const [selectedPath, setSelectedPath] = useState<Path>("projects");

  return (
    <>
      {/* Title */}
      <Head>
        <title>Prateek Soni</title>
      </Head>
      {/* Page */}
      <div className="bg-bg text-white h-screen">
        <div className="p-10" />
        {/* Grid */}
        <div className="container ml-auto grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <section>
              <h1 className="text-7xl">Hi, I&lsquo;m Prateek Soni</h1>
              <div className="p-4" />
              <p className="text-2xl leading-relaxed text-justify">
                Experienced Software Engineer currently working at IBM, India. I
                mostly work on full stack projects using React / NextJS as
                frontend and NodeJS / Express as backend. I sometimes like to
                write tech blogs at{" "}
                <strong className="underline">dev.to</strong>
              </p>
              <div className="p-10" />
              {/* Paths */}
              <div onClick={() => setSelectedPath("projects")}>
                <PathComponent
                  id="projects"
                  isSelected={selectedPath === "projects"}
                  num="01"
                  title="projects"
                />
              </div>
              <div className="p-4" />
              <div onClick={() => setSelectedPath("experience")}>
                <PathComponent
                  id="experience"
                  num="02"
                  title="experience"
                  isSelected={selectedPath === "experience"}
                />
              </div>
              <div className="p-4" />
              <div onClick={() => setSelectedPath("skills")}>
                <PathComponent
                  id="skills"
                  num="03"
                  title="skills"
                  isSelected={selectedPath === "skills"}
                />
              </div>
              <div className="p-4" />
              <div onClick={() => setSelectedPath("about")}>
                <PathComponent
                  id="about"
                  num="04"
                  title="about me"
                  isSelected={selectedPath === "about"}
                />
              </div>
            </section>
            <section>
              <div className="p-10" />
              <div className="text-2xl flex gap-8">
                <a
                  href="https://github.com/prateeksonii"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub />
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/prateeksoni47/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
          <div>
            <RightSection selectedPath={selectedPath} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
