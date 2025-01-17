import cozyImg from "../src/assets/Project/care-quest.jpg";
import fixIt from "../src/assets/Project/fixIT.png";
import journeyTract from "../src/assets/Project/jurnyTract.png";
import commercial from "../src/assets/Project/comarsila.png";

export const Projects = [
  {
    id: 1,
    name: "Fix It Genius",
    tools: ["React.js", "Node.js", "Firebase", "MongoDB"],
    role: "Full Stack Developer",
    description:
      "A full-stack Electronic Repairing Services web app where people can take and book services. Login system with firebase and private routes. Dashboard for users can see her activity, adding her product and .manage service etc.",
    img: fixIt,
    features: [
      "Specialization and Upskilling",
      'Circular Economy Integration',
      "Remote Diagnostics and Repair",

    ],
    live: "https://eleven-daeee.web.app/",
    client: "https://github.com/mizanurrahman70/Fix-It-Genius-Client-side",
    server: "https://github.com/mizanurrahman70/Fix-It-Genius-server-side",
  },
  {
    id: 2,
    name: "Journey OfTrack",
    tools: ["React.js", "Node.js", "Firebase", "MongoDB"],
    role: "Full Stack Developer",
    description:
      "A comprehensive full-stack web app where users can explore and book tourist sites. It includes a Firebase login system with private routes. Users can easily find and book tourist sites, add new spots, and sort their listings in ascending or descending order",
    img: journeyTract,
    features: [
      "This website is Travial",
      "use tousit sports",
      "we give fulltime service",
    ],
    live: "https://torist-side.web.app/",
    client: "https://github.com/mizanurrahman70/Journey-OfTrack-client",
    server: "https://github.com/mizanurrahman70/Journey-OfTrack-server",
  },
  {
    id: 3,
    name: "South Travel - Tourism Management Website",
    tools: ["React.js", "Firebase", "MongoDB"],
    role: "Full Stack Developer",
    description:
      "Built a tourism management site with responsive design, secure authentication, and interactive maps for Southeast Asia travel details.",
    img: commercial,
    features: ["Dynamic Home Page", "User Management", "Personalization"],
    live: "https://commercialhub.netlify.app/",
    client: "https://github.com/mizanurrahman70/Journey-OfTrack-client",

  },
];
