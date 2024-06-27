import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerimg from "../../../assets/banner-image.png";
import Typewriter from "./Typewriter";
import { FaXTwitter } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
const Banner = () => {
  return (
    <div className="flex justify-center items-center container mx-auto gap-4">
      <div className="w-1/2 space-y-4">
        <p className=" font-openSans text-4xl font-extrabold  ">Hello,</p>
        <Typewriter></Typewriter>
        <section className="flex gap-4 text-secondary items-center text-2xl">
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
        </section>
        <section className="flex gap-4 items-center">
          <button className="flex gap-2 justify-center items-center btn btn-primary rounded-full text-white">
            Contact Me <RiContactsFill />
          </button>
          <a
            href="/MD_Naiemun_Hasan_MERN_STACK_DEVELOPER.pdf"
            download
            className="flex gap-2 justify-center items-center btn btn-primary rounded-full text-white"
          >
            Get Resume <MdDownload />
          </a>
        </section>
      </div>
      <div className="w-1/2 ">
        <img src={bannerimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
