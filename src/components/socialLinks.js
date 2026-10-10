import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/portfolio";

export const socialLinks = [
  { href: profile.socials.github, label: "GitHub", Icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: profile.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: profile.socials.x, label: "X", Icon: FaXTwitter },
];
