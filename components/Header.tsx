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
      className={`w-screen flex items-center gap-4 py-5 bg-white bg-opacity-50 transition-transform duration-300 ease-in-out ${
        isSticky
          ? scrollDirection === "up"
            ? "fixed top-0 left-1 md:left-[var(--padding-x)] md:px-0 right-0 z-50 transform translate-y-0"
            : "fixed top-0 left-1 md:left-[var(--padding-x)] md:px-0 right-0 z-50 transform -translate-y-full"
          : ""
      }`}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // For older WebKit browsers
      }}
    >
      <div className="z-45">
        <Link href="#home">
          <Image src={Logo} alt="omnitrek logo" width={180} />
        </Link>
      </div>
      <div className="block md:hidden bg-transparent w-full flex justify-end z-50">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? (
            <AiOutlineClose size={20} color="#E6E8EA" />
          ) : (
            <AiOutlineMenu size={20} color="#E6E8EA" />
          )}
        </button>
      </div>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-[70px] md:top-0 left-0 right-0 b p-4 z-40 shadow-lg md:shadow-none md:relative lg:flex md:items-center md:gap-4 md:p-0 transition-all`}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // For older WebKit browsers
        }}
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
