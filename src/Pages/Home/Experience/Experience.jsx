import { experiences } from "../../../../utils/experinces";

const Experience = () => {
  const experience = experiences[0]; // Since there's only one experience, pick the first entry

  return (
    <div className="my-10 container mx-auto">
      {/* Header Section */}
      <div className="relative mb-10 text-center">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full mx-auto filter blur-3xl opacity-30"></div>
        <div className="flex items-center text-center">
          <span className="w-24 h-[2px] bg-primary"></span>
          <span className="bg-primary w-fit text-white p-2 px-5 text-center justify-center mx-auto text-xl rounded-md">
          My Experience
          </span>
          <span className="w-24 h-[2px] bg-primary"></span>
        </div>
  
        <p className="mt-2 text-gray-600">
          Here's an overview of my professional journey and contributions.
        </p>
      </div>

      {/* Experience Card */}
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title and Company */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-around mb-6">
          <div>
            <h2 className="text-2xl font-bold text-primary">{experience.title}</h2>
            <p className="text-lg text-secondary">{experience.company}</p>
          </div>
          <div>
          <span className="text-xl font-bold  text-primary">{experience.duration}</span> <br />
          <span className=" text-lg text-secondary"><span className=" text-lg text-gray-700">Start Date :</span> {experience.startDate} </span>
          </div>
          
          
        </div>

        {/* Responsibilities */}
        <ul className="mt-4 list-disc mx-auto items-center text-center list-inside space-y-2 text-gray-600">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>

        {/* Role */}
        <p className="mt-6 text-gray-700 text-center">
          <span className="font-semibold">Role:</span> {experience.role}
        </p>

        {/* Project Link */}
        {experience.projectLink && (
          <div className="mt-6 text-center">
            <a
              href={experience.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-secondary transition"
            >
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
