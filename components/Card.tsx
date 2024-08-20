"use client";

import React, { useEffect } from "react";
import { animate, motion, AnimationSequence } from "framer-motion";
import { cn } from "@/lib/utils";
import { GoGlobe } from "react-icons/go";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { IconType } from "react-icons";
import {
  TbShoppingCart,
  TbShoppingCartBolt,
  TbShoppingCartHeart,
} from "react-icons/tb";

const iconMap: Record<IconName, IconType> = {
  globe: GoGlobe,
  ai: GiArtificialIntelligence,
  catalog: GrCatalog,
  scw: TbShoppingCartBolt,
  scm: TbShoppingCartHeart,
  scmw: TbShoppingCart,
};

type IconName = "globe" | "ai" | "catalog" | "scw" | "scm" | "scmw";

type CardCompProps = {
  name: string;
  iconName: IconName[];
  description: string;
  elements: string[];
  monthPrice: number;
  anualMonthPrice: number;
};

export function Card({
  name,
  iconName,
  description,
  elements,
  monthPrice,
}: CardCompProps) {
  const [IconComponent1, IconComponent2, IconComponent3] = iconName.map(
    (name) => iconMap[name]
  );

  return (
    <CardConst className="font-pop text-text">
      <CardSkeletonContainer>
        <Skeleton
          IconComponent1={IconComponent1}
          IconComponent2={IconComponent2}
          IconComponent3={IconComponent3}
        />
      </CardSkeletonContainer>
      <CardTitle className="font-mont text-elements text-2xl font-semibold pb-[10px]">
        {name}
      </CardTitle>
      <CardDescription className="pb-[20px]">{description}</CardDescription>
      <div className="text-text font-normal">
        <span className="pb-[10px]">Incluye:</span>
        <div className="text-base pb-[30px]">
          <ul className="list-disc list-inside">
            {elements.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="font-mont text-elements text-center text-xl">
          Precio mensual: ${monthPrice}
        </div>
      </div>
    </CardConst>
  );
}

type SkeletonProps = {
  IconComponent1: IconType;
  IconComponent2: IconType;
  IconComponent3: IconType;
};

const Skeleton = ({
  IconComponent1,
  IconComponent2,
  IconComponent3,
}: SkeletonProps) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence: AnimationSequence = [
    [
      ".circle-1",
      { scale: [1, 1.5], transform: ["rotate(0deg)", "rotate(360deg)"] },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      { scale: [1, 1.5], transform: ["rotate(0deg)", "rotate(360deg)"] },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      { scale: [1, 1.5], transform: ["rotate(0deg)", "rotate(360deg)"] },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      { scale: [1, 1.5], transform: ["rotate(0deg)", "rotate(360deg)"] },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, { repeat: Infinity, repeatDelay: 1 });
  }, [sequence]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Circle className="h-12 w-12 circle-2 bg-text">
          <IconComponent1 className="h-6 w-6 text-elements" />
        </Circle>
        <Circle className="circle-3 bg-elements">
          <IconComponent2 className="h-8 w-8 text-text" />
        </Circle>
        <Circle className="h-12 w-12 circle-4 bg-text">
          <IconComponent3 className="h-6 w-6 text-elements" />
        </Circle>
      </div>
      <Sparkles />
    </div>
  );
};

const Sparkles = () => (
  <div className="absolute inset-0">
    {[...Array(12)].map((_, i) => (
      <motion.span
        key={`star-${i}`}
        animate={{
          top: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
          left: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
          opacity: Math.random(),
          scale: [1, 1.2, 0],
        }}
        transition={{
          duration: Math.random() * 2 + 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `2px`,
          height: `2px`,
          borderRadius: "50%",
          zIndex: 1,
        }}
        className="inline-block bg-black dark:bg-white"
      />
    ))}
  </div>
);

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
      className
    )}
  >
    {children}
  </div>
);

export const CardConst = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[#0D1117] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
      className
    )}
  >
    {children}
  </div>
);

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h3
    className={cn(
      "text-lg font-semibold text-gray-800 dark:text-white py-2",
      className
    )}
  >
    {children}
  </h3>
);

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p
    className={cn(
      "text-base text-text font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
      className
    )}
  >
    {children}
  </p>
);

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => (
  <div
    className={cn(
      "h-[15rem] md:h-[20rem] rounded-xl z-40",
      className,
      showGradient &&
        "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(40%_40%_at_50%_50%,#6A9AE6_0%,transparent_100%)]"
    )}
  >
    {children}
  </div>
);
