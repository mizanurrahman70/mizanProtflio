import { HiCheck } from "react-icons/hi";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { highlights, kodezenProducts, profile } from "../data/portfolio";

const About = () => (
  <section id="about" className="container-x py-24 sm:py-32">
    <SectionHeader index="01" eyebrow="About" title="Frontend ownership, from architecture to production." />

    <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
        <p>{profile.summary}</p>
        <p>
          I&apos;m comfortable working on my own or in a cross-functional team, and I pick up new
          domains fast. React Flow, Gutenberg block APIs and automation products were all new to me
          when I started shipping them.
        </p>
        <div className="pt-4">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Products I&apos;ve worked on at Kodezen
          </p>
          <ul className="flex flex-wrap gap-2">
            {kodezenProducts.map((p) => (
              <li key={p} className="rounded-full border border-line/10 bg-surface px-3.5 py-1.5 text-sm text-fg">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={120} as="ul" className="card divide-y divide-line/[0.06]">
        {highlights.map((h) => (
          <li key={h} className="flex gap-4 p-5 sm:p-6">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <HiCheck size={14} />
            </span>
            <span className="leading-relaxed text-fg/90">{h}</span>
          </li>
        ))}
      </Reveal>
    </div>
  </section>
);

export default About;
