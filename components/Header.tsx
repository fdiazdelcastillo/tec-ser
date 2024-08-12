"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/images/omnitrek-hor-white.svg";
import { navbarData } from "@/data/Data";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("header");
      if (homeSection) {
        const homeSectionHeight = homeSection.offsetHeight;
        setIsSticky(window.scrollY > homeSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight * 0.5) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="header"
      className={`w-full flex justify-start items-center gap-4 py-5 px-4 md:px-0 bg-[#1A1C1E] md:bg-[#1A1C1E]/50 ${
        isSticky
          ? "fixed top-0 sm:left-0 md:left-[var(--padding-x)] sm:right-0 md:right-[var(--padding-x)] z-50"
          : ""
      } transition-all`}
    >
      <div className="z-50">
        <Image src={Logo} alt="omnitrek logo" width={180} />
      </div>
      <div className="md:hidden bg-transparent w-full flex justify-end z-50">
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
        } absolute top-[70px] md:top-0 left-0 right-0 p-4 z-40 shadow-lg md:shadow-none md:relative md:flex sm:block md:items-center md:gap-4 md:p-0 transition-all`}
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
