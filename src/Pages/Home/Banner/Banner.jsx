import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "./Typewriter";
import { FaXTwitter } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { personalData } from "/utils/personal-data.js";

const Banner = () => {
  return (
    <div
      id="#home"
      className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center container mx-auto gap-4 lg:my-10"
    >
      <div className=" lg:space-y-6 space-y-4 ">
        <p className=" font-openSans lg:text-4xl text-2xl font-extrabold  ">
          Hello,
        </p>
        <Typewriter></Typewriter>
        <section className="flex gap-4 text-secondary items-center text-2xl">
          <a
            className="hover:text-secondary hover:scale-110 transition-all duration-300 cursor-pointer"
            href={personalData.github}
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-secondary hover:scale-110 transition-all duration-300 cursor-pointer"
            href={personalData.linkedIn}
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-secondary hover:scale-110 transition-all duration-300 cursor-pointer"
            href={personalData.facebook}
          >
            <FaFacebook />
          </a>
          <a
            className="hover:text-secondary hover:scale-110 transition-all duration-300 cursor-pointer"
            href={personalData.twitter}
          >
            <FaXTwitter />
          </a>
        </section>
        <section className="flex justify-center lg:justify-start gap-4 items-center">
          <button className=" btn bg-primary border-none rounded-full text-white hover:bg-secondary hover:scale-110 transition-all duration-300 cursor-pointer">
            {" "}
            <a
              href="#contact"
              className="hover:text-white hover:bg-secondary cursor-pointer flex gap-2 justify-center items-center"
            >
              Contact Me <RiContactsFill />
            </a>
          </button>
          <a
            href="/MD_Naiemun_Hasan_MERN_STACK_DEVELOPER.pdf"
            download
            className="flex gap-2 justify-center items-center btn border-none btn-primary rounded-full text-white hover:bg-secondary hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            Get Resume <MdDownload />
          </a>
        </section>
      </div>
      <div className="  lg:flex justify-center">
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Naiem Hasan</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Node JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Firebase</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
