import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation: Array<{ name: string; to: string }> = [
  { name: "Inicio", to: "/" },
  { name: "Proyectos", to: "/projects" },
  { name: "Sobre mí", to: "/about" },
  { name: "Contacto", to: "/contact" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white text-dark dark:bg-gray-900 dark:text-white  transition-colors duration-300">
      <nav
        aria-label="Global"
        className="flex items-center justify-between lg:justify-center p-6 lg:px-8"
      >
        <section className="flex lg:flex-1">
          <a href="#">
            <h1 className="text-2xl font-bold">Mario Machado</h1>
          </a>
        </section>

        <section className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenu(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </section>

        <section className="hidden lg:flex lg:gap-x-12">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-purple-500 font-bold" : "text-gray-500"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <button onClick={toggleTheme}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </section>

        <Dialog open={mobileMenu} onClose={setMobileMenu} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <header className="flex items-center justify-between pb-2">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-white">Mario Machado</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenu(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </header>

            <div className="border border-gray-100/10 rounded-2xl" />

            <section className="mt-12 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <nav className="space-y-6 pb-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      onClick={() => setMobileMenu(false)}
                      className={({ isActive }) =>
                        isActive ? "text-purple-500 font-bold" : "text-gray-500"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </section>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
