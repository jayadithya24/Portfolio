import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, ExternalLink, Github, ArrowLeft } from 'lucide-react';
import projects from '@/lib/projects';
import { useTheme } from '@/hooks/useTheme';

export default function ProjectDetailPage() {
  const { isDark, toggle } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header isDark={isDark} onToggleTheme={toggle} />
        <main className="pt-24 p-6">
          <div className="max-w-4xl mx-auto text-center py-40">
            <h2 className="text-2xl font-bold">Project not found</h2>
            <p className="mt-4">We couldn't find the requested project.</p>
            <Link to="/projects" className="mt-6 inline-block text-primary underline">Back to projects</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0710] via-[#12071a] to-[#06020b] text-foreground">
      <Header isDark={isDark} onToggleTheme={toggle} />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link to="/projects" className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-card/30 border border-white/6 text-sm font-medium text-foreground/90 hover:shadow-lg hover:-translate-y-0.5 transform transition-all">
              <ArrowLeft size={16} className="text-cyan-400" />
              <span className="select-none">Back</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text">{project.title}</h1>
              <p className="text-primary mb-6">{project.tech}</p>
              <p className="text-foreground/80 mb-8 leading-relaxed">{project.longDesc || project.desc}</p>

              {project.features && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-6">Key Features</h3>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                    {project.features.map((feat, idx) => {
                      const title = typeof feat === 'string' ? feat : feat.title;
                      const desc = typeof feat === 'string' ? '' : feat.desc;
                      return (
                        <div key={`${title}-${idx}`} className="flex items-start gap-4 bg-card/40 border border-white/6 rounded-2xl p-4 min-w-[260px]">
                          <div className="flex-none w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-md">
                            <Zap size={18} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">{title}</div>
                            {desc ? <div className="text-sm text-foreground/70">{desc}</div> : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-400/80 via-indigo-500/70 to-purple-500/70 hover:scale-[1.01] transition-transform">
                    <span className="flex items-center gap-2 bg-[#0b0710] dark:bg-[#0b0710] rounded-full px-5 py-3 text-sm font-semibold text-white">
                      Live Demo <ExternalLink size={16} />
                    </span>
                  </a>
                ) : (
                  <span className="inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-400/40 via-indigo-400/30 to-purple-400/30 opacity-70">
                    <span className="flex items-center gap-2 bg-[#0b0710] dark:bg-[#0b0710] rounded-full px-5 py-3 text-sm font-semibold text-white/70 cursor-not-allowed">
                      Live Demo <ExternalLink size={16} />
                    </span>
                  </span>
                )}

                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/8 text-foreground" aria-label={`Open ${project.title} on GitHub`}>
                    <Github size={16} /> Github
                  </a>
                ) : (
                  <a href={`mailto:jayadithyagsalian@gmail.com?subject=Repo%20request%20for%20${encodeURIComponent(project.title)}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/8 text-foreground/80" aria-label="Request repository via email">
                    <Github size={16} /> Request repo
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f1220] to-[#161026] p-3 sm:p-4 md:p-6 border border-white/6">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:min-h-[420px] md:max-h-[68vh]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain md:object-cover rounded-xl shadow-lg bg-[#0b0710]"
                    />
                  ) : (
                    <div className="absolute inset-0 rounded-xl bg-card/40" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
