import cozyImg from "../src/assets/Project/care-quest.jpg";
import fixIt from "../src/assets/Project/fixIT.png";
import journeyTract from "../src/assets/Project/jurnyTract.png";
import commercial from "../src/assets/Project/comarsila.png";
import commBicyclercial from "../src/assets/Project/bycaicle.png";
import productPluseDemo from "../src/assets/Project/productPluseDemo.png";
import mediMartImg from "../src/assets/Project/mediMartImg.png";


export const Projects = [
  {
    id: 1,
    name: "MediMart - Online Medicine Shop",
    tools: ["Next.js", "TypeScript", "MongoDB", "JWT", "Stripe"],
    role: "Full Stack Developer",
    description:
      "Built a secure and responsive medicine e-commerce platform with role-based authentication, prescription verification, payment integration, and admin management features.",
    img: mediMartImg, // Replace with your actual image import or path
    features: [
      "User Authentication & Roles",
      "Medicine Search & Listings",
      "Prescription Upload & Verification",
      "Cart & Secure Checkout",
      "Order Tracking System",
      "Admin Dashboard for Full Control"
    ],
    live: "https://medimart-rose.vercel.app/",
    client: "https://github.com/jmjubaer/medimart-client",
    server: "https://github.com/mizanurrahman70/mediTrust-server"
  },
  
  {
    id: 2,
    name: "Bicycle Store - E-commerce Platform",
    tools: ["React.js", "Node.js", "MongoDB", "JWT", "Stripe"],
    role: "Full Stack Developer",
    description:
      "Developed a responsive e-commerce platform for bicycles with role-based authentication, product management, and secure online payment integration.",
    img: commBicyclercial, // Replace with your actual image import or path
    features: [
      "User Registration & Login",
      "Product Search & Filtering",
      "Secure Checkout with Stripe",
      "Admin & User Dashboards",
      "Inventory & Order Management"
    ],
    live: "https://bi-cycle-client-six.vercel.app/      ",
    client: "https://github.com/mizanurrahman70/bicycle-clint-4",
    server: "https://github.com/mizanurrahman70/bicycle-server-4"
  },
  {
    id: 3,
    name: "ProductPluse - Product Hunt Inspired Platform",
    tools: ["React.js", 'Node Js',"MongoDB", "Stripe"],
    role: "Full Stack Developer",
    description:
      "Developed a Product Hunt-style platform where users can post, discover, and explore tech products with clean UI, secure payments, and review features.",
    img: productPluseDemo, // Replace with your actual image path or import
    features: [
      "Product Listing Page",
      "Real-Time Posting",
      "Responsive Design",
      "Maker Profiles",
      "Launch Tracking",
      "Secure Payment System",
      "Product Reviews & Ratings",
      "Admin Dashboard for Product Management"
    ],
    live: "https://productpulse-5f3ec.web.app",
    client: "https://github.com/mizanurrahman70/ProductPulse-Client",
    server: "https://github.com/mizanurrahman70/productpluse-server"
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
