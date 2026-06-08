import { Linkedin, Github, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificate', path: '/certificate' },
  { label: 'Contact', path: '/contact' },
];
const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jayadithya-g-salian-9b7599336' },
  { icon: Github, href: 'https://github.com/jayadithya24' },
  { icon: Mail, href: 'mailto:jayadithyagsalian@gmail.com' },
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
          <a
            href="mailto:jayadithyagsalian@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ml-2"
            aria-label="Email"
          >
            Email
          </a>
        </div>
        <div className="flex gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              onClick={async (e) => {
                if (s.href.startsWith('mailto:')) {
                  e.preventDefault();
                  try {
                    // Try opening mailto in a new tab/window — works in many browsers when default handler is configured
                    window.open(s.href, '_blank');
                    console.log('Footer: opened mailto in new tab', s.href);
                    return;
                  } catch (err) {
                    console.warn('Footer: window.open mailto failed', err);
                  }

                  // Fallback: copy email to clipboard and inform user
                  try {
                    const email = s.href.replace(/^mailto:/, '');
                    await navigator.clipboard.writeText(email);
                    // eslint-disable-next-line no-alert
                    alert(`Email address copied to clipboard: ${email}`);
                    console.log('Footer: copied email to clipboard', email);
                    return;
                  } catch (err) {
                    console.error('Footer: failed fallback for mailto', err);
                  }
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
