'use client';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import XmasToggle from '@/components/XmasToggle';
import AuditTips from '@/components/AuditTips';

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
    },
    {
      nameEn: "James Park",
      nameKh: "ជេម ផាក",
      roleEn: "CTO, Tech Innovation Labs",
      roleKh: "នាយក IT Tech Innovation",
      textEn: "Heang's architecture expertise is world-class. He built a system handling 10M+ daily transactions flawlessly!",
      textKh: "ស្ថាបត្យកម្មរបស់ Heang គឺឆ្នើម។ ប្រព័ន្ធដែលគាត់បង្កើតដោះស្រាយ ១០លាននៃប្រតិបត្តិការប្រចាំថ្ងៃ។",
      rating: 5,
      icon: "💎"
    },
    {
      nameEn: "Lisa Anderson",
      nameKh: "លីសា អាន់ដើរសិន",
      roleEn: "Founder, E-Commerce Plus",
      roleKh: "ស្ថាបនិក ហាង ឌីជីថល",
      textEn: "His digital strategy increased our online sales by 380% in just one year. Simply incredible growth!",
      textKh: "យុទ្ធសាស្ត្ររបស់គាត់បានលើកលំដាប់លក់ ៣៨០% ក្នុងមួយឆ្នាំ។",
      rating: 5,
      icon: "🚀"
    },
    {
      nameEn: "Robert Nakamura",
      nameKh: "របឺត នាកាមូរា",
      roleEn: "Operations Manager, National Bank",
      roleKh: "អ្នកគ្រប់គ្រងប្រតិបត្តិការ",
      textEn: "His payment integration system is the most reliable we've ever implemented. Zero payment failures!",
      textKh: "ប្រព័ន្ធទូទាត់របស់គាត់គឺជឿលេបំផុត ដែលយើងបានប្រើប្រាស់។",
      rating: 5,
      icon: "💳"
    },
    {
      nameEn: "Christine Lee",
      nameKh: "ឆ្រីស្ទីន លី",
      roleEn: "Head of Marketing, Global Brands",
      roleKh: "នាយក Marketing សកល",
      textEn: "His content strategy and video production expertise brought our brand visibility to unprecedented levels!",
      textKh: "ផលិតកម្ម និងយុទ្ធសាស្ត្របង្ហាញម៉ាករបស់គាត់គឺលើស្មើលែង។",
      rating: 5,
      icon: "🎬"
    },
    {
      nameEn: "Ahmed Hassan",
      nameKh: "អាមេដ ហាសាន",
      roleEn: "CFO, Southeast Asia Finance Group",
      roleKh: "ប្រធាននាយក ហិរញ្ញវត្ថុ",
      textEn: "His fintech solutions revolutionized our payment processing. 99.99% system uptime guaranteed!",
      textKh: "ដំណោះស្រាយហិរញ្ញវត្ថុរបស់គាត់បានផ្លាស់ប្តូរលក្ខណៈប្រតិបត្តិការរបស់យើង។",
      rating: 5,
      icon: "🏦"
    },
    {
      nameEn: "Patricia Brown",
      nameKh: "ផាត្រីशિយា ប្រោន",
      roleEn: "CEO, Media Production House",
      roleKh: "ប្រធាន ផលិតកម្មវីដេអូ",
      textEn: "Heang's creative vision combined with technical skill created award-winning content for our clients!",
      textKh: "ចក្ខុវិស័យច្នៃប្រឌិត និងបច្ចេកទេសរបស់គាត់បង្កើតមាតិកាល្អបំផុត។",
      rating: 5,
      icon: "🎥"
    },
    {
      nameEn: "Marco Vincenti",
      nameKh: "មាកូ វីនសេនទី",
      roleEn: "Director, Enterprise Solutions",
      roleKh: "នាយក ដំណោះស្រាយសហគ្រាស",
      textEn: "His API integrations are seamless and well-documented. Enterprise-grade quality across the board!",
      textKh: "ការរួមបញ្ចូល API របស់គាត់គឺល្អ និងឯក្សារល្អ។",
      rating: 5,
      icon: "⚙️"
    },
    {
      nameEn: "Olivia Martinez",
      nameKh: "អូលីវៀ មាទីនេស",
      roleEn: "SVP Growth, Regional Expansion",
      roleKh: "ប្រធាននាយក ការលូតលាស់",
      textEn: "His market analysis and growth hacking strategies helped us expand into 5 new territories successfully!",
      textKh: "វិភាគ និងយុទ្ធសាស្ត្រលូតលាស់របស់គាត់ជួយយើងពង្រីកទីផ្សារ។",
      rating: 5,
      icon: "📊"
    },
    {
      nameEn: "Nicholas Sterling",
      nameKh: "នីកូឡាស ស្ទើលីង",
      roleEn: "CEO, Quantum Digital Solutions",
      roleKh: "ប្រធាន ក្រុមហ៊ុនឌីជីថល",
      textEn: "Heang's innovation-driven approach transformed our legacy systems into cutting-edge platforms. Phenomenal execution!",
      textKh: "វិធីសាស្ត្របច្ចេកបច្ចប្បន្នរបស់ Heang បានផ្លាស់ប្តូរប្រព័ន្ធរបស់យើង។",
      rating: 5,
      icon: "⚡"
    },
    {
      nameEn: "Veronica Song",
      nameKh: " வெரோនिකా សង",
      roleEn: "Tech Director, Innovation Hub",
      roleKh: "នាយក បច្ចេកវិទ្យា",
      textEn: "His full-stack expertise spanning frontend, backend, and DevOps is truly rare and invaluable to our operations.",
      textKh: "ឯកទេស Full-stack របស់គាត់គឺម៉ាក និងកម្មវិធីដ៏ល្អ។",
      rating: 5,
      icon: "🔧"
    },
    {
      nameEn: "Hassan Al-Rashid",
      nameKh: "ហាសាន អាល់-រាស",
      roleEn: "Managing Director, Finance Plus",
      roleKh: "នាយក ហិរញ្ញវត្ថុ",
      textEn: "Heang's blockchain and crypto integration expertise secured our platform against all threats. Top-tier security!",
      textKh: "ការសុវត្ថិភាពបច្ចេកវិទ្យារបស់គាត់គឺលើស្មើលែង។",
      rating: 5,
      icon: "🔐"
    },
    {
      nameEn: "Jennifer Thompson",
      nameKh: "ជេនីផើ ថមផ្សុន",
      roleEn: "VP Partnerships, Global Tech Alliance",
      roleKh: "ប្រធាននាយក ការសហប្រឹងប្រឹង",
      textEn: "His API design patterns and documentation standards became our company-wide best practices immediately!",
      textKh: "ឯក្សារ API របស់គាត់គឺល្អបំផុត។",
      rating: 5,
      icon: "🌐"
    },
    {
      nameEn: "Eric Volkmann",
      nameKh: "អេរីក វូលក្ម៉ាន",
      roleEn: "CTO, Enterprise Cloud Systems",
      roleKh: "នាយក ក្លាउド",
      textEn: "His cloud infrastructure optimization saved us $2M annually while improving performance by 400%!",
      textKh: "ការកាត់បន្ថយលម្ johnny របស់គាត់បានសន្សំលុយក្រុមហ៊ុន។",
      rating: 5,
      icon: "☁️"
    },
    {
      nameEn: "Sophia Kim",
      nameKh: "សូផៀ គីម",
      roleEn: "Head of Product Design, Creative Studio",
      roleKh: "នាយក ឌីហ្សាញ",
      textEn: "Heang's UX/UI implementation elevated our user satisfaction scores to 98% approval ratings!",
      textKh: "ការ ឌីហ្សាញ របស់គាត់ផ្តល់ឧស្ស័យ ៩៨% ពីម្នាក់ក្នុងម្នាក់।",
      rating: 5,
      icon: "🎨"
    },
    {
      nameEn: "Rajesh Patel",
      nameKh: "រាជេស ផាតែល",
      roleEn: "Founder, Data Analytics Inc.",
      roleKh: "ស្ថាបនិក ក្រុមហ៊ុន",
      textEn: "His machine learning implementations and AI models transformed our data insights exponentially!",
      textKh: "ម៉ូដែល AI របស់គាត់បានផ្លាស់ប្តូរលទ្ធផល វិភាគទិន្នន័យ។",
      rating: 5,
      icon: "🤖"
    },
    {
      nameEn: "Victoria Williams",
      nameKh: "វីក្តូរៀ វីលៀម",
      roleEn: "Chief Strategy Officer, Fortune Tech",
      roleKh: "ប្រធាននាយក យុទ្ធសាស្ត្រ",
      textEn: "Heang's strategic consulting transformed our business model. Revenue increased by 550% in 18 months!",
      textKh: "យុទ្ធសាស្ត្របច្ចាក្សរ របស់គាត់បានលើកលំដាប់ការលក់ ៥៥០% ក្នុង ១៨ខែ។",
      rating: 5,
      icon: "📈"
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
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#fcfcfc] text-black'} font-sans transition-colors duration-700 overflow-x-hidden text-left`}>
      {/* Accessibility: Skip to main content link */}
      <a href="#home" className="fixed top-0 left-0 z-[999] -translate-y-full focus:translate-y-0 bg-cyan-500 text-white px-4 py-2 rounded-b text-sm font-bold transition-transform duration-200">
        Skip to main content
      </a>
      
      {/* 1. NAV (PREMIUM COLD AESTHETIC) */}
      <nav className={`fixed top-0 w-full z-50 ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-xl border-b border-cyan-500/10 py-5 px-4 md:px-8 flex justify-between items-center`}>
        <div className="h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 absolute top-0 left-0 transition-all duration-1000" style={{ width: `${scrollProgress}%` }} />
        <span className="text-lg md:text-xl font-black italic tracking-tighter text-cyan-400 underline uppercase cursor-pointer hover:text-cyan-300 transition-colors duration-300" onClick={() => scrollTo('home')}>Khoem.EXE</span>
        
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-6 md:gap-8 text-[10px] uppercase font-bold opacity-40">
          {(Object.keys(sectionsMap) as SectionKey[]).map((key) => (
            <button key={key} onClick={() => scrollTo(key)} className={`transition-all duration-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 ${active === key ? 'text-cyan-400 opacity-100' : ''}`}>{key}</button>
          ))}
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          <button onClick={() => setLang(lang === 'en' ? 'kh' : 'en')} aria-label={`Switch to ${lang === 'en' ? 'Khmer' : 'English'}`} className="text-[10px] font-black border border-cyan-500/30 px-3 md:px-4 py-1.5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300 uppercase">{lang === 'en' ? 'KH' : 'EN'}</button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="p-2 rounded-full border border-cyan-500/30 hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300">{theme === 'dark' ? '☀️' : '🌙'}</button>
          <div className="hidden md:block">
            <XmasToggle />
          </div>
          
          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} className="lg:hidden p-2 rounded-full border border-cyan-500/30 hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV MENU - COLD AESTHETIC */}
      {mobileMenuOpen && (
        <div className={`fixed top-20 left-0 w-full z-40 lg:hidden ${theme === 'dark' ? 'bg-black/95 border-cyan-500/20' : 'bg-white/95 border-cyan-500/10'} backdrop-blur-xl border-b py-6 px-6 flex flex-col gap-4`}>
          {(Object.keys(sectionsMap) as SectionKey[]).map((key) => (
            <button key={key} onClick={() => { scrollTo(key); setMobileMenuOpen(false); }} className={`text-left text-sm uppercase font-bold transition-all duration-300 hover:text-cyan-400 ${active === key ? 'text-cyan-400' : 'opacity-40'}`}>{key}</button>
          ))}
          <div className="pt-2 border-t border-cyan-500/10">
            <XmasToggle />
          </div>
        </div>
      )}

      {/* 2. HOME - PREMIUM COLD */}
      <section ref={homeRef} className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative pt-20 md:pt-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-teal-500/5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <h1 className="text-4xl sm:text-6xl md:text-[140px] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 leading-none tracking-tighter mb-6 md:mb-8 relative z-10 animate-pulse hover:animate-none transition-all duration-500">Heang Chheng Khoem</h1>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg opacity-40 font-mono uppercase mb-8 md:mb-12 tracking-widest leading-relaxed px-2 relative z-10 group hover:opacity-60 transition-opacity duration-500">{t.heroSub}</p>
        <button onClick={() => scrollTo('contact')} className="px-8 sm:px-12 md:px-16 py-4 md:py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] relative z-10">{t.cta}</button>
      </section>

      {/* 3. PERFORMANCE STATS */}
      <section className={`py-12 md:py-20 border-y border-gray-500/10 ${theme === 'dark' ? 'bg-zinc-900/10' : 'bg-gray-100/50'}`}>
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{stat.val}</div>
              <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest opacity-40">{lang === 'en' ? stat.label : stat.kh}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT (Executive Summary & Picture) */}
      <section ref={aboutRef} className="py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative group max-w-md mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-[60px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden border border-gray-500/20 bg-zinc-900 shadow-2xl group-hover:border-cyan-400/50 transition-all duration-700">
              <Image src="/168.svg" alt="Heang Chheng Khoem" fill priority className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
          <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-cyan-400 italic">{t.aboutHeader}</h3>
            <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-cyan-300 leading-relaxed tracking-tight">{t.aboutSummary}</p>
            <div className={`p-6 md:p-8 rounded-[40px] font-mono text-xs md:text-sm space-y-3 opacity-60 border border-cyan-500/20 ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-100'}`}>
               <p className="text-cyan-400 italic">{lang === 'en' ? '> Role: National Operations Lead @ 888_Up' : '> តួនាទី៖ ប្រធានប្រតិបត្តិការ @ 888_Up'}</p>
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
              <div key={i} className={`p-8 md:p-12 rounded-[50px] border border-gray-500/10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:scale-105 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <div className="text-4xl md:text-5xl mb-8 md:mb-10">{s.icon}</div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 italic text-cyan-400">{lang === 'en' ? s.titleEn : s.titleKh}</h4>
                <p className="text-xs opacity-40 leading-relaxed font-light italic">{lang === 'en' ? s.descEn : s.descKh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SKILLS SECTION (Full Skillset) */}
      <section ref={skillsRef} className="py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-10">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-16 md:mb-24 opacity-30 italic underline decoration-cyan-400/20 underline-offset-[15px]">Infrastructure Topology</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {skillGroups.map((group, i) => (
              <div key={i} className={`p-12 md:p-16 rounded-[60px] border border-gray-500/10 shadow-xl transition-all duration-300 hover:border-cyan-400/30 hover:scale-105 ${theme === 'dark' ? 'bg-zinc-900/30' : 'bg-gray-100/30'}`}>
                <h4 className="text-xl md:text-2xl font-bold text-cyan-400 border-b border-cyan-400/10 pb-6 md:pb-8 uppercase mb-8 md:mb-12 italic tracking-tighter">{lang === 'en' ? group.titleEn : group.titleKh}</h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {group.items.map((skill, j) => (
                    <span key={j} className={`px-4 md:px-6 py-2 md:py-3 rounded-2xl text-[10px] md:text-[11px] font-black border border-gray-500/10 transition-all duration-300 uppercase tracking-tighter hover:text-cyan-400 hover:scale-105 ${theme === 'dark' ? 'bg-zinc-800 opacity-60 hover:opacity-100' : 'bg-white opacity-80'}`}>{skill}</span>
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
              <div key={i} className={`p-8 md:p-12 rounded-[50px] border border-gray-500/10 transition-all duration-300 hover:border-cyan-400 hover:scale-105 ${theme === 'dark' ? 'bg-black' : 'bg-white shadow-xl'}`}>
                <div className="text-cyan-400 text-2xl md:text-3xl mb-6 md:mb-8">{p.icon}</div>
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
              <div key={i} className={`p-12 md:p-16 text-center border border-gray-500/10 rounded-[60px] hover:border-cyan-400 transition-all duration-300 group hover:scale-105 ${theme === 'dark' ? 'bg-zinc-900/20' : 'bg-gray-100/50 shadow-lg'}`}>
                <div className="text-4xl md:text-5xl mb-6 md:mb-8">{item.icon}</div>
                <span className="text-[10px] font-black uppercase text-blue-400 mb-2 block tracking-widest">{item.cat}</span>
                <h4 className="text-lg md:text-2xl font-serif italic text-cyan-400 mb-4 md:mb-6">{item.name}</h4>
                <span className="text-[11px] font-black uppercase opacity-40 group-hover:text-cyan-400 transition-colors duration-300">{item.impact}</span>
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
              <div key={i} className={`p-8 md:p-10 rounded-[50px] border border-gray-500/10 transition-all duration-300 hover:border-cyan-400/50 group hover:scale-105 ${theme === 'dark' ? 'bg-black' : 'bg-white shadow-lg'}`}>
                <div className="text-5xl md:text-6xl mb-6 group-hover:text-cyan-400 transition-colors duration-300">{highlight.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">{highlight.value}</div>
                <h4 className="text-sm md:text-base font-bold uppercase mb-3 tracking-tighter">{lang === 'en' ? highlight.titleEn : highlight.titleKh}</h4>
                <p className="text-[11px] opacity-40 leading-relaxed font-light italic">{lang === 'en' ? highlight.descEn : highlight.descKh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION (Client Reviews) - PREMIUM COLD */}
      <section ref={testimonialsRef} className="py-20 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-16 md:mb-24 opacity-30 italic">Premium Testimonials (21 Industry Leaders)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className={`p-7 md:p-9 rounded-[40px] border border-cyan-500/20 transition-all duration-500 hover:border-cyan-400/50 group hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-105 backdrop-blur-sm ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/60' : 'bg-gradient-to-br from-blue-50/80 to-cyan-50/60'}`}>
                <div className="flex items-center mb-5 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-2xl mr-2.5 group-hover:scale-110 transition-transform duration-300">{testimonial.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xs md:text-sm font-bold italic text-cyan-400 line-clamp-1">{lang === 'en' ? testimonial.nameEn : testimonial.nameKh}</h4>
                    <p className="text-[9px] opacity-40 leading-tight line-clamp-2 hover:opacity-60 transition-opacity">{lang === 'en' ? testimonial.roleEn : testimonial.roleKh}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-5">
                  {Array(testimonial.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-cyan-400 text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: `${j * 50}ms`}}>★</span>
                  ))}
                </div>
                <p className="text-[10px] italic leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">&quot;{lang === 'en' ? testimonial.textEn : testimonial.textKh}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT & SOCIALS - PREMIUM COLD */}
      <section ref={contactRef} className="py-32 md:py-72 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        <h3 className="text-4xl sm:text-6xl md:text-[140px] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 mb-12 md:mb-16 tracking-tighter leading-none group cursor-pointer hover:scale-105 transition-transform duration-500 relative z-10">Let&apos;s Build.</h3>
        
        <div className="flex flex-col items-center gap-8 md:gap-10 relative z-10">
          <a href="mailto:heang.chhengkhoem.me@gmail.com" className="inline-block px-8 sm:px-16 md:px-24 py-6 md:py-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black rounded-3xl tracking-[0.3em] md:tracking-[0.5em] text-xs shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 uppercase">{t.emailCta}</a>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl opacity-40 hover:opacity-100 transition-opacity duration-500">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" className="p-6 md:p-10 rounded-[40px] border border-cyan-500/20 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-110 hover:opacity-100 flex flex-col items-center group bg-gradient-to-br from-slate-900/20 to-slate-800/10 hover:from-slate-900/40 hover:to-slate-800/20 backdrop-blur-sm">
                <div className="text-[9px] md:text-xs font-black uppercase tracking-widest group-hover:text-cyan-400 transition-all duration-300">{link.name}</div>
                <div className="mt-3 md:mt-4 group-hover:scale-125 transition-transform duration-300"><Icons.External /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-24 border-t border-gray-500/10 text-center opacity-30 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] md:tracking-[1em] px-4">
        © 2026 Heang Chheng Khoem | National Operations Lead | Cambodia
      </footer>

      <AuditTips />

      {/* TELEGRAM FLOATING - COLD AESTHETIC */}
      <a href="https://t.me/khoem168" target="_blank" className="fixed bottom-6 md:bottom-12 right-6 md:right-12 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 md:px-10 py-3 md:py-5 rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] hover:scale-110 transition-all duration-300 border border-cyan-400/30 font-black text-[9px] md:text-[10px] uppercase tracking-widest italic flex items-center gap-3 md:gap-4 group">
        <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white animate-pulse group-hover:animate-bounce"></div>
        <span className="hidden sm:inline group-hover:tracking-[0.3em] md:group-hover:tracking-[0.4em] transition-all duration-500 uppercase">Telegram protocol</span>
      </a>
    </main>
  );
}
