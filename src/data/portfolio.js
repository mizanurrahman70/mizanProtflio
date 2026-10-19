import mediMartImg from "../assets/Project/mediMartImg.png";
import bicycleImg from "../assets/Project/bycaicle.png";
import productPulseImg from "../assets/Project/productPluseDemo.png";

export const profile = {
  name: "Md Mizanur Rahman",
  shortName: "Mizanur",
  role: "Junior Software Engineer",
  focus: "Frontend / Full-Stack",
  location: "Jamalpur, Mymensingh, Bangladesh",
  email: "mizanurrahmanofficial70@gmail.com",
  phone: "+880 1988-637609",
  phoneHref: "tel:+8801988637609",
  resume: "/Md_Mizanur_Rahman_Resume.pdf",
  summary:
    "React developer delivering production-grade web apps, WordPress Gutenberg block plugins and complex automation tools. I take full frontend ownership — from architecture to delivery — and I've shipped real features and fixed critical bugs in live products.",
  socials: {
    github: "https://github.com/mizanurrahman70",
    linkedin: "https://www.linkedin.com/in/mizanur-rahman70/",
    facebook: "https://www.facebook.com/mizanurrahman.dev70/",
    x: "https://x.com/mizanur_70",
  },
};

export const stats = [
  { value: "2+", label: "Years shipping production code" },
  { value: "7+", label: "Products contributed to at Kodezen" },
  { value: "60+", label: "Blocks built & improved in aBlocks" },
  { value: "3", label: "Products owned end-to-end" },
];

export const highlights = [
  "Independently built the complete frontend of WAB Foundation's live non-profit platform — donations, blood donor network and a full admin dashboard.",
  "Took sole frontend ownership of Zaplane, a trigger-based automation platform, and delivered the full product.",
  "Implemented a visual workflow builder with open-source React Flow — fully custom nodes, edges and logic.",
  "Built the GameEngine frontend from scratch, owning the UI architecture and component system.",
  "Rapid learner — picked up React Flow, Gutenberg block APIs and automation domains without prior experience.",
];

