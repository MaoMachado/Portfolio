interface IconType {
  name: string;
  color: string;
  icon?: string;
}

export interface SkillsType {
  title: string;
  skills: IconType[];
}

export const SKILLS: SkillsType[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "61DAFB", icon: "react" },
      { name: "Vue.js", color: "4FC08D", icon: "vuejs" },
      { name: "TypeScript", color: "3178C6", icon: "typescript" },
      { name: "Tailwind CSS", color: "38B2AC", icon: "tailwindcss" },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", color: "#F03C2E", icon: "git" },
      { name: "Vite", color: "#646CFF", icon: "vite" },
      { name: "Netlify", color: "#00C7B7", icon: "netlify" },
      { name: "VS Code", color: "#007ACC", icon: "vscode" },
    ],
  },
  {
    title: "Conocimientos",
    skills: [
      {
        name: "Responsive Design",
        color: "#61DAFB",
        icon: "responsive-design.svg",
      },
      { name: "Accesibilidad", color: "#3178C6", icon: "accesibilidad.svg" },
      { name: "Performance", color: "#38B2AC", icon: "performance.svg" },
      { name: "UI/UX", color: "#4FC08D", icon: "ui-ux.svg" },
    ],
  },
];
