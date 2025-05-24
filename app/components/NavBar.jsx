"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileDown, Group, Menu, Send, User, X } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

export const NavBar = () => {
  const lenis = useLenis();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="p-8 flex items-center justify-between w-full text-white">
      <div className="flex flex-col">
        <span className="text-xl">Isaac ⚡</span>
      </div>

      <MobileMenu
        isMenuOpen={isMobileMenuOpen}
        handleMenu={setIsMobileMenuOpen}
        lenis={lenis}
      />
      <DesktopMenu lenis={lenis} />
    </nav>
  );
};

const MobileMenu = ({ handleMenu, isMenuOpen, lenis }) => {
  const handleMenuClick = (element, duration = 1.5) => {
    handleMenu(false);
    lenis.scrollTo(element, { duration });
  };
  return (
    <>
      <Menu onClick={() => handleMenu(true)} className="sm:hidden" />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            className={
              "fixed w-full h-screen bg-[#0a0a0a] top-0 right-0 z-50 flex flex-col justify-center "
            }
          >
            <div className="w-full flex items-center justify-between absolute top-10 px-10">
              <span className="text-xl">Isaac ⚡</span>
              <X onClick={() => handleMenu(false)} />
            </div>
            <div className="px-10 flex flex-col gap-4 text-lg text-[#636369] font-semibold">
              <div className="flex items-center gap-2 hover:text-secondary">
                <div className="border border-[#161616] p-1">
                  <User />
                </div>
                <Link onClick={() => handleMenuClick("#about")} href={"#about"}>
                  About
                </Link>
              </div>
              <div className="flex items-center gap-2 hover:text-secondary">
                <div className="border border-[#161616] p-1">
                  <Group />
                </div>
                <Link
                  onClick={() => handleMenuClick("#projects", 2.5)}
                  href={"#projects"}
                >
                  Projects
                </Link>
              </div>
              <div className="flex items-center gap-2 hover:text-secondary">
                <div className="border border-[#161616] p-1">
                  <Send />
                </div>
                <Link
                  onClick={() => handleMenuClick("#footer", 3.5)}
                  href={"#footer"}
                >
                  Contact me
                </Link>
              </div>
              <a
                href="/isaacshosanya.pdf"
                download="isaacshosanya.pdf"
                className="text-center flex items-center justify-center w-full h-10 text-black bg-secondary gap-2"
              >
                Resume <FileDown />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopMenu = ({ lenis }) => {
  const handleMenuClick = (element, duration = 1.5) => {
    lenis.scrollTo(element, { duration });
  };

  return (
    <ul className="hidden sm:flex items-center gap-6 font-semibold text-xs sm:text-base">
      <Link
        href={"#about"}
        onClick={() => handleMenuClick("#about")}
        className="hover:text-secondary transition-colors duration-200 ease-in"
      >
        About me{" "}
      </Link>
      <Link
        href={"#projects"}
        onClick={() => handleMenuClick("#projects", 2.5)}
        className="hover:text-secondary transition-colors duration-200 ease-in"
      >
        Projects
      </Link>
      <Link
        href={"#footer"}
        onClick={() => handleMenuClick("#footer", 2)}
        className="hover:text-secondary transition-colors duration-200 ease-in"
      >
        Contact me
      </Link>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="/isaacshosanya.pdf"
        download="isaacshosanya.pdf"
        className="text-center flex items-center justify-center w-fit px-5 h-10 text-black bg-secondary gap-2"
      >
        Resume <FileDown />
      </motion.a>
    </ul>
  );
};
