import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin, Github, Instagram, Send } from 'lucide-react';

const CONTACT_EMAIL = 'jayadithyagsalian@gmail.com';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jayadithya-g-salian-9b7599336' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/jayadithya24' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/p_xx_20052244' },
];

const heading = "Let's collaborate and bring your ideas to life. Whether it's designing a seamless interface or building an interactive web experience, I'm always excited to connect.";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [clicked, setClicked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailIsValid) {
      setError('Please enter a valid email address.');
      return;
    }

      try {
        setIsSubmitting(true);

        // Build mailto link to open user's email client with prefilled subject and body
        const subject = `Message from ${formData.name || 'Portfolio Visitor'}`;
        const bodyLines = [
          `Name: ${formData.name}`,
          `Email: ${formData.email}`,
          '',
          `${formData.message}`,
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Try opening mail client
        try {
          const opened = window.open(mailto, '_self');
          if (opened === null) {
            // fallback to assigning location
            window.location.href = mailto;
          }
        } catch (err) {
          // final fallback
          window.location.href = mailto;
        }

        setClicked(true);
        setTimeout(() => setClicked(false), 600);
        setSuccessMessage('Your email client should open shortly.');
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to open email client right now.');
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-foreground/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          {heading}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Connect With Me</h3>
            <div className="flex gap-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="w-14 h-14 rounded-xl glass flex items-center justify-center group hover:glow-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label={s.label}
                >
                  <s.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            {['Name', 'Email'].map((field, i) => (
              <motion.input
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                type={field === 'Email' ? 'email' : 'text'}
                placeholder={field}
                value={field === 'Email' ? formData.email : formData.name}
                onChange={(e) => {
                  setFormData((prev) =>
                    field === 'Email'
                      ? { ...prev, email: e.target.value }
                      : { ...prev, name: e.target.value }
                  );
                }}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            ))}
            <motion.textarea
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              required
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            {successMessage && <p className="text-sm text-primary">{successMessage}</p>}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              animate={clicked ? { scale: [1, 0.95, 1.05, 1] } : {}}
              transition={{ duration: 0.4 }}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:glow-primary transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
