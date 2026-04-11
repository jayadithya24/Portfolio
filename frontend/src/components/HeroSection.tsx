import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const title = 'UI/UX Designer & Frontend Developer';
const name = 'Jayadithya G Salian';
const description = 'Designing interfaces. Developing experiences. Delivering creative digital products.';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative isolate w-full h-screen overflow-hidden bg-background">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.14),transparent_45%),radial-gradient(circle_at_85%_75%,hsl(var(--primary)/0.18),transparent_40%)] pointer-events-none" />

      {/* Readability overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />

      {/* Text overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground/95 leading-tight max-w-4xl"
        >
          {title}
          <span className="block text-primary mt-3">{name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 animate-float"
        >
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-3 rounded-full glass gradient-border text-foreground font-medium hover:glow-primary transition-all duration-300"
          >
            Explore My Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
