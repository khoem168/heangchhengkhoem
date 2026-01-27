'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ==========================================================
   THE ULTIMATE 2026 PROFESSIONAL MASTERPIECE: HEANG CHHENG KHOEM
   ========================================================== */

type SectionKey = 'home' | 'about' | 'services' | 'skills' | 'platforms' | 'portfolio' | 'contact';

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'en' | 'kh'>('en');
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState<SectionKey>('home');

  const sections: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    skills: useRef(null),
    platforms: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  /* ================= ICONS (Built-in SVG to fix Vercel Module Errors) ================= */
  const CustomIcons = {
    Github: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    Facebook: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>,
    External: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
  };

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / height) * 100);

      Object.entries(sections).forEach(([key, ref]) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) setActive(key as SectionKey);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'kh' : 'en');
  const scrollTo = (key: SectionKey) => sections[key].current?.scrollIntoView({ behavior: 'smooth' });

  /* ================= CONTENT DATA ================= */
  const servicesData = [
    { title: lang === 'en' ? 'Full-Stack Engineering' : 'វិស្វកម្ម Full-Stack', desc: lang === 'en' ? 'Enterprise applications using Angular, .NET Core, Docker.' : 'កម្មវិធីសហគ្រាសដោយ Angular, .NET Core និង Docker។', icon: '💻' },
    { title: lang === 'en' ? 'Fintech Integration' : 'បច្ចេកវិទ្យាហិរញ្ញវត្ថុ', desc: lang === 'en' ? 'Specialized KHQR and Bakong automated payment systems.' : 'ប្រព័ន្ធទូទាត់ KHQR និង Bakong ស្វ័យប្រវត្តិ។', icon: '💳' },
    { title: lang === 'en' ? 'Digital Controller' : 'អ្នកគ្រប់គ្រងឌីជីថល', desc: lang === 'en' ? 'Technical SEO, Meta/TikTok ad-boosting & brand growth.' : 'យុទ្ធសាស្ត្រ SEO និង Ads សម្រាប់ការលូតលាស់ម៉ាក។', icon: '📈' },
    { title: lang === 'en' ? 'Creative Producer' : 'អ្នកផលិតមាតិកា', desc: lang === 'en' ? 'High-engagement movie recaps with professional narration.' : 'មាតិកាវីដេអូ និងការនិទានជំនាញ។', icon: '🎬' },
  ];

  const skillGroups = [
    { 
      title: lang === 'en' ? "Engineering Stack" : "ជំនាញបច្ចេកទេស", 
      items: [
        { name: 'Angular / React / Next.js', level: 85 },
        { name: '.NET Core / REST API', level: 80 },
        { name: 'Oracle SQL / Docker', level: 80 }
      ] 
    },
    { 
      title: lang === 'en' ? "Growth Strategy" : "យុទ្ធសាស្ត្ររីកចម្រើន", 
      items: [
        { name: 'SEO Audit & Mastery', level: 90 },
        { name: 'Facebook & TikTok Ads', level: 85 },
        { name: 'SMM Architecture', level: 90 }
      ] 
    }
  ];

  const platformsData = [
    { name: 'SMM Panel V2.6', icon: '⚙️', desc: lang === 'en' ? 'Automated social media distribution engine.' : 'ម៉ាស៊ីនចែកចាយបណ្តាញសង្គមស្វ័យប្រវត្តិ។' },
    { name: 'Bakong Gateway', icon: '🏦', desc: lang === 'en' ? 'Middleware for seamless KHQR processing.' : 'តក្កវិជ្ជានៃការទូទាត់ប្រាក់បាគង។' },
    { name: 'SEO Dashboard', icon: '📊', desc: lang === 'en' ? 'Live branch-level analytics and ROI tracking.' : 'ផ្ទាំងគ្រប់គ្រងការវិភាគ ROI។' },
    { name: 'Recap Hub', icon: '🎬', desc: lang === 'en' ? 'Multimedia storytelling platform for creators.' : 'វិបផតថលរៀបរាប់មាតិកាវិដេអូ។' },
  ];

  const portfolioItems = [
    { name: '888 Up Digital Strategy', cat: 'Operations', impact: '+45% Growth', icon: '💎' },
    { name: 'KHQR Auto-Payment', cat: 'Fintech', impact: 'Real-time Sync', icon: '💳' },
    { name: 'Branch SEO Network', cat: 'Growth', impact: 'Top 1 Rank', icon: '🔍' }
  ];

  const t = {
    en: {
      heroTitle: 'Heang Chheng Khoem',
      heroSub: 'Senior Full-Stack Architect • National Operations Lead • Digital Strategist',
      aboutHeader: 'The Professional Narrative',
      aboutText: 'Bridging the gap between enterprise software engineering and high-conversion results. As the National Operations Lead for 888 Up Fast Cash, I manage full-spectrum technical infrastructure and digital strategy across Cambodia.',
      cta: 'Initialize Protocol',
      emailCta: 'Direct protocol Mail',
    },
    kh: {
      heroTitle: 'ហ៊ាង ឆេង ខឹម',
      heroSub: 'វិស្វករកម្មវិធីជាន់ខ្ពស់ • អ្នកដឹកនាំផ្នែកឌីជីថល • ប្រតិបត្តិការ IT',
      aboutHeader: 'សេចក្តីសង្ខេបប្រតិបត្តិ',
      aboutText: 'តភ្ជាប់រវាងវិស្វកម្មកម្មវិធីសហគ្រាស និងលទ្ធផលទីផ្សារដែលមានប្រសិទ្ធភាពខ្ពស់។ អ្នកគ្រប់គ្រងប្រតិបត្តិការសាខាថ្នាក់ជាតិសម្រាប់ 888 Up Cambodia។',
      cta: 'ចាប់ផ្តើមការងារ',
      emailCta: 'ផ្ញើអ៊ីមែលផ្ទាល់',
    }
  }[lang];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-gold selection:text-black text-left overflow-x-hidden">
      
      {/* 1. COMMAND HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-2xl border-b border-gray-500/10">
        <div className="h-[2px] bg-gold transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-black italic tracking-tighter text-gold">KHOEM.EXE</span>
          <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">
            {Object.keys(sections).map((key) => (
              <button key={key} onClick={() => scrollTo(key as SectionKey)} className={`transition hover:text-gold ${active === key ? 'text-gold opacity-100' : ''}`}>{key}</button>
            ))}
          </div>
          <button onClick={toggleLang} className="text-[10px] font-black border border-gold/20 px-4 py-1.5 rounded-full hover:bg-gold hover:text-black transition uppercase">{lang === 'en' ? 'KH' : 'EN'}</button>
        </div>
      </nav>

      {/* 2. HERO */}
      <section ref={sections.home} className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60" />
        <motion.h1 className="text-6xl md:text-[150px] font-serif italic text-gold leading-none tracking-tighter mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {t.heroTitle}
        </motion.h1>
        <p className="max-w-2xl text-lg md:text-xl opacity-40 font-mono tracking-tight mb-12 uppercase">{t.heroSub}</p>
        <div className="flex gap-10 opacity-30 mb-16">
          <a href="https://github.com/khoem168" target="_blank" className="hover:text-gold transition-transform hover:scale-110"><CustomIcons.Github /></a>
          <a href="https://facebook.com/heang.chhengkhoem.me" target="_blank" className="hover:text-gold transition-transform hover:scale-110"><CustomIcons.Facebook /></a>
        </div>
        <button onClick={() => scrollTo('contact')} className="px-16 py-6 bg-xmas-red text-white font-black rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-[0.4em]">{t.cta}</button>
      </section>

      {/* 3. ABOUT */}
      <section ref={sections.about} className="py-40 bg-background">
        <div className="container mx-auto px-10 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-gold/10 blur-[120px] rounded-full opacity-40 transition-opacity" />
            <img src="/168.svg" alt="Portrait" className="relative rounded-[60px] border border-gray-500/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.6em] text-xmas-red">{t.aboutHeader}</h3>
            <p className="text-2xl md:text-4xl font-serif italic text-gold leading-tight tracking-tighter">{t.aboutText}</p>
            <div className="bg-zinc-500/5 border border-gold/20 p-8 rounded-[40px] font-mono text-sm space-y-3 opacity-60">
               <p className="text-gold italic">{lang === 'en' ? '> Status: Operational Lead @ 888_Up' : '> ស្ថានភាព៖ ប្រធានប្រតិបត្តិការ @ 888_Up'}</p>
               <p className="animate-pulse">{lang === 'en' ? '> Ready for enterprise deployment.' : '> ត្រៀមខ្លួនសម្រាប់គម្រោងខ្នាតសហគ្រាស។'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section ref={sections.services} className="py-40 bg-zinc-500/5 border-y border-gray-500/10">
        <div className="container mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((s, i) => (
            <div key={i} className="p-12 rounded-[50px] bg-background border border-gray-500/10 hover:border-gold/30 transition-all shadow-2xl text-left group">
              <div className="text-5xl mb-10 group-hover:rotate-12 transition-transform">{s.icon}</div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4 italic text-gold/80">{s.title}</h4>
              <p className="text-xs opacity-40 leading-relaxed font-light italic">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SKILLS / ARCHITECTURE */}
      <section ref={sections.skills} className="py-40">
        <div className="container mx-auto px-10">
            <h3 className="text-center text-xs font-black uppercase tracking-[0.6em] mb-24 opacity-30 italic">Engineering Infrastructure</h3>
            <div className="grid lg:grid-cols-2 gap-16">
                {skillGroups.map((group, i) => (
                    <div key={i} className="p-16 rounded-[60px] border border-gray-500/10 bg-zinc-500/5 shadow-xl text-left group hover:border-gold/30 transition-all">
                        <h4 className="text-2xl font-bold text-gold border-b border-gold/10 pb-8 uppercase mb-12 italic tracking-tighter">{group.title}</h4>
                        <div className="space-y-8">
                            {group.items.map((s, j) => (
                                <div key={j}>
                                    <div className="flex justify-between text-[10px] font-black uppercase mb-3 opacity-60">
                                        <span>{s.name}</span>
                                        <span>{s.level}%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-500/10 rounded-full overflow-hidden">
                                        <motion.div className="h-full bg-gold" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} transition={{ duration: 1 }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. PLATFORMS ECOSYSTEM */}
      <section ref={sections.platforms} className="py-40 bg-zinc-500/5 border-y border-gray-500/10">
        <div className="container mx-auto px-10 text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.6em] mb-24 opacity-30 italic">Proprietary Platforms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {platformsData.map((p, i) => (
                    <div key={i} className="p-12 rounded-[50px] bg-background border border-gray-500/10 text-left hover:border-gold/30 transition-all shadow-xl">
                        <div className="text-4xl mb-8">{p.icon}</div>
                        <h4 className="text-lg font-black uppercase text-white mb-4 italic tracking-tighter">{p.name}</h4>
                        <p className="text-xs opacity-40 font-light italic leading-relaxed">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 7. PORTFOLIO SHOWCASE */}
      <section ref={sections.portfolio} className="py-40">
        <div className="container mx-auto px-10 text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.6em] mb-24 opacity-30 italic">Case Studies & Impact</h3>
            <div className="grid md:grid-cols-3 gap-10">
                {portfolioItems.map((item, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-[50px] border border-gray-500/10 bg-zinc-500/5 p-16 text-center hover:border-gold/30 transition-all shadow-2xl">
                        <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold/40 mb-2 block">{item.cat}</span>
                        <h4 className="text-2xl font-serif italic text-white mb-6 leading-tight">{item.name}</h4>
                        <div className="h-px w-12 bg-xmas-red/40 mx-auto mb-6" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-gold animate-pulse">{item.impact}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. CONTACT PROTOCOL */}
      <section ref={sections.contact} className="py-72 text-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full opacity-30" />
        <h3 className="text-7xl md:text-[140px] font-serif italic text-gold mb-16 tracking-tighter leading-none group cursor-pointer hover:opacity-80 transition-opacity">Let&apos;s Build.</h3>
        <a href="mailto:heang.chhengkhoem.me@gmail.com" className="inline-block px-24 py-8 bg-foreground text-background rounded-3xl font-black tracking-[0.5em] text-xs shadow-2xl hover:scale-110 active:scale-95 transition-all z-10">{t.emailCta}</a>
      </section>

      {/* 9. PREMIUM FOOTER */}
      <footer className="py-24 border-t border-gray-500/10 text-center opacity-30 text-[10px] font-mono uppercase tracking-[1em] bg-zinc-500/5">
        © 2026 Heang Chheng Khoem | Lead Systems & Strategy | Cambodia
      </footer>

      {/* TELEGRAM protocol */}
      <a href="https://t.me/khoem168" target="_blank" className="fixed bottom-12 right-12 z-50 bg-[#0088cc] text-white px-10 py-5 rounded-3xl shadow-2xl hover:scale-110 transition-all border border-white/20 font-black text-[10px] uppercase tracking-widest italic flex items-center gap-4 group">
        <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></div>
        <span className="group-hover:tracking-[0.4em] transition-all duration-500 uppercase">Telegram protocol</span>
      </a>

    </main>
  );
};

export default App;
