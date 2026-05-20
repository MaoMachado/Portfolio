import { motion } from "motion/react";

interface Props {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  repoUrl,
  image,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-sm h-full m-auto flex flex-col justify-between gap-4 p-3 border rounded-l bg-white dark:bg-gray-800 shadow-lg shadow-gray-300 dark:shadow-gray-700 transition-colors duration-300"
    >
      <header className="text-center">
        <h3 className="text-xl">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-balance text-justify">
          {description}
        </p>
      </header>
      <section>
        <figure className="mb-2">
          {image ? (
            <img
              src={image}
              alt={`${title} screenshot`}
              className="w-full h-auto"
            />
          ) : (
            <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p>Sin Imagen</p>
            </div>
          )}
        </figure>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
      <footer className="flex justify-between gap-4">
        <a
          href={demoUrl}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Demo
        </a>
        <a
          href={repoUrl}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Repositorio
        </a>
      </footer>
    </motion.article>
  );
}
