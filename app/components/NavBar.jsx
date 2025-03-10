import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="py-3 p-6 flex items-center justify-between w-full text-white">
      <div className="flex flex-col">
        <span className="text-xl">Isaac ⚡</span>
        <span className="text-xs text-gray-500">Software developer</span>
      </div>
      <ul className="flex items-center gap-6 font-semibold text-xs sm:text-base">
        <Link href={"#footer"}>Contact me </Link>
        <a
          href="/IsaacShosanya's-CV.pdf"
          download="IsaacShosanya.pdf"
          className="p-1 px-2 sm:p-2 text-white bg-[#0D1826]  rounded-lg text-bold hover:scale-95 shadow-lg"
        >
          Download CV
        </a>
      </ul>
    </nav>
  );
};
