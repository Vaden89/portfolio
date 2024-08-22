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
      link: "h",
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "h",
    },
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      link: "h",
    },
    {
      icon: <FontAwesomeIcon icon={faSteam} />,
      link: "h",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "h",
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
                className="w-9 p-1.5 aspect-square flex items-center justify-center bg-[#09090b] rounded-lg"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
        <hr className="w-full" />
        <span className="pt-2 font-thin">© 2024 vadenisIsaac</span>
      </div>
    </section>
  );
};
