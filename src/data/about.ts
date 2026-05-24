export interface AboutData {
  title: string;
  myPath: string;
  skillsApproach: string;
  interests: string;
}

export const ABOUT: AboutData[] = [
  {
    title: "Sobre Mí",
    myPath:
      "Empecé en el diseño gráfico y descubrí el código cuando quise dar vida a mis layouts. Desde entonces me especialicé en React y TypeScript, creando interfaces que no solo se vean bien, sino que funcionen rápido y sean accesibles.",
    skillsApproach:
      "Me obsesiona la performance y la experiencia de usuario. Cada proyecto es una oportunidad para aprender y superarme.",
    interests:
      "Actualmente profundizo en testing con Vitest y explorando el ecosistema de Vue.js para ampliar mi stack.",
  },
];
