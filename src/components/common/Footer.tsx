import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white text-dark dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex items-center justify-center gap-10 p-6 lg:px-8">
        <p className="text-sm/6 font-semibold">2026 © Mao.Dev</p>
        <div>
          <a href="#">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
