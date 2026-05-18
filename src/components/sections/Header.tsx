import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

const navigation: Array<{ name: string; href: string }> = [
  { name: "Inicio", href: "#" },
  { name: "Proyectos", href: "#" },
  { name: "Sobre mí", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Contacto", href: "#" },
];

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="bg-gray-900 text-white">
     
    </main>
  );
}

export default Header;
