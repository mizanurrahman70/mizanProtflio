import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const Project = ({ projectList }) => {
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
          {projectList.map((project, index) => (
            <ProjectCard project={project} key={index}></ProjectCard>
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
