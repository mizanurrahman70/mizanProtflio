import { profile } from "../data/portfolio";
import { socialLinks } from "./socialLinks";

const Footer = () => (
  <footer className="border-t border-line/[0.06]">
    <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-1">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="rounded-full p-2 transition-colors hover:text-accent"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
