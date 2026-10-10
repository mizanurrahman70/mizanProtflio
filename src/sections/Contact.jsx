import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";
import { socialLinks } from "../components/socialLinks";

const inputClass =
  "w-full rounded-xl border border-line/10 bg-ink/60 px-4 py-3 text-fg placeholder:text-muted/60 transition focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/[0.06] py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="text-muted">06 /</span> Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something <span className="text-accent">real</span>.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            I&apos;m open to frontend and full-stack roles, remote or on-site. If you have a product
            that needs an owner, I&apos;d like to hear about it.
          </p>

          <ul className="mt-10 space-y-3">
            <li className="flex items-center gap-3">
              <a href={`mailto:${profile.email}`} className="group inline-flex min-w-0 items-center gap-3 text-fg hover:text-accent">
                <HiOutlineMail className="shrink-0 text-xl text-accent" />
                <span className="truncate">{profile.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="rounded-lg p-1.5 text-muted transition hover:bg-surface hover:text-fg"
              >
                {copied ? <HiCheck className="text-accent" /> : <HiOutlineClipboardCopy />}
              </button>
            </li>
            <li>
              <a href={profile.phoneHref} className="inline-flex items-center gap-3 text-fg hover:text-accent">
                <HiOutlinePhone className="text-xl text-accent" /> {profile.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted">
              <HiOutlineLocationMarker className="text-xl text-accent" /> {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2">
                <Icon /> {label} <HiArrowUpRight className="text-xs opacity-60" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="card space-y-4 p-6 backdrop-blur sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">Name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={inputClass} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} className={`${inputClass} resize-none`} placeholder="Tell me about the role or project…" />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send message <HiArrowUpRight />
            </button>
            <p className="text-center text-xs text-muted">Opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
