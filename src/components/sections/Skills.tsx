import { useEffect, useState } from "react";
import { SKILLS, type SkillsType } from "../../data/skills";

interface SkillsProps {
  handleOpenModal: () => void;
}

export default function Skills({ handleOpenModal }: SkillsProps) {
  const [data, setData] = useState<SkillsType[]>([]);

  useEffect(() => {
    setData(SKILLS);
  }, []);

  return (
    <section
      onClick={handleOpenModal}
      className="w-screen h-screen p-4 lg:p-0 fixed top-0 left-0 bg-black/70 backdrop-blur-sm z-60 flex items-center justify-center"
    >
      <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 text-dark dark:bg-gray-800 dark:text-white">
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
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-(--ascent-primary) text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
