import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, Maximize2 } from 'lucide-react';

type CertificateItem = {
  title: string;
  category: string;
  issuer: string;
  year: string;
  gradient: string;
  image?: string;
};

const certificateItems: CertificateItem[] = [
  {
  title: 'Artificial Intelligence Primer Certification',
  category: 'Artificial Intelligence',
  issuer: 'Infosys Springboard',
  year: '2026',
  image: '/certificates/SE_JAY.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
},
  {
     title: 'TechA Build and Deploy Projects Certification',
  category: 'DevOps & Project Deployment',
  issuer: 'Infosys Springboard',
  year: '2026',
     image: '/certificates/AIML_JAY.jpeg',
    gradient: 'from-secondary/30 to-accent/20',
  },
  {
     title: 'Fundamentals of Cryptography',
  category: 'Cybersecurity & Cryptography',
  issuer: 'Infosys Springboard',
  year: '2026',
  image: '/certificates/crypto.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
  {
     title: 'Cyber Security Foundation Certification',
  category: 'Cybersecurity Fundamentals',
  issuer: 'Infosys Springboard',
  year: '2026',
  image: '/certificates/cyber.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
  {
    title: 'AINNOVATION 2025: Microsoft Azure Learning Challenge',
  category: 'Cloud Computing & Microsoft Azure',
  issuer: 'Microsoft',
  year: '2025',
  image: '/certificates/azure.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
  {
    title: 'AINNOVATION 2025: Applied AI Learning Challenge',
  category: 'Artificial Intelligence & Machine Learning',
  issuer: 'Microsoft',
  year: '2025',
  image: '/certificates/applied_ai.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
  {
     title: 'AINNOVATION 2025: Microsoft AI Learning Challenge',
  category: 'Artificial Intelligence & Microsoft AI',
  issuer: 'Microsoft',
  year: '2025',
  image: '/certificates/microsoft_ai.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
  {
     title: 'Linux for Cloud & DevOps Engineers',
  category: 'Linux, Cloud & DevOps',
  issuer: 'Udemy',
  year: '2025',
  image: '/certificates/linux.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
   {
     title: 'Basics of Python',
  category: 'Python Programming',
  issuer: 'Infosys Springboard',
  year: '2025',
  image: '/certificates/python.jpeg',
  gradient: 'from-primary/30 to-secondary/20',
  },
];

export default function CertificateSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = selected !== null ? certificateItems[selected] : null;

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
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/50" />
                  </>
                ) : null}
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
              className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`w-full max-w-5xl max-h-[90vh] rounded-2xl bg-gradient-to-br ${selectedItem?.gradient ?? ''} glass glow-primary relative overflow-hidden`}
                onClick={e => e.stopPropagation()}
              >
                {selectedItem?.image ? (
                  <div className="flex max-h-[90vh] flex-col">
                    <div className="flex flex-1 items-center justify-center bg-black/70 p-3 md:p-6">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="max-h-[74vh] w-auto max-w-full object-contain"
                      />
                    </div>

                    <div className="border-t border-white/10 bg-background/90 px-5 py-4 text-center md:px-8">
                      <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                        Certificate {String(selected + 1).padStart(2, '0')}
                      </span>
                      <p className="mt-2 text-lg font-bold text-foreground md:text-xl">{selectedItem.title}</p>
                      <p className="text-sm text-muted-foreground md:text-base">{selectedItem.category}</p>
                      <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                        {selectedItem.issuer} • {selectedItem.year}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center px-6 py-20 text-center">
                    <div>
                      <span className="text-7xl font-bold gradient-text opacity-30 mb-4 block">
                        {String(selected + 1).padStart(2, '0')}
                      </span>
                      <p className="text-xl font-bold text-foreground">{selectedItem?.title}</p>
                      <p className="text-muted-foreground">{selectedItem?.category}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {selectedItem?.issuer} • {selectedItem?.year}
                      </p>
                    </div>
                  </div>
                )}
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
