import { FC } from "react";
import Navbar from "./Navbar";

const Hero: FC = () => {
  return (
    <section>
      <div className="bg-primary-dark pb-60">
        <div className="container m-auto">
          <Navbar />
          <section className="w-4/6 m-auto mt-40 text-center">
            <h1 className="text-7xl text-white leading-relaxed">
              Hi, I&apos;m{" "}
              <strong className="text-primary">Prateek Soni</strong> and
              I&apos;m a full stack{" "}
              <strong className="text-primary">web</strong> developer
            </h1>
            <div className="mt-12 flex justify-center items-center gap-8">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-xl font-bold">
                View work
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1yWMb-hHl5rNoOT3zX2J5nXjUTcsFJzvD"
                download
                className="text-primary bg-white px-8 py-4 rounded-full text-xl font-bold"
              >
                Download CV
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
