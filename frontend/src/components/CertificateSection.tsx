import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, Maximize2 } from 'lucide-react';

const certificateItems = [
  { title: 'Frontend Development Certification', category: 'React & TypeScript', gradient: 'from-primary/30 to-secondary/20' },
  { title: 'UI/UX Design Certification', category: 'Figma & Prototyping', gradient: 'from-secondary/30 to-accent/20' },
  { title: 'Backend Development Certification', category: 'NodeJS & APIs', gradient: 'from-accent/30 to-primary/20' },
  { title: 'Database Management Certification', category: 'SQL & NoSQL', gradient: 'from-primary/20 to-accent/30' },
  { title: 'Cloud Fundamentals Certification', category: 'Deployment & DevOps', gradient: 'from-secondary/20 to-primary/30' },
  { title: 'Problem Solving Certification', category: 'DSA & Algorithms', gradient: 'from-accent/20 to-secondary/30' },
];

export default function CertificateSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificate" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.gradient} glass overflow-hidden relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold gradient-text opacity-20">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                  <Maximize2 className="text-primary" size={24} />
                  <p className="font-semibold text-foreground text-center px-3">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-8"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br ${certificateItems[selected].gradient} glass glow-primary relative`}
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <span className="text-7xl font-bold gradient-text opacity-30 mb-4">
                    {String(selected + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xl font-bold text-foreground">{certificateItems[selected].title}</p>
                  <p className="text-muted-foreground">{certificateItems[selected].category}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass hover:glow-primary transition-all"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
