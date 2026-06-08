import { motion } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type HeaderProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificate', path: '/certificate' },
  { label: 'Contact', path: '/contact' },
];

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-xl font-bold gradient-text">
          Portfolio
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full glass hover:glow-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} className="text-primary" /> : <Moon size={18} className="text-primary" />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full glass hover:glow-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} className="text-primary" /> : <Moon size={18} className="text-primary" />}
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass hover:glow-primary transition-all duration-300"
                aria-label="Open navigation menu"
              >
                <Menu size={20} className="text-primary" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[82vw] border-border/70 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="text-left">
                <SheetTitle className="gradient-text text-2xl">Navigation</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-2xl border px-4 py-4 text-base font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border/70 bg-card/40 text-foreground hover:bg-card/70 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
