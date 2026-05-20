import { Outlet } from "react-router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-153px)] overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
