import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-center h-20 my-6 px-4">
      <ul className="flex items-center gap-4 text-lg font-medium p-4 px-8 rounded-full bg-[#ffb345] text-white ">
        <Link className="hover:border-b-2 border-black" href={"#"}>
          Projects
        </Link>
        <Link className="hover:border-b-2 border-black" href={"#"}>
          Contact Me
        </Link>
      </ul>
    </nav>
  );
};
