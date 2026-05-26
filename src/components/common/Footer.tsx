import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="dark:bg-(--bg-dark) dark:text-white transition-colors duration-300">
      <div className="flex gap-4 items-center justify-around flex-col lg:flex-row p-6">
        <article>
          <ul>
            <li className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/mao-machado/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--ascent-primary)"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="hover:scale-110" />
              </a>

              <a
                href="https://github.com/maomachado"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--ascent-primary)"
                aria-label="GitHub"
              >
                <SiGithub size={20} className="hover:scale-110" />
              </a>

              <a
                href="mailto:machado-mario@outlook.com"
                className="hover:text-(--ascent-primary)"
                aria-label="Email"
              >
                <Mail size={20} className="hover:scale-110" />
              </a>
            </li>
          </ul>
        </article>
        <article className="flex-1 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {new Date().getFullYear()} © Mao Dev
          </p>
        </article>
        <article className="lg:w-50">
          <p className="text-xs/6 text-right text-(--ascent-primary)">
            Proyecto construido con React, TypeScript y Tailwind CSS
          </p>
        </article>
      </div>
    </footer>
  );
}
