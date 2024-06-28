import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, tools, role, description, img, live } = project;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" text-base font-semibold">{name}</h2>
          <p className="text-sm">{description}</p>
          <ul className="flex gap-2">
            {tools.map((tool, toolIndex) => (
              <li key={toolIndex}>&#34;{tool}&#34;</li>
            ))}
          </ul>
          <p>
            <span className=" font-semibold">My Role:</span> {role}
          </p>
          <div className=" absolute top-4 right-4">
            <Link to={live} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-sm btn-primary text-white">
                Live
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
