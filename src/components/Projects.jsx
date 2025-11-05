const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful 3D hero built with Spline and React for a startup launch page.',
    tags: ['React', 'Spline', 'Tailwind'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Realtime Chat App',
    description: 'Messaging with live presence, reactions, and delightful micro-interactions.',
    tags: ['React', 'WebSocket', 'Framer Motion'],
    demo: '#',
    code: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Analytics, order management, and product tooling with a clean UI.',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
    demo: '#',
    code: '#',
  },
];

function ProjectCard({ title, description, tags, demo, code }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="mb-3 h-36 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-300 text-sm">
        {/* Visual placeholder block */}
        Preview
      </div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-white/70 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a href={demo} className="text-sm text-cyan-300 hover:text-cyan-200">Live Demo</a>
        <span className="text-white/20">•</span>
        <a href={code} className="text-sm text-purple-300 hover:text-purple-200">Source</a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-500/10 to-transparent blur-2xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
            <p className="text-white/70 text-sm mt-1">A few things I’ve been building recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-white/70 hover:text-white">Open to work →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
