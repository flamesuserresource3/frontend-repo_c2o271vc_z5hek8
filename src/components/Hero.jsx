import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/10 to-zinc-900/90" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-24 flex flex-col items-start gap-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">Your Name</span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl">
          I build modern, interactive web experiences. This portfolio blends technology and playfulness — explore selected projects below and feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded-md border border-white/20 text-white px-4 py-2 text-sm font-medium hover:border-white/40 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
