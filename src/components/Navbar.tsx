import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="pt-8 flex items-center">
      <Image src="/images/logo.svg" height={80} width={80} />
      <div className="text-white flex items-center gap-8 text-lg ml-10">
        <Link href="#experience" passHref>
          <a>work experience</a>
        </Link>
        <Link href="#projects" passHref>
          <a>projects</a>
        </Link>
        <Link href="#" passHref>
          <a>about</a>
        </Link>
      </div>
      <div className="text-white text-lg ml-auto">
        <Link href="#" passHref>
          <a>contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
