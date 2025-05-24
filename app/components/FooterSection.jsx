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
      link: "https://instagram.com/oddly.isaac",
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "https://Github.com/vaden89",
    },
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      link: "https://x.com/vadenisisaac",
    },
    {
      icon: <FontAwesomeIcon icon={faSteam} />,
      link: "https://steamcommunity.com/profiles/76561199047836026/",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "https://linkedin.com/in/isaac-shosanya-418154235/",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center px-6">
      <div className="w-11/12 h-32 border-primary border rounded-xl flex flex-col items-center justify-center">
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
        <span id="footer" className="pt-2  text-white">
          © 2025 vadenisIsaac
        </span>
      </div>
    </section>
  );
};
