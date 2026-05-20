import { motion } from "motion/react";
import { NavLink } from "react-router";

export default function Hero() {
  const stylesSection: string[] = [
    "min-h-[calc(100vh-153px)]",
    "grid",
    "place-items-center",
    "px-4",
    "bg-white",
    "text-dark",
    "dark:bg-gray-900",
    "dark:text-white",
    "transition-colors",
    "duration-300",
  ];

  const stacks: { nombre: string; color: string }[] = [
    { nombre: "React", color: "bg-blue-500" },
    { nombre: "TypeScript", color: "bg-blue-700" },
    { nombre: "Tailwind CSS", color: "bg-teal-500" },
  ];

  return (
    <section className={stylesSection.join(" ")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 p-4 flex flex-col items-center gap-8"
      >
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 lg sm:text-4xl">
            Hola, soy Mario Machado
          </h1>
          <p className="text-lg opacity-60 text-justify sm:text-2xl sm:text-center">
            Desarrollador Frontend especializado en React y TypeScript.
            Construyo interfaces rápidas, accesibles y enfocadas en la
            experiencia del usuario.
          </p>
        </header>

        <article className="flex flex-wrap gap-4 justify-center">
          {stacks.map((stack) => (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              key={stack.nombre}
              className={`${stack.color} font-sans px-3 py-1 rounded-full text-white text-xl`}
            >
              {stack.nombre}
            </motion.span>
          ))}
        </article>

        <NavLink
          to="/projects"
          className="bg-(--ascent-primary) w-fit py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 text-white font-medium"
        >
          Ver Proyectos
        </NavLink>
      </motion.div>
    </section>
  );
}
