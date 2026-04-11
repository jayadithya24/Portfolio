import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Chen', role: 'Product Manager', review: 'Exceptional attention to detail and creative problem-solving. The final product exceeded all our expectations with its polished UI and smooth interactions.' },
  { name: 'James Miller', role: 'Startup Founder', review: 'Transformed our vision into a stunning, functional web app. Their ability to blend aesthetics with usability is remarkable.' },
  { name: 'Priya Sharma', role: 'Design Lead', review: 'A rare talent who understands both design and development deeply. The collaboration was seamless and the results speak for themselves.' },
  { name: 'Alex Rivera', role: 'CTO', review: 'Delivered a complex dashboard with beautiful data visualizations ahead of schedule. Highly skilled and professional throughout.' },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  const next = () => setActive(i => (i + 1) % testimonials.length);
  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 md:p-12 text-center glow-primary"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">
                  {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                "{testimonials[active].review}"
              </p>
              <p className="font-semibold text-foreground">{testimonials[active].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full glass hover:glow-primary transition-all">
              <ChevronLeft size={20} className="text-primary" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full glass hover:glow-primary transition-all">
              <ChevronRight size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
