import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { experience } from "../data/portfolio";

const Experience = () => (
  <section id="experience" className="border-y border-line/[0.06] bg-surface/30 py-24 sm:py-32">
    <div className="container-x">
      <SectionHeader
        index="02"
        eyebrow="Experience"
        title="Where I've been shipping."
        intro="Two years, four roles, and live products used by real people."
      />

      <ol className="relative space-y-6 border-l border-line/10 pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.period} delay={i * 80} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-ink sm:-left-[47px] ${
                i === 0 ? "bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.15)]" : "bg-muted/60"
              }`}
            />
            <article className="card p-6 transition-colors hover:border-line/15 sm:p-8">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 hover:text-accent"
                    >
                      {job.company}
                      <HiArrowUpRight className="text-sm opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </a>
                  </h3>
                  <p className="mt-1 text-muted">{job.role}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted sm:pt-1.5">{job.period}</p>
              </header>

              <p className="mt-4 text-fg/80">{job.summary}</p>

              {job.points.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              {job.tech.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
