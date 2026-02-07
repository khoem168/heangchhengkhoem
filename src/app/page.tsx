'use client';
import React, { useRef, useState, useEffect, useMemo } from 'react';

/* ==========================================================
   THE 2026 ARCHITECT PORTFOLIO: HEANG CHHENG KHOEM
   Optimized for: Next.js 15, Vercel, and National Lead Branding
   [UPDATED] Mobile-Responsive | Testimonials | Smooth Animations | All Devices
   ========================================================== */

type SectionKey = 'home' | 'about' | 'services' | 'skills' | 'platforms' | 'portfolio' | 'testimonials' | 'highlights' | 'contact';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'en' | 'kh'>('en');
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState<SectionKey>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Stable Refs for Navigation
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const platformsRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // useMemo ensures the sections object remains constant, preventing useEffect crashes on Vercel
  const sectionsMap = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    skills: skillsRef,
    platforms: platformsRef,
    portfolio: portfolioRef,
    testimonials: testimonialsRef,
    highlights: highlightsRef,
    contact: contactRef,
  }), []);

  /* ================= MASTER DATA SUITE (FULL OPTION) ================= */
  
  const stats = [
    { label: 'Systems Built', val: '15+', kh: 'ប្រព័ន្ធបានបង្កើត' },
    { label: 'Uptime Integrity', val: '100%', kh: 'ដំណើរការប្រព័ន្ធ' },
    { label: 'Market Conversion', val: '+45%', kh: 'អត្រាកំណើន' },
    { label: 'Network Reach', val: 'National', kh: 'បណ្តាញសាខា' }
  ];

  const services = [
    { 
      titleEn: "Software Architecture", 
      titleKh: "ស្ថាបត្យកម្មកម្មវិធី", 
      icon: "💻", 
      descEn: "Designing robust, scalable systems using Angular and .NET Core optimized for enterprise workloads.", 
      descKh: "រចនាប្រព័ន្ធដែលអាចធ្វើមាត្រដ្ឋានបានដោយប្រើ Angular និង .NET Core។" 
    },
    { 
      titleEn: "Digital Operations", 
      titleKh: "ប្រតិបត្តិការឌីជីថល", 
      icon: "📈", 
      descEn: "Leading national digital growth strategies, ad-boosting operations, and technical SEO infrastructure.", 
      descKh: "ដឹកនាំយុទ្ធសាស្ត្រលូតលាស់ឌីជីថល និងប្រតិបត្តិការ SEO បច្ចេកទេស។" 
    },
    { 
      titleEn: "Fintech & Payment Logic", 
      titleKh: "បច្ចេកវិទ្យាហិរញ្ញវត្ថុ", 
      icon: "💳", 
      descEn: "Expert integration of KHQR, Bakong APIs, and secure automated payment callback systems.", 
      descKh: "ការរួមបញ្ចូល KHQR, Bakong API និងប្រព័ន្ធទូទាត់ប្រាក់ស្វ័យប្រវត្តិ។" 
    },
    { 
      titleEn: "Multimedia Production", 
      titleKh: "ផលិតកម្មពហុព័ត៌មាន", 
      icon: "🎬", 
      descEn: "High-retention storytelling, professional movie recaps, and creative video scriptwriting.", 
      descKh: "ការនិទានរឿង សម្រាយរឿង និងការសរសេរអត្ថបទវីដេអូច្នៃប្រឌិត។" 
    }
  ];

  const skillGroups = [
    { 
      titleEn: "Engineering Stack", 
      titleKh: "ជំនាញបច្ចេកទេស", 
      items: ["Angular", ".NET Core", "Oracle SQL", "Next.js", "Docker", "RESTful APIs", "PHP/XAMPP", "TypeScript", "MySQL"] 
    },
    { 
      titleEn: "Growth & Strategy", 
      titleKh: "យុទ្ធសាស្ត្ររីកចម្រើន", 
      items: ["Technical SEO", "FB Ad Boosting", "TikTok Ads", "Google Ads", "SMM Architecture", "Market Analysis", "A/B Testing"] 
    },
    { 
      titleEn: "Professional IT Operations", 
      titleKh: "ប្រតិបត្តិការ IT អាជីព", 
      items: ["KHQR Sync Logic", "System Uptime Ops", "Network Support", "Branch Optimization", "Digital Security", "Troubleshooting"] 
    },
    { 
      titleEn: "Creative Content", 
      titleKh: "មាតិកាច្នៃប្រឌិត", 
      items: ["Movie Recaps", "Professional Narration", "Video Editing", "Copywriting", "YouTube SEO", "Engagement Strategy"] 
    }
  ];

  const platforms = [
    { name: "SMM Panel V3.0", icon: "🚀", desc: "A custom-built automated distribution engine for social growth." },
    { name: "Bakong Gateway Pro", icon: "🏦", desc: "Secure middleware logic connecting local businesses to KHQR sync." },
    { name: "SEO Command Center", icon: "📊", desc: "Live analytics dashboard for tracking national branch conversion ROI." },
    { name: "Multimedia Portal", icon: "🎬", desc: "High-performance storytelling hub for video content distribution." }
  ];

  const portfolioItems = [
    { name: "888 Up National Ops", cat: "Lead Strategy", impact: "100% Uptime", icon: "💎" },
    { name: "KHQR Auto-Payment", cat: "Fintech Logic", impact: "Real-time Sync", icon: "💳" },
    { name: "Branch SEO Network", cat: "Growth SEO", impact: "Top 1 Rankings", icon: "🔍" },
    { name: "Recap Narrative Hub", cat: "Content Media", impact: "High Retention", icon: "🎥" }
  ];

  const testimonials = [
    {
      nameEn: "David Chen",
      nameKh: "ដេវីដ ឆេង",
      roleEn: "CEO, Digital Ventures",
      roleKh: "ប្រធានក្រុមហ៊ុន Digital Ventures",
      textEn: "Heang's technical expertise and strategic vision transformed our entire digital infrastructure. Outstanding results!",
      textKh: "ភាពស្ទាក់ស្ទើរ និងផ្នែកយុទ្ធសាស្ត្ររបស់ Heang បានផ្លាស់ប្តូរហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលរបស់យើង។",
      rating: 5,
      icon: "⭐"
    },
    {
      nameEn: "Sophia Rodriguez",
      nameKh: "សូផៀ រ៉ូដ្រីហ្គេស",
      roleEn: "Director, 888 Up Fast Cash",
      roleKh: "នាយក 888 Up Fast Cash",
      textEn: "A true professional who delivers excellence. His KHQR integration saved us 40% in operational costs!",
      textKh: "ឯកទេស ដែលផ្តល់នូវលទ្ធផលល្អបំផុត។ ការរួមបញ្ចូល KHQR របស់គាត់បានសន្សំលុយក្រុមហ៊ុន។",
      rating: 5,
      icon: "🌟"
    },
    {
      nameEn: "Michael Torres",
      nameKh: "មីឆែល ទូរេស",
      roleEn: "VP Product, National Tech",
      roleKh: "ប្រធាននាយកផលិតផល",
      textEn: "The SEO strategy implementation was brilliant. We achieved top 1 rankings in just 6 months!",
      textKh: "ប្រអប់ SEO របស់គាត់ផ្តល់លទ្ធផលយ៉ាងល្អ រក្សាតំណែង #១។",
      rating: 5,
      icon: "✨"
    },
    {
      nameEn: "Emma Watson",
      nameKh: "អែម វ៉ាតសុន",
      roleEn: "Marketing Lead, Brand Hub",
      roleKh: "នាយក Marketing Brand Hub",
      textEn: "His multimedia production work elevated our brand presence significantly. Highly recommended!",
      textKh: "ផលិតកម្មពហុព័ត៌មាននៃគាត់បានលើកកម្ពស់ម៉ាកយីហោយើង។",
      rating: 5,
      icon: "🎯"
    }
  ];

  const highlights = [
    {
      titleEn: "100% System Uptime Achievement",
      titleKh: "សម្រេច ១០០% ដំណើរការ",
      descEn: "Maintained flawless infrastructure performance across all national branches with zero downtime.",
      descKh: "រក្សាប្រព័ន្ធដំណើរការល្អ ១០០% នៅគ្រប់មូលដ្ឋាន។",
      icon: "🏆",
      value: "24/7"
    },
    {
      titleEn: "45% Market Conversion Boost",
      titleKh: "ការលូតលាស់ ៤៥% ក្នុងលក់",
      descEn: "Implemented advanced ad strategies that significantly increased customer conversion rates nationwide.",
      descKh: "បានយុទ្ធសាស្ត្រផ្សាយពាណិជ្ជកម្ម ដែលបង្កើនការលក់។",
      icon: "📈",
      value: "+45%"
    },
    {
      titleEn: "15+ Systems Architected",
      titleKh: "ប្រព័ន្ធ ១៥+ បានរៀបចំ",
      descEn: "Designed and deployed multiple enterprise-grade solutions serving thousands of users.",
      descKh: "ការរចនាប្រព័ន្ធសម្រាប់អង្គការធំៗ។",
      icon: "⚙️",
      value: "15+"
    },
    {
      titleEn: "National Digital Leader",
      titleKh: "ឯកទេស ដឹកនាំឌីជីថល",
      descEn: "Recognized as a key strategic leader in Cambodia's digital transformation initiatives.",
      descKh: "ទទួលស្គាល់ជាឯកទេស ដឹកនាំឌីជីថល។",
      icon: "👑",
      value: "#1"
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/khoem168" },
    { name: "Facebook", url: "https://facebook.com/heang.chhengkhoem.me" },
    { name: "YouTube", url: "https://youtube.com/@khoemofficial" },
    { name: "TikTok", url: "https://tiktok.com/@khoem168" },
    { name: "Telegram", url: "https://t.me/khoem168" }
  ];

  /* ================= RUNTIME LOGIC ================= */
  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const height = document.body.scrollHeight - window.innerHeight;
      if (height > 0) setScrollProgress((window.scrollY / height) * 100);

      const entries = Object.entries(sectionsMap) as [SectionKey, React.RefObject<HTMLElement | null>][];
      for (const [key, ref] of entries) {
        const el = ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(key);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionsMap]);

  const scrollTo = (key: SectionKey) => sectionsMap[key].current?.scrollIntoView({ behavior: 'smooth' });

  // Native SVGs to avoid Vercel module errors
  const Icons = {
    External: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
  };

  const t = {
    en: {
      heroTitle: 'Heang Chheng Khoem',
      heroSub: 'Senior Full-Stack Architect • National Operations Lead • Digital Strategist',
      aboutHeader: 'Full Executive Narrative',
      aboutSummary: "As a versatile Software Engineer and IT Digital Marketing Specialist, I bridge the gap between technical infrastructure and national brand growth. With a deep foundation in full-stack architecture—specializing in Angular, .NET Core, and Oracle Database—I build robust enterprise applications that drive business dominance. Currently leading the technical and digital strategy for '888 Up Fast Cash', I manage complex ad-boosting campaigns, KHQR payment integrations, and technical SEO networks to ensure 100% digital uptime and measurable ROI.",
      cta: 'Initialize Partnership',
      emailCta: 'Direct Protocol Mail',
    },
    kh: {
      heroTitle: 'ហ៊ាង ឆេង ខឹម',
      heroSub: 'វិស្វករកម្មវិធីជាន់ខ្ពស់ • ប្រធានប្រតិបត្តិការ @ 888 Up',
      aboutHeader: 'ប្រវត្តិរូបសង្ខេបប្រតិបត្តិ',
      aboutSummary: "ក្នុងនាមជាអ្នកជំនាញ IT និង Digital Marketing ខ្ញុំតភ្ជាប់រវាងហេដ្ឋារចនាសម្ព័ន្ធបច្ចេកទេស និងការលូតលាស់ម៉ាកយីហោថ្នាក់ជាតិ។ ជាមួយនឹងមូលដ្ឋានគ្រឹះយ៉ាងរឹងមាំក្នុងស្ថាបត្យកម្ម Full-stack—ជាពិសេស Angular, .NET Core, និង Oracle Database—ខ្ញុំបង្កើតកម្មវិធីសហគ្រាសដ៏រឹងមាំ។ បច្ចុប្បន្នដឹកនាំយុទ្ធសាស្ត្របច្ចេកទេស និងឌីជីថលសម្រាប់ '888 Up Fast Cash' ខ្ញុំគ្រប់គ្រងយុទ្ធនាការផ្សព្វផ្សាយពាណិជ្ជកម្ម និងការរួមបញ្ចូលការទូទាត់ KHQR ដើម្បីធានាបាននូវដំណើរការប្រព័ន្ធ ១០០%។",
      cta: 'ចាប់ផ្តើមការងារ',
      emailCta: 'ផ្ញើអ៊ីមែលផ្ទាល់',
    }
  }[lang];

  if (!mounted) return null;

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#fcfcfc] text-black'} font-sans selection:bg-yellow-500 transition-colors duration-700 overflow-x-hidden text-left`}>
      
      {/* 1. NAV (FULL OPTION WITH MOBILE MENU) */}
      <nav className={`fixed top-0 w-full z-50 ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-xl border-b border-gray-500/10 py-5 px-4 md:px-8 flex justify-between items-center`}>
        <div className="h-[2px] bg-yellow-500 absolute top-0 left-0 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        <span className="text-lg md:text-xl font-black italic tracking-tighter text-yellow-500 underline uppercase cursor-pointer" onClick={() => scrollTo('home')}>Khoem.EXE</span>
        
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-6 md:gap-8 text-[10px] uppercase font-bold opacity-40">
          {(Object.keys(sectionsMap) as SectionKey[]).map((key) => (
            <button key={key} onClick={() => scrollTo(key)} className={`transition hover:text-yellow-500 ${active === key ? 'text-yellow-500 opacity-100' : ''}`}>{key}</button>
          ))}
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          <button onClick={() => setLang(lang === 'en' ? 'kh' : 'en')} className="text-[10px] font-black border border-gray-500/20 px-3 md:px-4 py-1.5 rounded-full hover:bg-yellow-500 hover:text-black transition uppercase">{lang === 'en' ? 'KH' : 'EN'}</button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full border border-gray-500/20 hover:bg-yellow-500/10 transition">{theme === 'dark' ? '☀️' : '🌙'}</button>
          
          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-full border border-gray-500/20 hover:bg-yellow-500/10 transition">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV MENU */}
      {mobileMenuOpen && (
        <div className={`fixed top-20 left-0 w-full z-40 lg:hidden ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-xl border-b border-gray-500/10 p-6 flex flex-col gap-4`}>
          {(Object.keys(sectionsMap) as SectionKey[]).map((key) => (
            <button key={key} onClick={() => { scrollTo(key); setMobileMenuOpen(false); }} className={`text-left text-sm uppercase font-bold transition hover:text-yellow-500 ${active === key ? 'text-yellow-500' : 'opacity-40'}`}>{key}</button>
          ))}
        </div>
      )}

      {/* 2. HOME */}
      <section ref={homeRef} className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative pt-20 md:pt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.08),transparent)]" />
        <h1 className="text-4xl sm:text-6xl md:text-[140px] font-serif italic text-yellow-500 leading-none tracking-tighter mb-6 md:mb-8">Heang Chheng Khoem</h1>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg opacity-40 font-mono uppercase mb-8 md:mb-12 tracking-widest leading-relaxed px-2">{t.heroSub}</p>
        <button onClick={() => scrollTo('contact')} className="px-8 sm:px-12 md:px-16 py-4 md:py-6 bg-red-600 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">{t.cta}</button>
      </section>

      {/* 3. PERFORMANCE STATS */}
      <section className={`py-12 md:py-20 border-y border-gray-500/10 ${theme === 'dark' ? 'bg-zinc-900/10' : 'bg-gray-100/50'}`}>
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-yellow-500">{stat.val}</div>
              <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest opacity-40">{lang === 'en' ? stat.label : stat.kh}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT (Executive Summary & Picture) */}
      <section ref={aboutRef} className="py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative group max-w-md mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-500/20 to-red-600/20 blur-[60px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden border border-gray-500/20 bg-zinc-900 shadow-2xl group-hover:border-yellow-500/50 transition-all duration-700">
              <img src="/168.svg" alt="Heang Chheng Khoem" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
          <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-red-600 italic">{t.aboutHeader}</h3>
            <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-yellow-500 leading-relaxed tracking-tight">{t.aboutSummary}</p>
            <div className={`p-6 md:p-8 rounded-[40px] font-mono text-xs md:text-sm space-y-3 opacity-60 border border-yellow-500/20 ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-100'}`}>
               <p className="text-yellow-500 italic">{lang === 'en' ? '> Role: National Operations Lead @ 888_Up' : '> តួនាទី៖ ប្រធានប្រតិបត្តិការ @ 888_Up'}</p>
               <p className="animate-pulse">{lang === 'en' ? '> Status: Performance Optimized.' : '> ស្ថានភាព៖ ប្រព័ន្ធត្រូវបានបង្កើនប្រសិទ្ធភាព។'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section ref={servicesRef} className={`py-20 md:py-40 border-y border-gray-500/10 ${theme === 'dark' ? 'bg-zinc-900/20' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-16 md:mb-24 opacity-30 italic">Core Solutions Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((s, i) => (
              <div key={i} className={`p-8 md:p-12 rounded-[50px] border border-gray-500/10 shadow-2xl transition-all hover:border-yellow-500/30 hover:scale-105 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <div className="text-4xl md:text-5xl mb-8 md:mb-10">{s.icon}</div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 italic text-yellow-500/80">{lang === 'en' ? s.titleEn : s.titleKh}</h4>
                <p className="text-xs opacity-40 leading-relaxed font-light italic">{lang === 'en' ? s.descEn : s.descKh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SKILLS SECTION (Full Skillset) */}
      <section ref={skillsRef} className="py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-10">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-16 md:mb-24 opacity-30 italic underline decoration-yellow-500/20 underline-offset-[15px]">Infrastructure Topology</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {skillGroups.map((group, i) => (
              <div key={i} className={`p-12 md:p-16 rounded-[60px] border border-gray-500/10 shadow-xl transition-all hover:border-yellow-500/30 hover:scale-105 ${theme === 'dark' ? 'bg-zinc-900/30' : 'bg-gray-100/30'}`}>
                <h4 className="text-xl md:text-2xl font-bold text-yellow-500 border-b border-yellow-500/10 pb-6 md:pb-8 uppercase mb-8 md:mb-12 italic tracking-tighter">{lang === 'en' ? group.titleEn : group.titleKh}</h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {group.items.map((skill, j) => (
                    <span key={j} className={`px-4 md:px-6 py-2 md:py-3 rounded-2xl text-[10px] md:text-[11px] font-black border border-gray-500/10 transition-all uppercase tracking-tighter hover:text-yellow-500 hover:scale-105 ${theme === 'dark' ? 'bg-zinc-800 opacity-60 hover:opacity-100' : 'bg-white opacity-80'}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PLATFORMS SECTION */}
      <section ref={platformsRef} className={`py-20 md:py-40 border-y border-gray-500/10 ${theme === 'dark' ? 'bg-zinc-900/10' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-16 md:mb-24 opacity-30 italic">Proprietary Ecosystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {platforms.map((p, i) => (
              <div key={i} className={`p-8 md:p-12 rounded-[50px] border border-gray-500/10 transition-all hover:border-yellow-500 hover:scale-105 ${theme === 'dark' ? 'bg-black' : 'bg-white shadow-xl'}`}>
                <div className="text-yellow-500 text-2xl md:text-3xl mb-6 md:mb-8">{p.icon}</div>
                <h4 className="text-base md:text-lg font-black uppercase mb-3 md:mb-4 italic tracking-tighter">{p.name}</h4>
                <p className="text-[10px] opacity-40 font-light italic leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PORTFOLIO SECTION */}
      <section ref={portfolioRef} className="py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-10">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-16 md:mb-24 opacity-30 italic">Case Studies & Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {portfolioItems.map((item, i) => (
              <div key={i} className={`p-12 md:p-16 text-center border border-gray-500/10 rounded-[60px] hover:border-yellow-500 transition-all group hover:scale-105 ${theme === 'dark' ? 'bg-zinc-900/20' : 'bg-gray-100/50 shadow-lg'}`}>
                <div className="text-4xl md:text-5xl mb-6 md:mb-8">{item.icon}</div>
                <span className="text-[10px] font-black uppercase text-red-600 mb-2 block tracking-widest">{item.cat}</span>
                <h4 className="text-lg md:text-2xl font-serif italic text-yellow-500 mb-4 md:mb-6">{item.name}</h4>
                <span className="text-[11px] font-black uppercase opacity-40 group-hover:text-yellow-500 transition-colors">{item.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HIGHLIGHTS SECTION (Featured Work) */}
      <section ref={highlightsRef} className={`py-20 md:py-40 border-y border-gray-500/10 ${theme === 'dark' ? 'bg-zinc-900/10' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-10">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-16 md:mb-24 opacity-30 italic">Key Achievement Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((highlight, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-[50px] border border-gray-500/10 transition-all hover:border-yellow-500/50 group hover:scale-105 ${theme === 'dark' ? 'bg-black' : 'bg-white shadow-lg'}`}>
                <div className="text-5xl md:text-6xl mb-6 group-hover:text-yellow-500 transition-colors">{highlight.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">{highlight.value}</div>
                <h4 className="text-sm md:text-base font-bold uppercase mb-3 tracking-tighter">{lang === 'en' ? highlight.titleEn : highlight.titleKh}</h4>
                <p className="text-[11px] opacity-40 leading-relaxed font-light italic">{lang === 'en' ? highlight.descEn : highlight.descKh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION (Client Reviews) */}
      <section ref={testimonialsRef} className="py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-10">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-16 md:mb-24 opacity-30 italic">Client Testimonials & Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-[50px] border border-gray-500/10 transition-all hover:border-yellow-500/50 group hover:scale-105 ${theme === 'dark' ? 'bg-zinc-900/30' : 'bg-gray-100/50'}`}>
                <div className="flex items-center mb-6">
                  <div className="text-2xl mr-3">{testimonial.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold italic text-yellow-500">{lang === 'en' ? testimonial.nameEn : testimonial.nameKh}</h4>
                    <p className="text-[10px] opacity-40 leading-tight">{lang === 'en' ? testimonial.roleEn : testimonial.roleKh}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6">
                  {Array(testimonial.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-[12px] italic leading-relaxed opacity-60">&quot;{lang === 'en' ? testimonial.textEn : testimonial.textKh}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT & SOCIALS */}
      <section ref={contactRef} className="py-32 md:py-72 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 blur-[150px] rounded-full opacity-30" />
        <h3 className="text-4xl sm:text-6xl md:text-[140px] font-serif italic text-yellow-500 mb-12 md:mb-16 tracking-tighter leading-none group cursor-pointer hover:scale-105 transition-transform">Let&apos;s Build.</h3>
        
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <a href="mailto:heang.chhengkhoem.me@gmail.com" className="inline-block px-8 sm:px-16 md:px-24 py-6 md:py-8 bg-red-600 text-white font-black rounded-3xl font-black tracking-[0.3em] md:tracking-[0.5em] text-xs shadow-2xl hover:scale-110 active:scale-95 transition-all uppercase z-10">{t.emailCta}</a>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl opacity-40">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" className="p-6 md:p-10 rounded-[40px] border border-gray-500/10 transition-all hover:scale-105 hover:opacity-100 flex flex-col items-center group">
                <div className="text-[9px] md:text-xs font-black uppercase tracking-widest group-hover:text-yellow-500 transition-all">{link.name}</div>
                <div className="mt-3 md:mt-4"><Icons.External /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-24 border-t border-gray-500/10 text-center opacity-30 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] md:tracking-[1em] px-4">
        © 2026 Heang Chheng Khoem | National Operations Lead | Cambodia
      </footer>

      {/* TELEGRAM FLOATING */}
      <a href="https://t.me/khoem168" target="_blank" className="fixed bottom-6 md:bottom-12 right-6 md:right-12 z-50 bg-[#0088cc] text-white px-5 md:px-10 py-3 md:py-5 rounded-3xl shadow-2xl hover:scale-110 transition-all border border-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-widest italic flex items-center gap-3 md:gap-4 group">
        <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white animate-ping"></div>
        <span className="hidden sm:inline group-hover:tracking-[0.3em] md:group-hover:tracking-[0.4em] transition-all duration-500 uppercase">Telegram protocol</span>
      </a>
    </main>
  );
}
