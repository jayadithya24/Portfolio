import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Globe,
  GraduationCap,
  LayoutGrid,
  ListChecks,
  MessageSquareText,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';

const intro =
  "I design and build thoughtful digital experiences with a focus on usability, motion, and visual clarity. I enjoy turning ideas into polished interfaces and shipping work that feels modern, purposeful, and reliable.";

const stats = [
  { icon: BriefcaseBusiness, label: 'Projects', value: '08', subtext: 'Total projects', detail: 'Innovative web solutions crafted' },
  { icon: Award, label: 'Certifications', value: '12', subtext: 'Certificates', detail: 'Professional skills validated' },
  { icon: GraduationCap, label: 'Academic Year', value: '2023-27', subtext: '3rd year student', detail: 'Continuous learning journey' },
];

const skillGroups = [
  { title: 'Programming Languages', chips: ['Java', 'Python', 'JavaScript'] },
  { title: 'Frameworks & Libraries', chips: ['NodeJS', 'ExpressJS', 'ReactJS', 'PostgreSQL', 'TailwindCSS', 'MongoDB', 'FastAPI', 'Flask'] },
  { title: 'Tools & Platforms', chips: ['PostmanAPI', 'Git', 'GitHub', 'Vercel'] },
  { title: 'Soft Skills', chips: ['Leadership', 'Problem-Solving', 'Teamwork', 'Communication', 'Time Management'] },
];

const experience = [
    
  {
    company: 'Member',
    role: 'ISDC (Information Science Developer Community)',
    period: 'March 2025 - Present',
    description:
      'Leading workshops, mentoring developers, and coordinating community-driven initiatives across student teams and events.',
  },
];

const statHighlights = [
  { icon: Code2, text: 'Frontend systems' },
  { icon: LayoutGrid, text: 'Design systems' },
  { icon: Rocket, text: 'Fast execution' },
  { icon: Trophy, text: 'Outcome focused' },
];

// Set your image path here. Examples:
// 'profile.jpg' (from public folder), 'projects/my-pic.jpeg', or 'https://...'
const aboutImagePath = 'projects/profile.jpeg';

const toImageUrl = (inputPath: string) => {
  const trimmed = inputPath.trim();
  if (!trimmed) return '';

  const isAbsolute = /^https?:\/\//i.test(trimmed);
  if (isAbsolute) return trimmed;

  return `${import.meta.env.BASE_URL}${trimmed.replace(/^\/+/, '')}`;
};

const profileImageUrl = toImageUrl(aboutImagePath);

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.14),transparent_28%),radial-gradient(circle_at_80%_10%,hsl(var(--secondary)/0.16),transparent_24%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))]"
    >
      <div className="absolute inset-0 opacity-35 pointer-events-none [background-image:linear-gradient(hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.18)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(180deg,transparent,black_8%,black_92%,transparent)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center mb-16">
          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-3xl md:text-5xl font-semibold leading-tight text-foreground/95">Hello, I&apos;m <span className="text-primary">Jayadithya G Salian</span></p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {statHighlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className="glass rounded-2xl p-4 flex flex-col items-center text-center gap-2"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Resume
                <Globe size={18} />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3 font-medium text-foreground transition-colors duration-300 hover:bg-card/70"
              >
                View Projects
                <Code2 size={18} />
              </a>
            </div>
          </motion.div>

          {/* Portrait / profile circle */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.32),transparent_65%)] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border border-border/70 bg-card/50 shadow-[0_0_0_1px_hsl(var(--primary)/0.18),0_0_80px_hsl(var(--primary)/0.14)]">
                {!imageFailed ? (
                  <img
                    src={profileImageUrl}
                    alt="Jayadithya profile"
                    onError={() => setImageFailed(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,hsl(var(--primary)/0.55),transparent_35%),radial-gradient(circle_at_75%_75%,hsl(var(--accent)/0.24),transparent_42%),linear-gradient(145deg,hsl(var(--card)),hsl(var(--background)))]" />
                    <div className="absolute inset-[10%] rounded-full border border-white/5" />
                    <div className="absolute inset-[18%] rounded-full border border-white/5" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-6xl md:text-7xl font-bold gradient-text">JGS</span>
                      <span className="mt-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">Jayadithya</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
              className="glass rounded-3xl p-6 md:p-7 min-h-[220px] flex flex-col justify-between group hover:-translate-y-1 hover:glow-primary transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-10">
                <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center text-foreground/90">
                  <stat.icon size={28} />
                </div>
                <span className="text-5xl font-semibold gradient-text">{stat.value}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">{stat.subtext}</p>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center text-3xl md:text-5xl font-bold gradient-text mb-16"
          >
            Technical Skills
          </motion.h3>

          <div className="space-y-10">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 + groupIndex * 0.1 }}
              >
                <h4 className="text-2xl md:text-3xl font-semibold text-primary mb-6">{group.title}</h4>
                <div className="flex flex-wrap gap-4">
                  {group.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/8 bg-white/6 px-5 py-3 text-sm md:text-base font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-center text-3xl md:text-5xl font-bold gradient-text mb-16"
          >
            Experience
          </motion.h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.12 }}
                className="glass rounded-3xl p-8 md:p-10 border border-white/6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-semibold text-foreground">{item.company}</h4>
                    <p className="mt-3 text-lg text-primary">{item.role}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                    <MessageSquareText size={16} />
                    {item.period}
                  </span>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
