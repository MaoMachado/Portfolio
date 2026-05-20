import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PROJECTS, type TypeDataProjects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import ProjectCardSkeleton from "../common/ProyectCardSkeleton";

export default function Projects() {
  const [data, setData] = useState<TypeDataProjects[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Simulamos una carga de datos con un retraso
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setData(PROJECTS);
      } catch (error) {
        console.error("Error al cargar los proyectos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const style = [
    "min-h-[calc(100vh-153px)]",
    "grid",
    "place-items-center",
    "px-4",
    "py-12",
    "bg-white",
    "text-dark",
    "dark:bg-gray-900",
    "dark:text-white",
    "transition-colors",
    "duration-300",
  ];

  return (
    <section className={style.join(" ")}>
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-3xl lg:text-left">
          Proyectos
        </h2>
        <article className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            : data.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
        </article>
      </motion.div>
    </section>
  );
}
