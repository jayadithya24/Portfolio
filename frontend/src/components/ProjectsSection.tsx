import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '@/lib/projects';

const intro = "Every project I build combines design elegance with functional precision. From immersive interfaces to scalable web solutions, my work reflects a balance of creativity, interactivity, and usability.";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:direction-rtl'}`}
    >
      <div className={`${isEven ? '' : 'md:order-2'}`}>
        <div className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} glass overflow-hidden group relative`}>
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                }}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 right-4 text-sm font-semibold px-3 py-1 rounded-full glass text-foreground/90">
                {String(index + 1).padStart(2, '0')}
              </span>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className={`${isEven ? '' : 'md:order-1'}`}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm font-mono text-primary mb-4">{project.tech}</p>
        <p className="text-foreground/70 mb-6 leading-relaxed">{project.desc}</p>
        <div className="flex items-center gap-4">
          <>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-400/80 via-indigo-500/70 to-purple-500/70 hover:scale-[1.01] transition-transform"
              >
                <span className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white bg-card/80 dark:bg-card/95">
                  Live Demo <ExternalLink size={14} />
                </span>
              </a>
            ) : (
              <span className="inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-400/40 via-indigo-400/30 to-purple-400/30 opacity-70">
                <span className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white/70 bg-card/60 cursor-not-allowed">
                  Live Demo <ExternalLink size={14} />
                </span>
              </span>
            )}

            <Link to={`/projects/${(project as any).slug || encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/8 bg-card/40 text-foreground font-medium hover:bg-card/70 transition-all duration-300 text-sm">
              Details
            </Link>
          </>

          
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at top left, hsl(var(--background) / 0.12) 0%, hsl(var(--card) / 0.06) 30%, transparent 60%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">{intro}</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <div key={project.title} className="rounded-2xl p-8 glass border border-white/6 hover:shadow-2xl transition-shadow duration-300">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
