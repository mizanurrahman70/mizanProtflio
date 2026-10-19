import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiShopify,
  SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiPrisma, SiPostgresql, SiStrapi,
  SiFigma, SiVercel, SiNetlify, SiCanva, SiGooglegemini, SiClaude, SiOpenai,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaChrome } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { skills } from "../data/portfolio";

const icons = {
  HTML5: SiHtml5, CSS3: SiCss3, JavaScript: SiJavascript, TypeScript: SiTypescript, "React.js": SiReact,
  "Next.js": SiNextdotjs, Redux: SiRedux, "Tailwind CSS": SiTailwindcss, Shopify: SiShopify,
  "Node.js": SiNodedotjs, Express: SiExpress, MongoDB: SiMongodb, Mongoose: SiMongoose, Prisma: SiPrisma,
  PostgreSQL: SiPostgresql, Strapi: SiStrapi, "VS Code": VscVscode, "Chrome DevTools": FaChrome,
  Figma: SiFigma, Vercel: SiVercel, Netlify: SiNetlify, Canva: SiCanva, Gemini: SiGooglegemini,
  Claude: SiClaude, ChatGPT: SiOpenai,
};

const Skills = () => (
  <section id="skills" className="border-y border-line/[0.06] bg-surface/30 py-24 sm:py-32">
    <div className="container-x">
      <SectionHeader index="04" eyebrow="Skills" title="The toolkit." />

      <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 2) * 100} className="card p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{group.group}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = icons[item];
                return (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-line/[0.08] bg-ink/60 px-3 py-2 text-sm text-fg/90 transition-colors hover:border-accent/40 hover:text-fg"
                  >
                    {Icon && <Icon className="text-accent/90" />}
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
