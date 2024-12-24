import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="p-6 flex items-center justify-between w-full">
      <Image src={"/logo.PNG"} width={50} height={50} alt="" className="w-9" />
      <ul className="flex items-center gap-6 text-lg font-semibold">
        <Link href={"#footer"}>Contact me </Link>
        <a
          href="/IsaacShosanya's-CV.pdf"
          download="IsaacShosanya's-CV.pdf"
          className="p-2 bg-white text-black rounded-lg text-bold hover:scale-95"
        >
          Download CV
        </a>
      </ul>
    </nav>
  );
};