export const experience = [
  {
    company: "Traideas",
    role: "Junior Software Engineer",
    period: "Sep 2026 — Present",
    link: "https://traideas.com/",
    summary:
      "Building enterprise software, AI-driven automation and scalable digital platforms at a software company in Dhaka.",
    points: [],
    tech: [],
  },
  {
    company: "WAB Foundation",
    role: "Frontend Developer — Non-Profit Web Platform",
    period: "Apr 2026 — Sep 2026",
    link: "https://www.wabfoundation.org.bd/",
    summary:
      "A live production platform for a non-profit: donation campaigns, a blood donor network, blogs, gallery, membership and a full admin dashboard.",
    points: [
      "Developed the entire frontend independently — from architecture to live deployment, serving real users.",
      "Built donation campaigns with progress tracking and payments via SSLCommerz, bKash and Nagad.",
      "Implemented English / Bengali support with automatic font switching (next-intl).",
      "Built the admin dashboard for campaigns, blogs, users, roles, permissions, media and payments.",
      "Designed a secure architecture with Server Actions, auth proxy middleware and automatic token refresh.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "next-intl", "React Hook Form", "Recharts", "Framer Motion"],
  },
  {
    company: "Kodezen LLC",
    role: "Frontend Developer (Full-Time)",
    period: "Nov 2024 — Apr 2026",
    link: "https://kodezen.com/",
    summary:
      "Owned the frontend of Zaplane, a trigger-based automation platform similar to Bit Flow and OttoKit, and contributed across the product line.",
    points: [
      "Held full frontend responsibility — every decision from architecture to production release.",
      "Built a visual workflow builder on open-source React Flow (no Pro license) with custom node types, edge logic and drag-and-drop.",
      "Designed and developed the full UI from scratch and delivered the project independently.",
      "Built the GameEngine frontend from scratch and shipped work on Zen Booking, QuizPress, Zan Community and Zan Board.",
    ],
    tech: ["React", "React Flow", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    company: "Kodezen LLC",
    role: "Frontend Intern",
    period: "Aug 2024 — Oct 2024",
    link: "https://ablocks.pro/",
    summary:
      "A 3-month internship on aBlocks, a publicly released Gutenberg block plugin, before moving to a full-time role.",
    points: [
      "Built new Gutenberg blocks from scratch: Table, Social Share, Notice and Filterable Gallery.",
      "Improved the Menu Block and its advanced features for usability and extensibility.",
      "Implemented Container, Grid and Flex layout systems for flexible page building.",
      "Worked on 60+ blocks across the library — creating new blocks and improving existing ones.",
    ],
    tech: ["React", "WordPress", "Gutenberg", "JavaScript"],
  },
];

export const featured = [
  {
    name: "WAB Foundation",
    kind: "Non-profit platform",
    description:
      "Donation campaigns with local payment gateways, a blood donor network, bilingual content and a role-based admin dashboard — built solo, live in production.",
    tags: ["Next.js", "next-intl", "SSLCommerz", "bKash"],
    link: "https://www.wabfoundation.org.bd/",
    ownership: "Sole frontend",
  },
  {
    name: "Zaplane",
    kind: "Automation platform",
    description:
      "Trigger-based workflow automation with a drag-and-drop visual builder on React Flow — custom nodes, edges and execution logic.",
    tags: ["React", "React Flow", "TypeScript"],
    link: "https://zaplane.app/",
    ownership: "Sole frontend",
  },
  {
    name: "aBlocks",
    kind: "Gutenberg block plugin",
    description:
      "A public WordPress block library. Created and improved 60+ blocks, including the Container / Grid / Flex layout systems.",
    tags: ["Gutenberg", "React", "WordPress"],
    link: "https://ablocks.pro/",
    ownership: "Core contributor",
  },
  {
    name: "GameEngine",
    kind: "Product UI",
    description:
      "Frontend built from scratch — the complete UI architecture and a reusable component system.",
    tags: ["React", "Component system"],
    link: null,
    ownership: "Built from scratch",
  },
];

export const kodezenProducts = [
  "aBlocks",
  "Zaplane",
  "GameEngine",
  "Zen Booking",
  "QuizPress",
  "Zan Community",
  "Zan Board",
];

export const sideProjects = [
  {
    name: "MediMart",
    description:
      "Medicine e-commerce with role-based auth, prescription verification, Stripe checkout, order tracking and an admin dashboard.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    img: mediMartImg,
    live: "https://medimart-rose.vercel.app/",
    code: "https://github.com/mizanurrahman70/mediTrust-server",
  },
  {
    name: "Bicycle Store",
    description:
      "Bicycle e-commerce with product search and filtering, secure Stripe payments, inventory management and role dashboards.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    img: bicycleImg,
    live: "https://bi-cycle-client-six.vercel.app/",
    code: "https://github.com/mizanurrahman70/bicycle-clint-4",
  },
  {
    name: "ProductPulse",
    description:
      "A Product Hunt-style platform to post and discover tech products, with reviews, ratings, payments and admin moderation.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    img: productPulseImg,
    live: "https://productpulse-5f3ec.web.app",
    code: "https://github.com/mizanurrahman70/ProductPulse-Client",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Shopify"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "Prisma", "PostgreSQL", "Strapi"],
  },
  {
    group: "Tools",
    items: ["VS Code", "Chrome DevTools", "Figma", "Vercel", "Netlify", "Canva", "Claude", "Cursor", "ChatGPT", "Gemini"],
  },
  {
    group: "Soft skills",
    items: ["Communication", "Leadership", "Team Collaboration", "Time Management", "Adaptability", "Quick Learner", "Responsibility"],
  },
];

export const education = [
  {
    degree: "Bachelor of Arts (B.A.) in Islamic History & Culture",
    school: "National University, Bangladesh",
    period: "Currently pursuing",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Bakshiganj Govt. Kiamat Ullah College",
    period: "Graduated 2024",
  },
];
