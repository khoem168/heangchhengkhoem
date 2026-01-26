'use client';
import React, { useRef, useState, useEffect } from 'react';
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

  // === INIT THEME ===
  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // === SCROLL TRACKING ===
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

  // === DATA ===
  const services = [
    {
      title: lang === 'en' ? 'Full-Stack Engineering' : 'វិស្វកម្ម Full-Stack',
      description:
        lang === 'en'
          ? 'Enterprise applications using Angular, .NET Core, Docker.'
          : 'កម្មវិធីសហគ្រាសដោយ Angular, .NET Core និង Docker។',
      icon: '💻',
    },
    {
      title: lang === 'en' ? 'SMM Panel Specialist' : 'អ្នកជំនាញ SMM',
      description:
        lang === 'en'
          ? 'High-performance SMM platforms with KHQR & API automation.'
          : 'ប្រព័ន្ធ SMM ជាមួយ KHQR និង API ស្វ័យប្រវត្តិ។',
      icon: '🚀',
    },
    {
      title: lang === 'en' ? 'Digital Controller' : 'អ្នកគ្រប់គ្រងឌីជីថល',
      description:
        lang === 'en'
          ? 'SEO, paid ads, and brand growth strategy.'
          : 'យុទ្ធសាស្ត្រ SEO និង Ads សម្រាប់ការលូតលាស់ម៉ាក។',
      icon: '📈',
    },
    {
      title: lang === 'en' ? 'Creative Producer' : 'អ្នកផលិតមាតិកា',
      description:
        lang === 'en'
          ? 'High-engagement video & storytelling.'
          : 'មាតិកាវីដេអូ និងការនិទានជំនាញ។',
      icon: '🎬',
    },
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
    { name: 'COPYWRITING / VIDEOSCRIPING ', level: 90 },
    { name: 'VIDEO EDITING', level: 80 },
    { name: 'SEO', level: 90 },
    { name: 'Content Creator', level: 85 },
    { name: 'Facebook TikTok IG Google Ads', level: 85 },
    { name: 'DIGITAL SUPPORT', level: 90 },
    { name: 'IT SUPPORT', level: 85 },
  ];

  const platforms = [
    {
      name: 'SMM Panel System',
      desc:
        lang === 'en'
          ? 'High-performance SMM panel with automation & payment integration.'
          : 'ប្រព័ន្ធ SMM ជាមួយការទូទាត់ និងស្វ័យប្រវត្តិ។',
      icon: '⚙️',
    },
    {
      name: 'Digital Marketing Dashboard',
      desc:
        lang === 'en'
          ? 'Campaign tracking, analytics & ROI control.'
          : 'គ្រប់គ្រងយុទ្ធសាស្ត្រ និងវិភាគទិន្នន័យ។',
      icon: '📊',
    },
    {
      name: 'Enterprise Web Apps',
      desc:
        lang === 'en'
          ? 'Custom internal systems for business operations.'
          : 'ប្រព័ន្ធផ្ទៃក្នុងសម្រាប់អាជីវកម្ម។',
      icon: '🏢',
    },
    {
      name: 'Payment Integration',
      desc:
        lang === 'en'
          ? 'KHQR, ABA, API-based payment solutions.'
          : 'ប្រព័ន្ធទូទាត់ KHQR និង ABA។',
      icon: '💳',
    },
  ];

  const portfolio = [
    {
      name: 'Enterprise Dashboard',
      link: '#',
      desc: 'A full enterprise dashboard system with analytics.',
      icon: '📈',
    },
    {
      name: 'Marketing Platform',
      link: '#',
      desc: 'High performance marketing automation tool.',
      icon: '🚀',
    },
    {
      name: 'Video Content Hub',
      link: '#',
      desc: 'Creative video and storytelling platform.',
      icon: '🎬',
    },
  ];

  const socials = [
    { name: 'Github', link: 'https://github.com/khoem168', icon: <FaGithub /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/khoem168', icon: <FaLinkedin /> },
    { name: 'Facebook', link: 'https://facebook.com/heang.chhengkhoem.me', icon: <FaFacebook /> },
    { name: 'Instagram', link: 'https://instagram.com/khoem168', icon: <FaInstagram /> },
    { name: 'Twitter', link: 'https://x.com/khoem168', icon: <FaTwitter /> },
  ];

  const t = {
    en: {
      heroTitle: 'Heang Chheng Khoem',
      heroSub: 'IT Support & Digital Marketing Controller | Full-Stack Developer',
      aboutHeader: 'About Me',
      aboutText:
        '💼 Senior Engineer / Consultant | 🚀 Startup Founder | 🧠 Enterprise Architect | 📈 Digital Strategist. I design and build scalable digital solutions that help businesses grow.',
      emailCta: 'Email Me Directly',
    },
    kh: {
      heroTitle: 'ហ៊ាង ឆេង ខឹម',
      heroSub: 'អ្នកជំនាញ IT Support និង Digital Marketing | វិស្វករកម្មវិធី',
      aboutHeader: 'អំពីខ្ញុំ',
      aboutText:
        '💼 វិស្វករជាន់ខ្ពស់ / អ្នកប្រឹក្សា | 🚀 អ្នកចាប់ផ្តើម Startup | 🧠 អ្នកស្ថាបត្យកម្មឌីជីថល | 📈 អ្នកវិភាគ និងយុទ្ធសាស្ត្រឌីជីថល។',
      emailCta: 'ផ្ញើអ៊ីមែលមកខ្ញុំ',
    },
  }[lang];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* ===== NAV ===== */}
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

      {/* ===== HERO ===== */}
      <section
        ref={sections.home}
        className="h-screen flex flex-col justify-center items-center text-center px-6 transition-all duration-700"
      >
        <h1 className="text-6xl md:text-[140px] font-serif italic text-gold">{t.heroTitle}</h1>
        <p className="mt-6 max-w-3xl opacity-60 italic">{t.heroSub}</p>
        <div className="mt-8 flex gap-6 opacity-80">
          {socials.map((s) => (
            <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer" className="hover:text-gold text-2xl transition">
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section ref={sections.about} className="py-32 transition-all duration-700">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <img
            src="/168.svg"
            loading="lazy"
            alt="Heang Chheng Khoem"
            className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition"
          />
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-xmas-red">{t.aboutHeader}</h3>
            <p className="leading-relaxed">{t.aboutText}</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section ref={sections.services} className="py-32 bg-zinc-500/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-10 rounded-[35px] border hover:border-gold transition hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">{s.title}</h4>
              <p className="text-xs opacity-60 italic leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section ref={sections.skills} className="py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-5xl font-serif italic text-gold mb-12 text-center">
            {lang === 'en' ? 'Technical Skills' : 'ជំនាញបច្ចេកទេស'}
          </h3>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-xs uppercase mb-1">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-300 rounded-full">
                  <div
                    className="h-2 bg-gold rounded-full transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS ===== */}
      <section ref={sections.platforms} className="py-32 bg-zinc-500/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <div
              key={i}
              className="p-10 rounded-[35px] border hover:border-gold transition hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]"
            >
              <div className="text-4xl mb-6">{p.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">{p.name}</h4>
              <p className="text-xs opacity-60 italic">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section ref={sections.portfolio} className="py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-[35px] border hover:border-gold transition hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] block"
            >
              <div className="text-4xl mb-6">{p.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">{p.name}</h4>
              <p className="text-xs opacity-60 italic">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section ref={sections.contact} className="py-48 text-center">
        <h3 className="text-6xl font-serif italic text-gold mb-12">
          {lang === 'en' ? 'Start a New Project' : 'ចាប់ផ្តើមគម្រោងថ្មី'}
        </h3>
        <a
          href="mailto:heang.chhengkhoem.me@gmail.com"
          className="inline-block px-16 py-6 bg-foreground text-background rounded-full font-black tracking-[0.35em] text-[10px] hover:scale-105 transition"
        >
          {t.emailCta}
        </a>
      </section>

      <footer className="py-20 text-center text-[9px] uppercase tracking-[0.7em] opacity-40">
        © 2026 Heang Chheng Khoem · Phnom Penh · Cambodia
      </footer>
    </main>
  );
};

export default App;
