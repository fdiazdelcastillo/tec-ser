"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/images/omnitrek-hor-white.svg";
import { navbarData } from "@/data/Data";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Make the header sticky
      const stickyThreshold = 100; // Adjust this value to control when the header becomes sticky
      if (currentScrollY > stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);

      // Update the active section based on scroll position
      const sections = navbarData.map((item) =>
        document.getElementById(item.link.substring(1))
      );
      const currentSection = sections.find((section) => {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          return (
            top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      ref={headerRef}
      id="header"
      className={`w-full flex flex-col md:flex-row md:justify-start items-center gap-4 px-3 py-5 bg-white bg-opacity-50 transition-transform duration-300 ease-in-out ${
        isSticky
          ? scrollDirection === "up"
            ? "w-auto flex-col md:flex-row md:justify-start backdrop-blur-[10px] fixed items-start top-0 left-1 md:left-[var(--padding-x)] md:px-3 right-0 md:right-[var(--padding-x)] z-50 transform translate-y-0"
            : "w-auto flex-col md:flex-row md:justify-start backdrop-blur-[10px] fixed items-start top-0 left-1 md:left-[var(--padding-x)] md:px-3 right-0 md:right-[var(--padding-x)] z-50 transform -translate-y-full"
          : ""
      }`}
    >
      {/* Backdrop layer over the nav container */}
      {/* <div className="backdrop-blur-[20px] absolute inset-0 bg-white bg-opacity-50 z-40"></div> */}
      {/* <div className="bg-white bg-opacity-0 backdrop-blur-[20px] absolute inset-0 z-40"></div> */}
      <div className="w-full md:w-auto flex justify-end">
        <div className="z-50 relative">
          <Link href="#home">
            <Image src={Logo} alt="omnitrek logo" width={180} />
          </Link>
        </div>

        <div className="md:hidden bg-transparent w-full flex justify-end z-50 relative">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <AiOutlineClose size={20} color="#E6E8EA" />
            ) : (
              <AiOutlineMenu size={20} color="#E6E8EA" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full p-4 z-40 shadow-lg md:shadow-none md:relative lg:flex md:items-center md:gap-4 md:p-0 transition-all`}
      >
        {navbarData.map((navbarLink, index) => (
          <Link
            key={index}
            href={navbarLink.link}
            scroll={true}
            className={`block md:py-2 sm:py-0 text-center font-pop text-base font-normal md:inline ${
              activeSection === navbarLink.link.substring(1)
                ? "text-primary"
                : "text-text"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {navbarLink.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
