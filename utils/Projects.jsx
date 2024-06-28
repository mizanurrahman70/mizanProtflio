import Project from "../src/Pages/Home/Project/Project";
import cozyImg from "../src/assets/Project/care-quest.jpg";
const Projects = () => {
  const projectList = [
    {
      name: "CozyStay Hotel Booking Website",
      tools: ["React.js", "Node.js", "Express.js", "MongoDB"],
      role: "Full Stack Developer",
      description:
        "Developed a hotel booking platform with responsive front-end, secure user logins, and dynamic features like room filtering and real-time availability updates.",
      img: cozyImg,
      live: "https://cozystay-hotel-booking.web.app/",
    },
    {
      name: "Diagnostic Center Management System",
      tools: ["React.js", "Node.js", "Express.js", "Firebase"],
      role: "Full Stack Developer",
      description:
        "Streamlined diagnostic center operations with user authentication, profile management, responsive design, and dynamic admin features.",
      img: cozyImg,
      live: "https://care-quest-2ae20.web.app/",
    },
    {
      name: "South Travel - Tourism Management Website",
      tools: ["React.js", "Node.js", "MongoDB", "Firebase"],
      role: "Full Stack Developer",
      description:
        "Built a tourism management site with responsive design, secure authentication, and interactive maps for Southeast Asia travel details.",
      img: cozyImg,
      live: "https://assignment10-mongodb.web.app/",
    },
    // {
    //   name: "Portfolio Website",
    //   tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    //   role: "Frontend Developer",
    //   description:
    //     "A personal portfolio website to showcase my projects, skills, and experience.",
    //   img: "path/to/portfolio-image.jpg",
    //   live: "https://yourportfolio.com",
    // },
    // {
    //   name: "E-commerce Platform",
    //   tools: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
    //   role: "Full Stack Developer",
    //   description:
    //     "An e-commerce platform with user authentication, product management, and payment integration.",
    //   img: "path/to/ecommerce-image.jpg",
    //   live: "https://yourecommerce.com",
    // },
    // {
    //   name: "Social Media App",
    //   tools: ["React Native", "Firebase", "Redux"],
    //   role: "Frontend Developer",
    //   description:
    //     "A social media application with real-time messaging, photo sharing, and notification features.",
    //   img: "path/to/socialmedia-image.jpg",
    //   live: "https://yoursocialmediaapp.com",
    // },
    // {
    //   name: "Task Management Tool",
    //   tools: ["Vue.js", "Vuex", "Firebase", "Bootstrap"],
    //   role: "Frontend Developer",
    //   description:
    //     "A task management tool to help users organize and prioritize their tasks with a user-friendly interface.",
    //   img: "path/to/taskmanagement-image.jpg",
    //   live: "https://yourtaskmanagementtool.com",
    // },
    // {
    //   name: "Blog Platform",
    //   tools: ["Gatsby", "GraphQL", "Contentful", "Sass"],
    //   role: "Frontend Developer",
    //   description:
    //     "A modern blog platform with a focus on performance and SEO, featuring a content management system.",
    //   img: "path/to/blogplatform-image.jpg",
    //   live: "https://yourblogplatform.com",
    // },
  ];

  return (
    <div>
      <Project projectList={projectList}></Project>
    </div>
  );
};

export default Projects;
