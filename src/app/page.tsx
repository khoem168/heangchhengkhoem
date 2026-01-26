'use client';
import React, { useRef, useState, useEffect } from 'react';

/* ==========================================================
   THE ULTIMATE 2026 PROFESSIONAL MASTERPIECE: HEANG CHHENG KHOEM
   ========================================================== */

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);
  
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'en' ? 'kh' : 'en');

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const roadmap = [
    { date: "Q1 2026", taskEn: "AI-Driven SEO Automation for 888 Up", taskKh: "ស្វ័យប្រវត្តិកម្ម SEO ដោយប្រើ AI សម្រាប់ 888 Up", status: "Active" },
    { date: "Q2 2026", taskEn: "Enterprise SMM Panel v3.0 Deployment", taskKh: "ការដាក់ឱ្យប្រើប្រាស់ SMM Panel v3.0 ខ្នាតសហគ្រាស", status: "Planning" },
    { date: "Q3 2026", taskEn: "Expansion of KHQR Auto-Payment Network", taskKh: "ការពង្រីកបណ្តាញទូទាត់ប្រាក់ KHQR ស្វ័យប្រវត្តិ", status: "Research" },
    { date: "Q4 2026", taskEn: "Advanced Data Analytics Dashboard", taskKh: "ផ្ទាំងគ្រប់គ្រងការវិភាគទិន្នន័យកម្រិតខ្ពស់", status: "Upcoming" }
  ];

  const services = [
    {
      titleEn: "Enterprise Engineering",
      titleKh: "វិស្វកម្មសហគ្រាស",
      descEn: "Full-stack architecture using Angular, .NET Core, and Oracle SQL.",
      descKh: "ស្ថាបត្យកម្ម Full-stack ដោយប្រើ Angular, .NET Core និង Oracle SQL។",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      titleEn: "Fintech Integration",
      titleKh: "បច្ចេកវិទ្យាហិរញ្ញវត្ថុ",
      descEn: "Automated KHQR Bakong auto-payment logic and API security.",
      descKh: "ជំនាញលើស្វ័យប្រវត្តិកម្មការទូទាត់ KHQR និងសុវត្ថិភាព API បាគង។",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
      )
    },
    {
      titleEn: "Digital Controller",
      titleKh: "អ្នកគ្រប់គ្រងឌីជីថល",
      descEn: "Strategic SEO and Meta/TikTok ad-controller for branch networks.",
      descKh: "យុទ្ធសាស្ត្រ SEO និងការគ្រប់គ្រង Ads សម្រាប់បណ្តាញសាខា។",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      )
    },
    {
      titleEn: "Creative Narrative",
      titleKh: "ការផលិតមាតិកា",
      descEn: "Professional movie recaps with creative scriptwriting and narration.",
      descKh: "ការសម្រាយរឿងបែបអាជីពជាមួយការសរសេរអត្ថបទ និងការនិទានវីដេអូ។",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
      )
    }
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/heang.chhengkhoem.me", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    )},
    { name: "TikTok", url: "https://www.tiktok.com/@khoem168", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.036 2.612.13 3.846.551V6.2c-1.023-.667-2.245-1.022-3.486-1.02H11.51V18.15c.102 2.147-1.547 3.931-3.687 3.993-2.14.062-3.931-1.608-3.992-3.75-.062-2.14 1.608-3.931 3.75-3.992.56-.016 1.112.083 1.62.29V8.52c-3.13-.538-6.105 1.544-6.643 4.674-.538 3.13 1.544 6.105 4.674 6.643 3.13.538 6.105-1.544 6.643-4.674.053-.306.079-.616.078-.927V0h2.516a5.451 5.451 0 0 0 3.71 1.528v3.49a8.107 8.107 0 0 1-3.71-1.313v.315h.027z"/></svg>
    )},
    { name: "YouTube", url: "https://www.youtube.com/@khoemofficial", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )},
    { name: "Telegram", url: "https://t.me/khoem168", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.91-1.26 4.84-2.1 5.8-2.52 2.76-1.19 3.33-1.4 3.71-1.4.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
    )},
    { name: "GitHub", url: "https://github.com/khoem168", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    )}
  ];

  const skillGroups = [
    {
      titleEn: "Engineering Stack",
      titleKh: "ជំនាញបច្ចេកទេស",
      skills: ["Angular", "Oracle SQL", "Docker", "PHP/XAMPP", ".NET Core", "Microservices", "RESTful APIs", "Web Security"]
    },
    {
      titleEn: "Growth & Strategy",
      titleKh: "ទីផ្សារ & យុទ្ធសាស្ត្រ",
      skills: ["FB Ad Boosting", "TikTok SEO", "Market Analysis", "A/B Testing", "Copywriting", "Video Sriping", "SMM Panels", "Content Creation"]
    },
    {
      titleEn: "Operations IT",
      titleKh: "ប្រតិបត្តិការ IT",
      skills: ["KHQR Logic", "Digital Support", "Network Security", "Cloud Services", "Troubleshooting", "Backup Solutions", "Monitoring Tools", "IT Support" ]
    }
  ];

  const translations = {
    en: {
      heroTitle: "Heang Chheng Khoem",
      heroSub: "Full-Stack Architect • IT Specialist • Digital Growth Strategist",
      status: "System Active • Priority Mode",
      aboutHeader: "The Professional Narrative",
      aboutText: "Bridging the gap between complex software engineering and high-conversion market results. Expert in .NET/Oracle environments and digital brand dominance.",
      caseTitle: "Verified Success Metrics",
      caseSub: "888 Up Fast Cash Operations",
      caseText: "Currently leading the technical and digital strategy for Cambodia's premier pawn shop network, ensuring 100% digital uptime and measurable organic growth.",
      roadmapTitle: "2026 Innovation Roadmap",
      servicesHeader: "Expert Solutions Matrix",
      stackTitle: "Infrastructure Topology",
      cta: "Initialize Partnership",
      emailCta: "Direct protocol Mail",
      projectWish: "Delivering excellence through clean code and strategic growth."
    },
    kh: {
      heroTitle: "ហ៊ាង ឆេង ខឹម",
      heroSub: "វិស្វករកម្មវិធី • IT Support • អ្នកគ្រប់គ្រងទីផ្សារឌីជីថល",
      status: "ប្រព័ន្ធដំណើរការ • ភ្នំពេញ កម្ពុជា",
      aboutHeader: "ប្រវត្តិរូបសង្ខេប",
      aboutText: "ខ្ញុំតភ្ជាប់រវាងការសរសេរកម្មវិធីស្មុគស្មាញ និងការរីកចម្រើនអាជីវកម្មពិតប្រាកដ។ ជំនាញលើ .NET/Oracle និងការបង្កើនម៉ាកយីហោឌីជីថល។",
      caseTitle: "ជោគជ័យដែលផ្ទៀងផ្ទាត់",
      caseSub: "យុទ្ធសាស្ត្រ 888 Up Fast Cash",
      caseText: "បច្ចុប្បន្នកំពុងដឹកនាំយុទ្ធសាស្ត្របច្ចេកទេស និងឌីជីថល ដើម្បីធានាបាននូវដំណើរការរលូន និងវត្តមានទីផ្សារប្រកបដោយប្រសិទ្ធភាពខ្ពស់។",
      roadmapTitle: "ផែនការអភិវឌ្ឍន៍ ២០២៦",
      servicesHeader: "សេវាកម្មជំនាញ",
      stackTitle: "រចនាសម្ព័ន្ធបច្ចេកទេស",
      cta: "ចាប់ផ្តើមការងារ",
      emailCta: "ផ្ញើអ៊ីមែលផ្ទាល់",
      projectWish: "ផ្តល់ជូននូវឧត្តមភាពតាមរយៈការសរសេរកូដ និងយុទ្ធសាស្ត្រឌីជីថល។"
    }
  };

  const t = lang === 'en' ? translations.en : translations.kh;

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-sans transition-all duration-500 bg-background text-foreground selection:bg-gold selection:text-black overflow-x-hidden text-left">
      
      {/* 1. COMMAND HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-gray-500/10 py-5 px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black text-gold tracking-tighter italic">KHOEM.EXE</span>
          <div className="hidden md:flex items-center gap-3 px-3 py-1 rounded-lg bg-green-500/5 border border-green-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">{t.status}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          <div className="hidden lg:flex gap-8">
            {['Home', 'About', 'Roadmap', 'Services', 'Skills'].map((item) => (
              <button key={item} onClick={() => scrollToSection(eval(`${item.toLowerCase()}Ref`))} className="hover:text-gold transition-all">{item}</button>
            ))}
          </div>
          <div className="flex gap-4 border-l border-gray-500/20 pl-6">
            <button onClick={toggleLang} className="hover:text-gold transition-all font-black uppercase">{lang === 'en' ? 'KH' : 'EN'}</button>
            <button onClick={toggleTheme} className="p-2 rounded border border-gray-500/20 hover:bg-gray-500/10 transition-all text-sm">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section ref={homeRef} className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60"></div>
        <h2 className="text-gold font-bold tracking-[1.2em] mb-6 uppercase text-[9px] animate-pulse italic">Innovation Protocol 2026</h2>
        <h1 className="text-6xl md:text-[140px] font-serif italic text-gold tracking-tighter leading-none mb-10">{t.heroTitle}</h1>
        <p className="text-lg md:text-2xl opacity-40 max-w-3xl font-light italic leading-relaxed mx-auto mb-16">{t.heroSub}</p>
        
        <div className="flex gap-8 mb-16 opacity-30">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" className="hover:text-gold transition-all transform hover:scale-110">
                    {link.icon}
                </a>
            ))}
        </div>

        <button onClick={() => scrollToSection(contactRef)} className="px-20 py-7 bg-xmas-red text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] hover:scale-110 active:scale-95 transition-all text-xs uppercase tracking-[0.3em]">
          {t.cta}
        </button>
      </section>

      {/* 3. PERFORMANCE MATRIX STATS */}
      <section className="py-16 bg-zinc-500/5 border-y border-gray-500/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
                { label: "Systems Deployed", val: "15+" },
                { label: "Conversion Index", val: "+45%" },
                { label: "Digital Uptime", val: "100%" },
                { label: "Branch Network", val: "National" }
            ].map((stat, i) => (
                <div key={i} className="space-y-2">
                    <div className="text-4xl font-serif italic text-gold">{stat.val}</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-40 font-bold">{stat.label}</div>
                </div>
            ))}
        </div>
      </section>

      {/* 4. ABOUT & NARRATIVE */}
      <section ref={aboutRef} className="py-40 bg-background">
        <div className="container mx-auto px-10 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-xmas-red/20 to-gold/20 blur-[120px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-[60px] border border-gray-500/10 shadow-2xl bg-zinc-900 group-hover:scale-[1.01] transition-transform duration-700">
                <img src="/168.svg" alt="Portrait" className="w-full h-full object-cover portrait-mask grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
          <div className="space-y-12">
            <h3 className="text-xs font-bold text-xmas-red uppercase tracking-[0.5em]">{t.aboutHeader}</h3>
            <p className="text-3xl md:text-6xl font-serif italic text-gold leading-tight tracking-tighter">{t.aboutText}</p>
            
            {/* Live Status Terminal Widget */}
            <div className="bg-[#0c0c0c] border border-gold/20 p-10 rounded-[35px] shadow-2xl font-mono text-sm overflow-hidden group text-left">
                <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    <span className="text-[10px] opacity-30 ml-4 uppercase tracking-widest italic">Terminal Workspace</span>
                </div>
                <div className="space-y-4 opacity-80">
                    <p className="text-gold italic">{lang === 'en' ? '> Synchronizing 888_UP_SEO_DATA...' : '> កំពុងទាញយកទិន្នន័យ SEO 888 UP...'}</p>
                    <p className="text-gold italic">{lang === 'en' ? '> Initializing KHQR_BAKONG_GATEWAY...' : '> កំពុងតម្លើងប្រព័ន្ធ KHQR...'}</p>
                    <p className="text-gold animate-pulse italic">{lang === 'en' ? '> Status: Operational Perfection.' : '> ស្ថានភាពប្រព័ន្ធ៖ ល្អឥតខ្ចោះ។'}</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 2026 INNOVATION ROADMAP */}
      <section ref={roadmapRef} className="py-40 bg-zinc-500/5 border-y border-gray-500/10 text-center">
        <div className="container mx-auto px-10">
            <h3 className="text-xs font-bold text-xmas-red uppercase tracking-[0.4em] mb-20">{t.roadmapTitle}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {roadmap.map((item, i) => (
                    <div key={i} className="relative p-10 rounded-[40px] bg-background border border-gray-500/10 hover:border-gold transition-all text-left">
                        <div className="text-gold font-serif italic text-2xl mb-4">{item.date}</div>
                        <p className="text-sm opacity-60 font-light italic leading-relaxed mb-8">{lang === 'en' ? item.taskEn : item.taskKh}</p>
                        <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded bg-gold/10 text-gold">{item.status}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. VERIFIED IMPACT (888 UP Case Study) */}
      <section className="py-40 relative bg-background">
        <div className="container mx-auto px-10 text-left">
          <div className="bg-zinc-500/2 p-12 md:p-24 rounded-[70px] border border-gold/10 relative overflow-hidden backdrop-blur-3xl shadow-inner group">
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="inline-block py-1 px-4 rounded-full bg-xmas-red/10 text-xmas-red font-bold text-[9px] tracking-widest uppercase mb-12">{t.caseTitle}</span>
                <h3 className="text-4xl md:text-7xl font-serif italic text-gold mb-10 tracking-tighter leading-[0.9]">{t.caseSub}</h3>
                <p className="opacity-50 mb-12 italic leading-relaxed text-xl font-light">{t.caseText}</p>
                <div className="grid sm:grid-cols-2 gap-8 opacity-60">
                   <div className="flex gap-4 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest italic">SEO Controller</span>
                   </div>
                   <div className="flex gap-4 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest italic">Operations Lead</span>
                   </div>
                </div>
              </div>
              <div className="relative border border-gray-500/10 rounded-[50px] p-20 bg-background/50 text-center shadow-2xl group-hover:border-gold/30 transition-all duration-700">
                <div className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-10 font-black">Growth Performance</div>
                <div className="text-9xl font-serif italic text-gold tracking-tighter">SEO+</div>
                <div className="h-px w-32 bg-xmas-red/40 mx-auto mt-12 mb-8"></div>
                <span className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-black italic">Verified National Role</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURE VISUALIZER */}
      <section ref={skillsRef} className="py-40 bg-zinc-500/5 border-t border-gray-500/10 text-center">
        <h3 className="text-xs font-bold text-xmas-red uppercase tracking-[0.5em] mb-16 italic tracking-widest underline decoration-gold/20 underline-offset-8">Infrastructure Topology</h3>
        
        

        <div className="container mx-auto px-10 grid lg:grid-cols-3 gap-12 mt-24 text-left">
          {skillGroups.map((group, i) => (
            <div key={i} className="p-16 rounded-[60px] border border-gray-500/10 bg-background hover:bg-zinc-500/5 transition-all shadow-xl group">
              <h4 className="text-2xl font-bold text-gold border-b border-gold/10 pb-8 tracking-tighter uppercase mb-12 italic">{lang === 'en' ? group.titleEn : group.titleKh}</h4>
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, j) => (
                  <span key={j} className="px-6 py-3 bg-zinc-500/5 rounded-2xl text-[11px] font-black opacity-60 hover:opacity-100 hover:text-gold transition-all border border-gray-500/10 uppercase tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SERVICES BENTO GRID */}
      <section ref={servicesRef} className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-10 text-center">
          <h2 className="text-xs font-bold text-gold mb-32 uppercase tracking-[0.5em] italic">{t.servicesHeader}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((s, idx) => (
              <div key={idx} className="p-14 bg-zinc-500/5 border border-gray-500/10 rounded-[50px] hover:border-gold/30 transition-all text-left shadow-2xl group">
                <div className="text-gold mb-12 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h4 className="font-black uppercase tracking-widest text-[14px] mb-6 italic text-gold/80">{lang === 'en' ? s.titleEn : s.titleKh}</h4>
                <p className="opacity-40 text-xs leading-relaxed italic font-light leading-relaxed">{lang === 'en' ? s.descEn : s.descKh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL CALL TO ACTION */}
      <section ref={contactRef} className="py-72 text-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full opacity-30"></div>
        <h3 className="text-7xl md:text-[140px] font-serif text-gold mb-16 italic tracking-tighter opacity-90 leading-none group cursor-pointer hover:opacity-100 transition-opacity">
            Let&apos;s Build <span className="text-xmas-red font-sans not-italic">.</span>
        </h3>
        <p className="opacity-40 mb-24 max-w-2xl mx-auto italic text-xl px-10 leading-relaxed font-light">
            {t.projectWish}
        </p>
        <a 
          href="mailto:heang.chhengkhoem.me@gmail.com" 
          className="inline-block px-24 py-9 bg-foreground text-background font-black rounded-3xl hover:scale-110 active:scale-95 transition-all uppercase tracking-[0.5em] text-[13px] shadow-2xl z-10"
        >
          {t.emailCta}
        </a>
      </section>

      {/* 10. TELEGRAM PROTOCOL INTERFACE */}
      <a href="https://t.me/khoem168" target="_blank" className="fixed bottom-12 right-12 z-50 bg-[#0088cc] text-white px-12 py-6 rounded-3xl shadow-2xl hover:scale-110 active:scale-90 transition-all border border-white/20 font-black text-[11px] uppercase tracking-widest italic flex items-center gap-5 group">
        <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
        <span className="group-hover:tracking-[0.5em] transition-all duration-500 uppercase">Telegram Protocol</span>
      </a>

      {/* 11. PREMIUM FOOTER */}
      <footer className="py-24 border-t border-gray-500/10 text-center opacity-30 text-[10px] tracking-[1.2em] uppercase italic bg-zinc-500/5">
        © 2026 Heang Chheng Khoem | lead architecture & digital strategy | Cambodia
      </footer>
    </div>
  ); 
};

export default App;
