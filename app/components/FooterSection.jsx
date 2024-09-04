import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSteam,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export const FooterSection = () => {
  const links = [
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      link: "instagram.com/oddly.isaac",
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "Github.com/vaden89",
    },
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      link: "x.com/vadenisisaac",
    },
    {
      icon: <FontAwesomeIcon icon={faSteam} />,
      link: "steamcommunity.com/profiles/76561199047836026/",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "linkedin.com/in/isaac-shosanya-418154235/",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center px-6">
      <div className="w-11/12 h-32 bg-[#121212] rounded-xl flex flex-col items-center justify-center">
        <div className="p-4 flex w-full items-center justify-center gap-2 ">
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="w-9 p-1.5 aspect-square flex items-center justify-center bg-[#09090b] rounded-lg text-white"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
        <hr className="w-full" />
        <span className="pt-2 font-thin text-white">© 2024 vadenisIsaac</span>
      </div>
    </section>
  );
};
