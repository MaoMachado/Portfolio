export interface TypeDataProjects {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  image?: string;
}

export const PROJECTS: TypeDataProjects[] = [
  {
    title: "E-commerce de ropa urbana",
    description:
      "Una tienda en línea para ropa urbana, con catálogo de productos, carrito de compras y sistema de pago integrado.",
    tags: ["React", "Firebase", "Redux Toolkit", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    image: "",
  },
  {
    title: "App del clima",
    description:
      "Una aplicación que muestra el clima actual y pronóstico para cualquier ubicación, utilizando una API de clima.",
    tags: ["React", "OpenWeatherMap API", "React Query", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    image: "",
  },
  {
    title: "Landing page corporativa",
    description:
      "Una página de aterrizaje para una empresa ficticia, con diseño moderno y responsivo.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    image: "",
  },
];
