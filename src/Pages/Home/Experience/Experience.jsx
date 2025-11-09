import { experiences } from "../../../../utils/experinces";

const Experience = () => {
  return (
    <div className="my-20 px-4 max-w-5xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 bg-green-700 opacity-10 blur-2xl rounded-full"></div>
        </div>
        <div className="relative z-10 inline-flex items-center space-x-4">
          <span className="h-[2px] w-16 bg-green-700"></span>
          <span className="px-6 py-2 bg-green-700 text-white rounded-md shadow text-lg font-medium">
            My Experience
          </span>
          <span className="h-[2px] w-16 bg-green-700"></span>
        </div>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Here's an overview of my professional journey and contributions.
        </p>
      </div>

      {/* Experience Cards */}
     {experiences.map((experience, index) => (
  <div
    key={experience.id}
    className={`bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8 hover:shadow-2xl transition duration-300 sticky ${
      index === 0
        ? "top-24"
        : index === 1
        ? "top-36"
        : index === 2
        ? "top-48"
        : "top-24"
    }`}
  >
    <div className="flex flex-col md:flex-row justify-between mb-2">
      <h2 className="text-2xl font-semibold text-green-800 transition duration-300 hover:text-green-700">
        {experience.title}
      </h2>
      <div className="text-green-800 font-semibold">{experience.duration}</div>
    </div>

    <div className="flex flex-col md:flex-row justify-between mb-4">
      <div className="text-gray-700 font-medium">{experience.company}</div>
      <div className="text-sm text-gray-500">
        <span>Start Date: {experience.startDate}</span>
        {experience.endDate && <span> - End Date: {experience.endDate}</span>}
      </div>
    </div>

    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
      {experience.responsibilities?.map((responsibility, i) => (
        <li key={i} className="hover:text-green-600 transition duration-200">
          {responsibility}
        </li>
      ))}
    </ul>

    {experience.role && (
      <p className="mt-4 font-semibold text-gray-700">
        Role:{" "}
        <span className="font-normal text-gray-500">{experience.role}</span>
      </p>
    )}
    {experience.certificate && (
      <p className="mt-4 font-semibold text-gray-700">
        Certificate:{" "}
        <span className="font-normal text-gray-500">
          {experience.certificate}
        </span>
      </p>
    )}

    {experience.projectLink && (
      <a href={experience.projectLink} target="_blank" rel="noopener noreferrer">
        <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300 shadow-md hover:shadow-xl">
          View Project
        </button>
      </a>
    )}
  </div>
))}

    </div>
  );
};

export default Experience;
