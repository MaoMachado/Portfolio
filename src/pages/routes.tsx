import { createBrowserRouter } from "react-router-dom";
import Hero from "../components/sections/Hero";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
]);
