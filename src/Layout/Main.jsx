import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Main = () => (
  <>
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default Main;
