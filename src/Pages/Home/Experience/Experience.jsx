import { experiences } from "../../../../utils/experinces";

const Experience = () => {
  const experience = experiences[0]; // Since there's only one experience, pick the first entry

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
  
    {/* Experience Card */}
    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h2 className="text-xl font-bold text-green-800">Frontend Developer</h2>
        <div className="text-green-800 font-semibold">
          Full-time Employee (after completing a 3-month internship)
        </div>
      </div>
  
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="text-gray-700">KodeZen Ltd</div>
        <div className="text-sm text-gray-500">
          Start Date: August 17, 2024 (present)
        </div>
      </div>
  
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
        <li>Developed advanced WordPress blocks for the Ablocks project, enabling users to create websites with ease.</li>
        <li>Created blocks like Menu Block, Notice Block, Table Block, and Card Filterable Block for user-friendly website building.</li>
        <li>Worked with React.js, PHP, and CSS to deliver seamless and dynamic user interfaces.</li>
        <li>Collaborated with team members to optimize performance and usability for both frontend and backend functionalities.</li>
        <li>Improved project performance, ensuring scalability and reducing loading times.</li>
      </ul>
  
      <p className="mt-4 font-semibold text-gray-700">
        Role: <span className="font-normal">React.js Developer</span>
      </p>
  
      <button className="mt-6 px-5 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition">
        View Project
      </button>
    </div>
  </div>
  
  
  );
};

export default Experience;
