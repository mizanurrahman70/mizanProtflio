import { HiOutlineAcademicCap } from "react-icons/hi";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { education } from "../data/portfolio";

const Education = () => (
  <section id="education" className="container-x py-24 sm:py-32">
    <SectionHeader index="05" eyebrow="Education" title="Learning, formally and on the job." />

    <div className="grid gap-5 md:grid-cols-2">
      {education.map((e, i) => (
        <Reveal key={e.degree} delay={i * 100} className="card flex gap-5 p-6 sm:p-8">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <HiOutlineAcademicCap size={22} />
          </span>
          <div>
            <p className="font-mono text-xs text-muted">{e.period}</p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{e.degree}</h3>
            <p className="mt-1 text-muted">{e.school}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;
