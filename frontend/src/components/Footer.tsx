import { Linkedin, Github, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificate', path: '/certificate' },
  { label: 'Contact', path: '/contact' },
];
const socials = [
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Globe, href: '#' },
  { icon: Mail, href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Crafted with passion and code.
      </p>
    </footer>
  );
}
