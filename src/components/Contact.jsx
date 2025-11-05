import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something together</h2>
          <p className="text-white/70 mt-2 max-w-2xl">
            I’m currently available for freelance work and interesting collaborations. Drop a line and I’ll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
              <Mail size={16} /> hello@example.com
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-4 py-2 text-sm hover:border-white/40">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-4 py-2 text-sm hover:border-white/40">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-white/50 text-sm flex items-center justify-between">
            <span>© {new Date().getFullYear()} Your Name</span>
            <a href="#home" className="hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
}
