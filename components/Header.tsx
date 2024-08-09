"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/images/omnitrek-hor-white.svg";
import { navbarData } from "@/data/Data";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Estado para controlar el menú

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
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full flex justify-normal items-center gap-4 py-9 px-4 md:px-8">
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
        } absolute top-[70px] md:top-0 left-0 right-0 bg-background p-4 z-40 shadow-lg md:shadow-none md:relative md:flex md:items-center md:gap-4 md:p-0 md:bg-transparent md:block transition-all`}
      >
        {navbarData.map((navbarLink, index) => (
          <Link
            key={index}
            href={navbarLink.link}
            scroll={false}
            className={`block md:py-2 sm:py-0 text-center font-pop text-base font-normal md:inline ${
              activeSection === navbarLink.link.substring(1)
                ? "text-primary"
                : "text-text"
            }`}
            onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
          >
            {navbarLink.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
