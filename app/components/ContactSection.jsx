import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 pb-24">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-semibold">Shoot Me A Message...</h1>
        <p className="text-gray-500 text-center text-sm">
          If you would like to collab on your next project cause I would like
          to...
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-4">
        <div className="bg-[#ffb345] rounded-full items-center justify-center p-4 hover:scale-90 shadow-lg text-white">
          <FontAwesomeIcon width={35} icon={faEnvelope} />
        </div>
        <div className="bg-[#ffb345] rounded-full items-center justify-center p-4 hover:scale-90 shadow-lg text-white">
          <FontAwesomeIcon width={35} icon={faTwitter} />
        </div>
        <div className="bg-[#ffb345] rounded-full items-center justify-center p-4 hover:scale-90 shadow-lg text-white">
          <FontAwesomeIcon width={30} icon={faLinkedinIn} />
        </div>
      </div>
    </section>
  );
};
