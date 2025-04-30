import { 
  FaCode, 
  FaTools, 
  FaUserFriends, 
  FaWordpress,
  FaGitAlt,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiWordpress
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BsBlockquoteLeft } from "react-icons/bs";

const Skills = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaCode className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <SiHtml5 className="text-orange-500 text-xl mr-3" />
                <span>HTML5</span>
              </li>
              <li className="flex items-center">
                <SiCss3 className="text-blue-500 text-xl mr-3" />
                <span>CSS3</span>
              </li>
              <li className="flex items-center">
                <SiJavascript className="text-yellow-500 text-xl mr-3" />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center">
                <FaReact className="text-blue-400 text-xl mr-3" />
                <span>React.js</span>
              </li>
              <li className="flex items-center">
                <SiNextdotjs className="text-black text-xl mr-3" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="text-cyan-500 text-xl mr-3" />
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </div>
          
          {/* Backend & CMS */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <FaNodeJs className="text-green-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Backend & CMS</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaNodeJs className="text-green-500 text-xl mr-3" />
                <span>Node.js</span>
              </li>
              <li className="flex items-center">
                <SiExpress className="text-gray-500 text-xl mr-3" />
                <span>Express.js</span>
              </li>
              <li className="flex items-center">
                <SiMongodb className="text-green-600 text-xl mr-3" />
                <span>MongoDB</span>
              </li>
              <li className="flex items-center">
                <SiFirebase className="text-yellow-500 text-xl mr-3" />
                <span>Firebase</span>
              </li>
              <li className="flex items-center">
                <TbBrandReactNative className="text-blue-500 text-xl mr-3" />
                <span>TanStack Query</span>
              </li>
              <li className="flex items-center">
                <SiWordpress className="text-blue-700 text-xl mr-3" />
                <span>WordPress</span>
              </li>
              <li className="flex items-center">
                <BsBlockquoteLeft className="text-blue-500 text-xl mr-3" />
                <span>Gutenberg</span>
              </li>
            </ul>
          </div>
          
          {/* Tools & Platforms */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <FaTools className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Tools & Platforms</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaGitAlt className="text-orange-600 text-xl mr-3" />
                <span>Git/GitHub</span>
              </li>
              <li className="flex items-center">
                <SiNetlify className="text-teal-500 text-xl mr-3" />
                <span>Netlify</span>
              </li>
              <li className="flex items-center">
                <SiVercel className="text-black text-xl mr-3" />
                <span>Vercel</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
                <span>VS Code</span>
              </li>
            </ul>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-100 rounded-full mr-4">
                <FaUserFriends className="text-yellow-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span>Problem Solving</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span>Team Collaboration</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span>Communication</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span>Time Management</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span>Adaptability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;