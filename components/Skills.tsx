"use client";
import JavascriptIcon from "@/assets/icons/JavaScript.svg";
import ReactIcon from "@/assets/icons/React.svg";
import NextIcon from "@/assets/icons/Next.svg";
import HTML5Icon from "@/assets/icons/Html5.svg";
import CssIcon from "@/assets/icons/Css.svg";
import DockerIcon from "@/assets/icons/Docker.svg";
import TypeScriptIcon from "@/assets/icons/TypeScript.svg";
import StoryBookIcon from "@/assets/icons/StoryBook.svg";
import TailwindIcon from "@/assets/icons/TailwindCss.svg";

interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "HTML5", logo: HTML5Icon.src },
  { name: "CSS", logo: CssIcon.src },
  { name: "TailwindCSS", logo: TailwindIcon.src },
  { name: "JavaScript", logo: JavascriptIcon.src },
  { name: "Docker", logo: DockerIcon.src },
  { name: "React", logo: ReactIcon.src },
  { name: "Next.js", logo: NextIcon.src },
  { name: "TypeScript", logo: TypeScriptIcon.src },
  { name: "StoryBook", logo: StoryBookIcon.src },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full h-full overflow-hidden py-10"
    >
      <div className="flex w-max animate-marquee">
        {/* Map original elements and their duplicates */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 flex flex-col items-center text-center mx-5"
          >
            <div className="bg-text rounded-full p-4 shadow-lg">
              <img src={skill.logo} alt={skill.name} className="h-16 w-16" />
            </div>
            <h2 className="font-mont text-elements text-xl font-bold mt-4">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
