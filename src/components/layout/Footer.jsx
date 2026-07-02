import { personal, social } from "../../data/portfolio";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socialIcons = [
  { icon: FaGithub, href: social.github, label: "GitHub" },
  { icon: FaLinkedin, href: social.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: social.instagram, label: "Instagram" },
  { icon: FaTwitter, href: social.twitter, label: "Twitter" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal dark:bg-charcoal-dark py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="font-playfair text-xl text-ivory font-bold">{personal.name}</p>
          <p className="font-inter text-sm text-taupe-400 mt-1">{personal.profession}</p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-taupe-400 hover:text-gold-light transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-inter text-xs text-taupe-500 text-center md:text-right">
          © {year} {personal.name}. Crafted with care.
        </p>
      </div>
    </footer>
  );
}
