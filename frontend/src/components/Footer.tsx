import { Linkedin, Github, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificate' },
  { label: 'Contact', path: '/contact' },
];
const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jayadithya-g-salian-9b7599336' },
  { icon: Github, href: 'https://github.com/jayadithya24' },
  { icon: Instagram, href: 'https://www.instagram.com/p_xx_20052244' },
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
              onClick={(e) => {
                // Attempt to open external link in a new tab; fallback to contact page if blocked or fails
                e.preventDefault();
                try {
                  const newWin = window.open(s.href, '_blank');
                  // If popup was blocked or couldn't open, fallback
                  if (!newWin) {
                    throw new Error('popup_blocked');
                  }
                } catch (err) {
                  // Fallback: navigate user to local contact page
                  // eslint-disable-next-line no-alert
                  alert('Unable to open external site from this environment. Opening contact page instead.');
                  window.location.href = '/contact';
                }
              }}
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
