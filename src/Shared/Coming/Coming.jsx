import { FaLinkedin } from "react-icons/fa";
import constructionIcon from "../../../public/undraw_coffee_break_h3uu.svg";
import { SiGithub } from "react-icons/si";
const Coming = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFD700]">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-6">
          This page is under construction. Please check back later.
        </p>
        <img src={constructionIcon} alt="" />
        <div className="mt-10 flex gap-5 justify-center">
          <a
            href="https://www.linkedin.com/in/naiemjoy1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-[#0077B5] text-white">
              <span>
                <FaLinkedin />
              </span>
              Linkdin
            </button>
          </a>
          <a
            href="https://github.com/Naiemjoy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-black text-white">
              <span>
                <SiGithub />
              </span>
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coming;
