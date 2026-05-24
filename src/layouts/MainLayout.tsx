import { Outlet } from "react-router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  const classMain = [
    "grid",
    "place-items-center",
    "w-full",
    "h-[calc(100vh-153px)]",
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
