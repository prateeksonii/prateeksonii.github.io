import Path from "@components/Path";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Head from "next/head";

const IndexPage: NextPage = () => {
  return (
    <>
      {/* Title */}
      <Head>
        <title>Prateek Soni</title>
      </Head>
      {/* Page */}
      <div className="bg-dark text-white h-screen">
        <div className="p-10" />
        {/* Grid */}
        <div className="container m-auto grid grid-cols-2">
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
              <Path isSelected num="01" title="projects" />
              <div className="p-4" />
              <Path num="02" title="experience" />

              <div className="p-4" />
              <Path num="03" title="skills" />

              <div className="p-4" />
              <Path num="04" title="about me" />
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
        </div>
      </div>
    </>
  );
};

export default IndexPage;
