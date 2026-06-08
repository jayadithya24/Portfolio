import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

const projectImage = (fileName: string) => `${import.meta.env.BASE_URL}projects/${fileName}`;

const projects = [
  {
    title: 'Hostelops FullStack',
    tech: 'React • Tailwind • Supabase',
    desc: 'A fully responsive online shopping experience with real-time inventory, cart management, and seamless checkout flow.',
    color: 'from-primary/20 to-secondary/20',
    url: 'https://hostelops-fullstack.vercel.app',
    image: projectImage('hostelops2.jpg'),
  },
  {
    title: 'PhishGuard AI',
    tech: 'React • TypeScript • Recharts',
    desc: 'An interactive data visualization dashboard with real-time metrics, custom charts, and filterable KPI panels.',
    color: 'from-secondary/20 to-accent/20',
    url: 'https://phishguard-omega.vercel.app',
    image: projectImage('phisgaurd.jpeg'),
  },
  {
    title: 'Thumbnail Generator',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://thumbnail-project-beta.vercel.app',
    image: projectImage('thumbnail.jpeg'),
  },
  {
    title: 'Pizza Delivery Website',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://pizza-hut-frontend.netlify.app',
    image: projectImage('pizza.jpeg'),
  },
  {
    title: 'Hoops Basketball Store',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://hoops-basketball-store.vercel.app',
    image: projectImage('basketball.jpeg'),
  },
  {
    title: 'Digital Marketing Website',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://digital-marketing-ashen.vercel.app/',
    image: projectImage('digital.jpeg'),
  },
];

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
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass gradient-border text-foreground font-medium hover:glow-primary transition-all duration-300 text-sm"
        >
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding">
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

        <div className="space-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
