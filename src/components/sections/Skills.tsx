import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiGit,
  SiNetlify,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVscodium,
  SiVuedotjs,
} from "react-icons/si";
import { SKILLS, type SkillsType } from "../../data/skills";
import { motion } from "motion/react";

interface SkillsProps {
  handleOpenModal: () => void;
}

export default function Skills({ handleOpenModal }: SkillsProps) {
  const [data, setData] = useState<SkillsType[]>([]);

  useEffect(() => {
    setData(SKILLS);
  }, []);

  const IconsMap: Record<string, IconType> = {
    react: SiReact,
    vuejs: SiVuedotjs,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
    git: SiGit,
    vite: SiVite,
    netlify: SiNetlify,
    vscode: SiVscodium,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handleOpenModal}
      className="w-screen h-screen p-4 lg:p-0 fixed top-0 left-0 bg-black/70 backdrop-blur-sm z-60 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full lg:w-1/2 bg-white rounded-lg p-6 text-dark dark:bg-gray-800 dark:text-white"
      >
        <h2 className="text-2xl font-bold text-center lg:text-3xl mb-6 text-(--ascent-primary)">
          Tech Stacks
        </h2>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <div className="flex flex-col flex-wrap gap-2">
                {item.skills.map((skill) => {
                  const IconComponent = skill.icon
                    ? IconsMap[skill.icon]
                    : null;

                  return (
                    <span
                      key={skill.name}
                      className={`flex items-center justify-between gap-2 px-3 py-1 rounded-full text-sm font-medium bg-(--ascent-primary-30) text-black dark:text-white`}
                    >
                      {skill.name}
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5" />
                      ) : (
                        <span>⚫</span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </article>
      </motion.div>
    </motion.section>
  );
}
