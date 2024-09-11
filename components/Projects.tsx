"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import FunThriving from "@/assets/images/FunThriving.jpg";
import Tagnetize from "@/assets/images/Tagnetize.jpg";
import Facility360 from "@/assets/images/Facility360.jpg";
import DelToro from "@/assets/images/Del Toro Dotaciones.jpg";
import Merco from "@/assets/images/Merco.jpg";
import VMN from "@/assets/images/VMN.jpg";
import MGCia from "@/assets/images/MG CIA.jpg";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects" className="w-full h-full py-0">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Web App",
    title: "FunThriving.",
    country: "United States",
    src: FunThriving.src,
    href: "https://funthriving.webflow.io/",
    content: <DummyContent />,
  },
  {
    category: "Mobile and Web App",
    title: "Tagnetize.",
    country: "Colombia",
    src: Tagnetize.src,
    href: "https://tagnetize.app/",
    content: <DummyContent />,
  },
  {
    category: "Landing Page",
    title: "Facility360.",
    country: "Colombia",
    src: Facility360.src,
    href: "https://facility360.co/",
    content: <DummyContent />,
  },

  {
    category: "web Catalog and Web App",
    title: "Del Toro Dotaciones.",
    country: "Colombia",
    src: DelToro.src,
    href: "https://deltorodotaciones.com/",
    content: <DummyContent />,
  },
  {
    category: "Website",
    title: "Merco International.",
    country: "United States",
    src: Merco.src,
    href: "https://mercointernational.com/",
    content: <DummyContent />,
  },
  {
    category: "Website",
    title: "Virtualmedia Network.",
    country: "Colombia",
    src: VMN.src,
    href: "https://virtualmedianet.com/",
    content: <DummyContent />,
  },
  {
    category: "Web Catalog",
    title: "MG Cia.",
    country: "Colombia",
    src: MGCia.src,
    href: "https://mgcya.com/",
    content: <DummyContent />,
  },
];
