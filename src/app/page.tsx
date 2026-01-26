'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

type SectionKey = 'home' | 'about' | 'services' | 'skills' | 'platforms' | 'portfolio' | 'contact';

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'en' | 'kh'>('en');
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState<SectionKey>('home');

  const sections: Record<SectionKey, React.RefObject<HTMLElement>> = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    skills: useRef(null),
    platforms: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / height) * 100);

      (Object.keys(sections) as SectionKey[]).forEach((key) => {
        const el = sections[key].current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) setActive(key);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'en' ? 'kh' : 'en');
  const scrollTo = (key: SectionKey) => sections[key].current?.scrollIntoView({ behavior: 'smooth' });

  const services = [
    { title: 'Full-Stack Engineering', description: 'Enterprise applications using Angular, .NET Core, Docker.', icon: '💻' },
    { title: 'SMM Panel Specialist', description: 'High-performance SMM platforms with KHQR & API automation.', icon: '🚀' },
    { title: 'Digital Controller', description: 'SEO, paid ads, and brand growth strategy.', icon: '📈' },
    { title: 'Creative Producer', description: 'High-engagement video & storytelling.', icon: '🎬' },
  ];

  const skills = [
    { name: 'Angular', level: 80 },
    { name: 'Next.js', level: 80 },
    { name: 'React', level: 80 },
    { name: '.NET Core', level: 80 },
    { name: 'REST API', level: 80 },
    { name: 'Docker', level: 80 },
    { name: 'DIGITAL MARKETING', level: 85 },
    { name: 'COMMUNICATIONS', level: 80 },
    { name: 'COPYWRITING / VIDEOSCRIPING', level: 90 },
    { name: 'VIDEO EDITING', level: 80 },
    { name: 'SEO', level: 90 },
    { name: 'Content Creator', level: 85 },
    { name: 'Facebook TikTok IG Google Ads', level: 85 },
    { name: 'DIGITAL SUPPORT', level: 90 },
    { name: 'IT SUPPORT', level: 85 },
  ];

  const platforms = [
    { name: 'SMM Panel System', desc: 'High-performance SMM panel with automation & payment integration.', icon: '⚙️' },
    { name: 'Digital Marketing Dashboard', desc: 'Campaign tracking, analytics & ROI control.', icon: '📊' },
    { name: 'Enterprise Web Apps', desc: 'Custom internal systems for business operations.', icon: '🏢' },
    { name: 'Payment Integration', desc: 'KHQR, ABA, API-based payment solutions.', icon: '💳' },
  ];

  const portfolio = [
    { name: 'Enterprise Dashboard', link: '#', desc: 'A full enterprise dashboard system with analytics.', icon: '📈' },
    { name: 'Marketing Platform', link: '#', desc: 'High performance marketing automation tool.', icon: '🚀' },
    { name: 'Video Content Hub', link: '#', desc: 'Creative video and storytelling platform.', icon: '🎬' },
  ];

  const socials = [
    { name: 'Github', link: 'https://github.com/khoem168', icon: <FaGithub /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/khoem168', icon: <FaLinkedin /> },
    { name: 'Facebook', link: 'https://facebook.com/heang.chhengkhoem.me', icon: <FaFacebook /> },
    { name: 'Instagram', link: 'https://instagram.com/khoem168', icon: <FaInstagram /> },
    { name: 'Twitter', link: 'https://x.com/khoem168', icon: <FaTwitter /> },
  ];

  if (!mounted) return null;

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-gray-500/10">
        <div className="h-[2px] bg-gold" style={{ width: `${scrollProgress}%` }} />
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold italic text-gold">HEANG CHHENG KHOEM</span>
          <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.35em]">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key as SectionKey)}
                className={`transition ${active === key ? 'text-gold' : 'opacity-50 hover:opacity-100'}`}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={toggleLang}
              className="text-[10px] font-black border px-3 py-1 rounded hover:bg-gold hover:text-black transition"
            >
              {lang === 'en' ? 'KH' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border hover:bg-gray-500/10 transition"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        ref={sections.home}
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="text-6xl md:text-[140px] font-serif italic text-gold">Heang Chheng Khoem</h1>
        <p className="mt-6 max-w-3xl opacity-60 italic">
          IT Support & Digital Marketing Controller | Full-Stack Developer
        </p>
        <div className="mt-8 flex gap-6 opacity-80">
          {socials.map((s) => (
            <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer" className="hover:text-gold text-2xl transition">
              {s.icon}
            </a>
          ))}
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section ref={sections.about} className="py-32" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <img src="/168.svg" loading="lazy" alt="Heang Chheng Khoem" className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition" />
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-xmas-red">About Me</h3>
            <p className="leading-relaxed">
              💼 Senior Engineer / Consultant | 🚀 Startup Founder | 🧠 Enterprise Architect | 📈 Digital Strategist...
            </p>
          </div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section ref={sections.services} className="py-32 bg-zinc-500/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} className="p-10 rounded-[35px] border hover:border-gold transition hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <div className="text-4xl mb-6">{s.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">{s.title}</h4>
              <p className="text-xs opacity-60 italic leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS, PLATFORMS, PORTFOLIO */}
      <motion.section ref={sections.skills} className="py-32" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-5xl font-serif italic text-gold mb-12 text-center">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs uppercase mb-1"><span>{s.name}</span><span>{s.level}%</span></div>
                <div className="h-2 w-full bg-gray-300 rounded-full">
                  <motion.div className="h-2 bg-gold rounded-full" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Platforms */}
      <motion.section ref={sections.platforms} className="py-32 bg-zinc-500/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <motion.div key={i} className="p-10 rounded-[35px] border hover:border-gold transition hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <div className="text-4xl mb-6">{p.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">{p.name}</h4>
              <p className="text-xs opacity-60 italic">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio */}
      <motion.section ref={sections.portfolio} className="py-32" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((p, i) => (
            <motion.a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="p-8 rounded-[35px] border hover:border-gold transition hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <div className="text-4xl mb-6">{p.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">{p.name}</h4>
              <p className="text-xs opacity-60 italic">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section ref={sections.contact} className="py-48 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <h3 className="text-6xl font-serif italic text-gold mb-12">Start a New Project</h3>
        <a href="mailto:heang.chhengkhoem.me@gmail.com" className="inline-block px-16 py-6 bg-foreground text-background rounded-full font-black tracking-[0.35em] text-[10px] hover:scale-105 transition">Email Me Directly</a>
      </motion.section>

      <footer className="py-20 text-center text-[9px] uppercase tracking-[0.7em] opacity-40">
        © 2026 Heang Chheng Khoem · Phnom Penh · Cambodia
      </footer>
    </main>
  );
};

export default App;
