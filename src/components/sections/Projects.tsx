import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PROJECTS, type ProjectsType } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import ProjectCardSkeleton from "../common/ProjectCardSkeleton";

export default function Projects() {
  const [data, setData] = useState<ProjectsType[]>([]);
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

  return (
    <section className="w-full lg:w-1/2 py-4">
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center lg:text-3xl">
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
