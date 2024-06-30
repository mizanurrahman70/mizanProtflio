import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ScrollToTopButton from "../Components/ScrollTop/ScrollToTopButton";

const Main = () => {
  return (
    <div className="font-openSans">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default Main;
