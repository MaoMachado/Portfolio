import { Outlet } from "react-router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  const classMain = [
    "grid",
    "place-items-center",
    "lg:h-[calc(100vh-180px)]",
    "h-[calc(100vh-229px)]",
    "w-full",
    "overflow-auto",
    "bg-white text-dark",
    "dark:bg-gray-900 dark:text-white",
    "transition-colors duration-300",
  ];

  return (
    <>
      <Header />
      <main className={classMain.join(" ")}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
