import ProjectCard from "./ProjectCard";

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
        <div className="flex flex-col gap-6">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Project;
