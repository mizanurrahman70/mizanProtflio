import { HiArrowDown, HiOutlineDocumentText, HiOutlineLocationMarker } from "react-icons/hi";
import { profile, stats } from "../data/portfolio";
import { socialLinks } from "../components/socialLinks";
import portrait from "../assets/mizan-profile.jpg";

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
  WebkitMaskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
};

const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
    <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.035]" style={gridStyle} />

    <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 text-xs text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to new opportunities
        </div>

        <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-display text-xl text-muted sm:text-2xl">
          {profile.role} <span className="text-fg/30">·</span>{" "}
          <span className="text-fg">{profile.focus}</span>
        </p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          I build production web apps with <span className="text-fg">React, Next.js and TypeScript</span>,
          from a live non-profit platform to a visual automation builder and a public Gutenberg
          block plugin. Give me a product and I&apos;ll own the frontend end to end.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary">
            See my work <HiArrowDown />
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
            <HiOutlineDocumentText size={18} /> Resume
          </a>
          <div className="ml-1 flex items-center gap-1">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full p-2.5 text-muted transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:order-2 lg:max-w-none">
        <div className="relative">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-line/[0.06]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-line/10 bg-surface">
            <img
              src={portrait}
              alt="Portrait of Md Mizanur Rahman"
              className="h-full w-full object-cover object-[50%_25%]"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs text-fg backdrop-blur">
              <HiOutlineLocationMarker className="text-accent" /> Jamalpur, Bangladesh
            </span>
          </div>
          <div className="absolute -left-6 top-8 hidden rounded-2xl border border-line/10 bg-ink/85 px-4 py-3 shadow-2xl backdrop-blur sm:block">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Currently</p>
            <p className="mt-0.5 text-sm font-medium">Software Engineer @ Traideas</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container-x relative mt-16 sm:mt-20">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/[0.08] bg-line/[0.08] lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse bg-ink px-5 py-6 sm:px-6">
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold text-fg sm:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
