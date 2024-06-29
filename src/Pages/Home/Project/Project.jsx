import { Link } from "react-router-dom";
import { Projects } from "/utils/Projects.js";

import PropTypes from "prop-types";

const Project = () => {
  return (
    <div className="relative z-50  my-12 lg:my-24 container mx-auto">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className=" bg-primary absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-primary"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-3 gap-6">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure className="relative">
                <img src={project.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className=" text-base font-semibold">{project.name}</h2>
                <p className="text-sm">{project.description}</p>
                <ul className="flex gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <li key={toolIndex}>&#34;{tool}&#34;</li>
                  ))}
                </ul>
                <p>
                  <span className=" font-semibold">My Role:</span>{" "}
                  {project.role}
                </p>
                <div className=" absolute top-4 right-4">
                  <Link
                    to={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-sm border-none bg-secondary text-white hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer">
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tools: PropTypes.arrayOf(PropTypes.string).isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      live: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Project;
