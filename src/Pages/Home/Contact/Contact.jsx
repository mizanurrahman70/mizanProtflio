import { MdAlternateEmail, MdHome, MdPhone } from "react-icons/md";
import { personalData } from "/utils/personal-data.js";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="#contact" className="my-12 lg:my-16 relative container mx-auto">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-primary w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <ContactForm></ContactForm>
        </div>
        <div className="grid grid-cols-1 gap-4 order-1 lg:order-2">
          <p className="text-sm md:text-xl flex items-center gap-3">
            <MdAlternateEmail
              className="bg-secondary text-white p-2 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer"
              size={36}
            />
            <span>{personalData.email}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <MdPhone
              className="bg-secondary text-white p-2 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer"
              size={36}
            />
            <span>{personalData.phone}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <MdHome
              className="bg-secondary text-white p-2 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer"
              size={36}
            />
            <span>{personalData.address}</span>
          </p>
          <div className="mt-5 flex justify-center lg:justify-start items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-secondary  p-3 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={48}
              />
            </Link>

            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
