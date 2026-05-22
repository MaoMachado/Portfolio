import { createBrowserRouter } from "react-router-dom";

import Hero from "../components/sections/Hero";
import MainLayout from "../layouts/MainLayout";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
