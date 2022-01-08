import { FC } from "react";

const About: FC = () => {
  return (
    <div id="about" className="text-white py-14 container m-auto">
      <h2 className="text-6xl text-center font-bold text-primary-light">
        A little bit about me
      </h2>
      <div className="grid grid-cols-[3fr_2fr] gap-16">
        <p className="text-2xl leading-loose mt-12 self-center text-justify">
          Software Developer with 1+ years of experience in designing and
          developing web apps, testing and debugging. Proven ability in
          optimizing web functionality that improve data retrieval and workflow
          efficiencies.Experienced Software Engineer currently working at IBM,
          India. I mostly work on full stack projects using React / NextJS as
          frontend and NodeJS / Express as backend. I sometimes like to write
          tech blogs at <strong className="underline">dev.to</strong>
        </p>
        <div className="mt-12 flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col items-center gap-4 rounded-lg justify-center">
            <div className="text-4xl font-bold text-primary">1+</div>
            <div className="text-xl text-primary-light">
              years of experience
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-8 rounded-lg justify-center">
            <div className="text-4xl font-bold text-primary">5+</div>
            <div className="text-xl text-primary-light">projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
