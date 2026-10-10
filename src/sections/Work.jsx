import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { featured, sideProjects } from "../data/portfolio";

const FeaturedCard = ({ item, index }) => {
  const Wrapper = item.link ? "a" : "div";
  const linkProps = item.link ? { href: item.link, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Reveal delay={(index % 2) * 100} className="h-full">
      <Wrapper
        {...linkProps}
        className="card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition duration-500 group-hover:bg-accent/15"
        />
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-muted">0{index + 1}</span>
          <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
            {item.ownership}
          </span>
        </div>

        <h3 className="mt-10 flex items-center gap-2 font-display text-3xl font-semibold tracking-tight">
          {item.name}
          {item.link && (
            <HiArrowUpRight className="text-xl text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
          )}
        </h3>
        <p className="mt-1 text-sm text-accent/90">{item.kind}</p>
        <p className="mt-4 flex-1 leading-relaxed text-muted">{item.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
      </Wrapper>
    </Reveal>
  );
};

const ProjectCard = ({ project, index }) => (
  <Reveal delay={index * 90} as="article" className="card group flex flex-col overflow-hidden">
    <a href={project.live} target="_blank" rel="noreferrer" className="block aspect-[16/10] overflow-hidden border-b border-line/[0.06] bg-ink">
      <img
        src={project.img}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
      />
    </a>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-xl font-semibold">{project.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-4 text-sm">
        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-fg hover:text-accent">
          Live site <HiArrowUpRight />
        </a>
        <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
          <FaGithub /> Code
        </a>
      </div>
    </div>
  </Reveal>
);

FeaturedCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    ownership: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Work = () => (
  <section id="work" className="container-x py-24 sm:py-32">
    <SectionHeader
      index="03"
      eyebrow="Selected work"
      title="Products I've owned and shipped."
      intro="Professional work first: live platforms and plugins with real users. Below that, full-stack projects I built on my own."
    />

    <div className="grid gap-5 md:grid-cols-2">
      {featured.map((item, i) => (
        <FeaturedCard key={item.name} item={item} index={i} />
      ))}
    </div>

    <Reveal className="mb-8 mt-24 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow">Side projects</p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Full-stack builds</h3>
      </div>
      <a
        href="https://github.com/mizanurrahman70"
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-1.5 text-sm text-muted hover:text-accent sm:inline-flex"
      >
        More on GitHub <HiArrowUpRight />
      </a>
    </Reveal>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {sideProjects.map((p, i) => (
        <ProjectCard key={p.name} project={p} index={i} />
      ))}
    </div>
  </section>
);

export default Work;
