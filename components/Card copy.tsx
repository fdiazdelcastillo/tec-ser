"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot, GoGlobe } from "react-icons/go";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  copilot: GoCopilot,
  globe: GoGlobe,
  ai: GiArtificialIntelligence,
  catalog: GrCatalog,
};

type CardCompProps = {
  name: string;
  icons: IconType[];
  description: string;
  elements: string[];
  monthPrice: number;
  anualMonthPrice: number;
};

export function CardComp(props: CardCompProps) {
  return (
    <Card className="font-pop text-text">
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle className="font-mont text-elements text-2xl font-semibold">
        {props.name}
      </CardTitle>
      <CardDescription>{props.description}</CardDescription>
      <div className="text-text font-normal">
        Incluye:
        <div className="text-base">
          <ul className="list-disc">
            {props.elements.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="text-elements text-center text-xl">
          Precio mensual: ${props.monthPrice}
        </div>
      </div>
    </Card>
  );
}

const Skeleton = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-12 w-12 circle-2 bg-text">
          <GiArtificialIntelligence className="h-6 w-6 dark:text-elements" />
        </Container>
        <Container className="circle-3 bg-elements">
          <GoGlobe className="h-8 w-8 dark:text-text" />
        </Container>
        <Container className="h-12 w-12 circle-4 bg-text">
          <GrCatalog className="h-6 w-6 dark:text-elements" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-background bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-base text-text font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
