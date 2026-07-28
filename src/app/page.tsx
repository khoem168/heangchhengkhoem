'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaDatabase } from 'react-icons/fa';
import { MdOutlineSupportAgent, MdVideoSettings } from 'react-icons/md';
import { RiQrCodeLine } from 'react-icons/ri';
import {
  SiAngular,
  SiDotnet,
  SiFacebook,
  SiGithub,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiTelegram,
  SiTiktok,
  SiTypescript,
  SiYoutube,
} from 'react-icons/si';
import { TbAutomation, TbBrain, TbSeo } from 'react-icons/tb';

type Language = 'en' | 'kh';
type Theme = 'light' | 'dark';

type IconName =
  | 'arrow'
  | 'code'
  | 'external'
  | 'growth'
  | 'menu'
  | 'moon'
  | 'payment'
  | 'play'
  | 'spark'
  | 'sun'
  | 'support'
  | 'x';

const navigation = [
  { id: 'about', en: 'About', kh: 'អំពីខ្ញុំ' },
  { id: 'services', en: 'Services', kh: 'សេវាកម្ម' },
  { id: 'work', en: 'Work', kh: 'ស្នាដៃ' },
  { id: 'skills', en: 'Toolkit', kh: 'ជំនាញ' },
  { id: 'contact', en: 'Contact', kh: 'ទំនាក់ទំនង' },
];

const services = [
  {
    icon: 'code' as IconName,
    number: '01',
    label: 'Build',
    title: 'Product Engineering',
    titleKh: 'ការអភិវឌ្ឍផលិតផលឌីជីថល',
    description:
      'Reliable digital products designed around how your business actually works.',
    descriptionKh:
      'បង្កើតផលិតផលឌីជីថលដែលអាចទុកចិត្តបាន និងសមស្របនឹងរបៀបដំណើរការអាជីវកម្មរបស់អ្នក។',
    items: ['Websites & web applications', 'Business tools & automation', 'API & database integration'],
  },
  {
    icon: 'payment' as IconName,
    number: '02',
    label: 'Connect',
    title: 'Payments & Fintech',
    titleKh: 'ការទូទាត់ និងបច្ចេកវិទ្យាហិរញ្ញវត្ថុ',
    description:
      'Secure local payment experiences that feel simple for customers and teams.',
    descriptionKh:
      'បង្កើតបទពិសោធន៍ទូទាត់ប្រាក់ក្នុងស្រុកប្រកបដោយសុវត្ថិភាព និងងាយស្រួលប្រើ។',
    items: ['KHQR & Bakong integration', 'Automated payment workflows', 'Real-time status & callbacks'],
  },
  {
    icon: 'growth' as IconName,
    number: '03',
    label: 'Grow',
    title: 'Growth & Performance',
    titleKh: 'កំណើន និងប្រសិទ្ធភាព',
    description:
      'Practical growth systems that turn visibility into measurable business results.',
    descriptionKh:
      'ប្រព័ន្ធកំណើនជាក់ស្តែងដែលបម្លែងការមើលឃើញទៅជាលទ្ធផលអាជីវកម្មដែលអាចវាស់វែងបាន។',
    items: ['SEO foundations & strategy', 'Campaigns & analytics', 'Conversion improvement'],
  },
  {
    icon: 'play' as IconName,
    number: '04',
    label: 'Create',
    title: 'Content & Brand Systems',
    titleKh: 'មាតិកា និងប្រព័ន្ធម៉ាកយីហោ',
    description:
      'Consistent content workflows that help modern brands communicate with clarity.',
    descriptionKh:
      'ដំណើរការមាតិកាដែលជួយម៉ាកយីហោទំនើបប្រាស្រ័យទាក់ទងបានច្បាស់លាស់ និងស៊ីសង្វាក់គ្នា។',
    items: ['Video editing & production', 'Creative direction & scripts', 'Reusable content workflows'],
  },
];

const projects = [
  {
    type: 'Confidential operations platform',
    title: 'Multi-Branch Operations Hub',
    description:
      'A connected operating system for coordinating digital campaigns, technical support, and branch performance.',
    result: 'Unified workflow',
    tags: ['Operations', 'Analytics', 'Automation'],
    tone: 'green',
    image: '/images/project-operations.webp',
    imageAlt: 'Anonymized multi-branch operations dashboard interface',
    role: 'Product engineer & operations lead',
    timeline: 'Multi-phase delivery',
    stack: ['.NET Core', 'Oracle', 'Automation'],
    challenge: 'Coordinate national campaign activity, technical support, and branch reporting without fragmented workflows.',
    solution: 'A unified operating workflow that connects daily priorities, performance visibility, and response tracking.',
    responsibilities: ['Workflow architecture', 'Operations automation', 'Performance reporting'],
    outcomes: ['Centralized operations', 'Faster issue response', 'Clear branch visibility'],
  },
  {
    type: 'Fintech infrastructure',
    title: 'KHQR Payment Gateway',
    description:
      'A secure automated payment flow with real-time transaction checks and reliable callback handling.',
    result: 'Live status',
    tags: ['KHQR', 'Bakong API', 'Security'],
    tone: 'navy',
    image: '/images/project-payments.webp',
    imageAlt: 'Anonymized payment operations and callback monitoring dashboard',
    role: 'Integration developer',
    timeline: 'Phased integration',
    stack: ['.NET Core', 'REST APIs', 'KHQR & Bakong'],
    challenge: 'Make local digital payments reliable while keeping transaction status simple for customers and operators.',
    solution: 'A secure KHQR flow with real-time checks, callback handling, and clear operational states.',
    responsibilities: ['Payment flow design', 'Callback handling', 'Operational monitoring'],
    outcomes: ['Automated verification', 'Reliable callbacks', 'Simpler payment support'],
  },
  {
    type: 'Growth platform',
    title: 'SEO Command Center',
    description:
      'A performance dashboard for monitoring search visibility, branch conversion, and campaign return.',
    result: 'Clear visibility',
    tags: ['SEO', 'Dashboard', 'Strategy'],
    tone: 'sand',
    image: '/images/project-seo.webp',
    imageAlt: 'Anonymized search performance and conversion analytics dashboard',
    role: 'SEO & analytics lead',
    timeline: 'Ongoing optimization',
    stack: ['Technical SEO', 'Analytics', 'Next.js'],
    challenge: 'Turn scattered campaign and search data into decisions teams can understand and act on quickly.',
    solution: 'A focused dashboard that combines visibility, branch conversion, and campaign return in one view.',
    responsibilities: ['Technical SEO reviews', 'Dashboard design', 'Performance analysis'],
    outcomes: ['Shared performance view', 'Faster optimization', 'Measurable growth'],
  },
  {
    type: 'Content ecosystem',
    title: 'Narrative Media Hub',
    description:
      'A streamlined publishing workflow for high-retention video storytelling across multiple channels.',
    result: 'Reusable workflow',
    tags: ['Video', 'Content', 'Distribution'],
    tone: 'violet',
    image: '/images/project-media.webp',
    imageAlt: 'Anonymized content planning and publishing operations dashboard',
    role: 'Content systems lead',
    timeline: 'Repeatable production cycle',
    stack: ['Video editing', 'Automation', 'Distribution'],
    challenge: 'Publish consistent story-led content across channels without slowing down creative production.',
    solution: 'A repeatable workflow for planning, producing, reviewing, and distributing video content.',
    responsibilities: ['Editorial workflow', 'Production planning', 'Channel distribution'],
    outcomes: ['Consistent publishing', 'Reusable workflows', 'Stronger retention'],
  },
];

const skillGroups = [
  {
    icon: 'code' as IconName,
    number: '01',
    label: 'Build',
    title: 'Product Engineering',
    titleKh: 'ការអភិវឌ្ឍផលិតផល',
    description: 'Modern foundations for fast, reliable, and maintainable digital products.',
    descriptionKh: 'មូលដ្ឋានគ្រឹះទំនើបសម្រាប់ផលិតផលឌីជីថលដែលលឿន អាចទុកចិត្តបាន និងងាយថែទាំ។',
    skills: ['Angular', '.NET Core', 'Next.js', 'TypeScript'],
  },
  {
    icon: 'payment' as IconName,
    number: '02',
    label: 'Connect',
    title: 'Systems & Payments',
    titleKh: 'ប្រព័ន្ធ និងការទូទាត់',
    description: 'Secure connections between business data, services, and local payment infrastructure.',
    descriptionKh: 'ការតភ្ជាប់ប្រកបដោយសុវត្ថិភាពរវាងទិន្នន័យ សេវាកម្ម និងប្រព័ន្ធទូទាត់ក្នុងស្រុក។',
    skills: ['Oracle Database', 'REST APIs', 'KHQR & Bakong', 'Automation'],
  },
  {
    icon: 'growth' as IconName,
    number: '03',
    label: 'Grow',
    title: 'Growth & Creative',
    titleKh: 'កំណើន និងភាពច្នៃប្រឌិត',
    description: 'Practical capabilities for reaching audiences, creating content, and supporting users.',
    descriptionKh: 'ជំនាញជាក់ស្តែងសម្រាប់ការទាក់ទាញទស្សនិកជន បង្កើតមាតិកា និងគាំទ្រអ្នកប្រើប្រាស់។',
    skills: ['Technical SEO', 'Video Editing', 'AI Prompting', 'Technical Support'],
  },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/khoem168' },
  { name: 'Facebook', url: 'https://facebook.com/heang.chhengkhoem.me' },
  { name: 'YouTube', url: 'https://youtube.com/@khoemofficial' },
  { name: 'TikTok', url: 'https://tiktok.com/@khoem168' },
  { name: 'Telegram', url: 'https://t.me/khoem168' },
];

const skillIconMap: Record<string, IconType> = {
  Angular: SiAngular,
  '.NET Core': SiDotnet,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  'Oracle Database': FaDatabase,
  'REST APIs': SiOpenapiinitiative,
  'KHQR & Bakong': RiQrCodeLine,
  Automation: TbAutomation,
  'Technical SEO': TbSeo,
  'Video Editing': MdVideoSettings,
  'AI Prompting': TbBrain,
  'Technical Support': MdOutlineSupportAgent,
};

const socialIconMap: Record<string, IconType> = {
  GitHub: SiGithub,
  Facebook: SiFacebook,
  YouTube: SiYoutube,
  TikTok: SiTiktok,
  Telegram: SiTelegram,
};

const copy = {
  en: {
    availability: 'Available for selected projects',
    eyebrow: 'Software engineer · Digital strategist',
    heroTitle: 'I build digital products that move businesses forward.',
    heroDescription:
      'I connect software engineering, digital operations, and creative media to turn complex ideas into simple, useful experiences.',
    viewWork: 'View selected work',
    contactMe: 'Start a conversation',
    basedIn: 'Based in Cambodia',
    experience: 'Building across technology, operations & media',
    stats: [
      { value: '4', label: 'Connected disciplines' },
      { value: '12', label: 'Core capabilities' },
      { value: '2', label: 'Working languages' },
      { value: '1', label: 'Point of contact' },
    ],
    aboutLabel: 'About me',
    aboutTitle: 'One partner for technology, growth, and execution.',
    aboutText:
      'I am Heang Chheng Khoem, a software engineer and digital operations specialist. My work sits where reliable technology meets practical business growth—from enterprise applications and payment systems to SEO and multimedia production.',
    aboutTextTwo:
      'I care about clear communication, thoughtful systems, and work that creates a measurable result—not technology for its own sake.',
    roleLabel: 'Current focus',
    role: 'National Operations Lead',
    roleCompany: 'Digital systems, campaign operations, and scalable workflows.',
    servicesLabel: 'Capabilities',
    servicesTitle: 'From first idea to launch—and everything after.',
    servicesText:
      'Choose one focused service or combine them into a complete digital workflow built for your goals.',
    workLabel: 'Selected work',
    workTitle: 'Selected work, built for real-world use.',
    workText:
      'Project details are intentionally anonymized while showing the thinking, systems, and outcomes behind the work.',
    result: 'Outcome',
    toolkitLabel: 'Toolkit',
    toolkitTitle: 'The right tools for reliable results.',
    toolkitText:
      'I choose technology for clarity, performance, and long-term maintainability—not simply because it is trending.',
    processLabel: 'Working together',
    processTitle: 'Clear collaboration from first conversation to delivery.',
    process: [
      {
        title: 'Understand',
        text: 'We define the real problem, desired outcome, and constraints before choosing a solution.',
      },
      {
        title: 'Build',
        text: 'I design and deliver a focused system with consistent updates and practical decisions.',
      },
      {
        title: 'Improve',
        text: 'We measure what matters, learn from real usage, and keep the system effective over time.',
      },
    ],
    contactLabel: 'Let’s work together',
    contactTitle: 'Have an idea that needs a reliable digital partner?',
    contactText:
      'Tell me about your project, business goal, or technical challenge. I will reply with a clear next step.',
    email: 'Send me an email',
    footer: 'Software · Operations · Growth',
  },
  kh: {
    availability: 'ទទួលគម្រោងថ្មីដែលសមស្រប',
    eyebrow: 'វិស្វករកម្មវិធី · អ្នករៀបចំយុទ្ធសាស្ត្រឌីជីថល',
    heroTitle: 'ខ្ញុំបង្កើតផលិតផលឌីជីថលដែលជួយអាជីវកម្មរីកចម្រើន។',
    heroDescription:
      'ខ្ញុំភ្ជាប់ការអភិវឌ្ឍកម្មវិធី ប្រតិបត្តិការឌីជីថល និងមាតិកាច្នៃប្រឌិត ដើម្បីបម្លែងគំនិតស្មុគស្មាញទៅជាបទពិសោធន៍សាមញ្ញ និងមានប្រយោជន៍។',
    viewWork: 'មើលស្នាដៃ',
    contactMe: 'ចាប់ផ្តើមការសន្ទនា',
    basedIn: 'មានមូលដ្ឋាននៅកម្ពុជា',
    experience: 'ធ្វើការលើបច្ចេកវិទ្យា ប្រតិបត្តិការ និងមេឌៀ',
    stats: [
      { value: '4', label: 'ជំនាញដែលភ្ជាប់គ្នា' },
      { value: '12', label: 'សមត្ថភាពស្នូល' },
      { value: '2', label: 'ភាសាការងារ' },
      { value: '1', label: 'អ្នកទំនាក់ទំនង' },
    ],
    aboutLabel: 'អំពីខ្ញុំ',
    aboutTitle: 'ដៃគូម្នាក់សម្រាប់បច្ចេកវិទ្យា កំណើន និងការអនុវត្ត។',
    aboutText:
      'ខ្ញុំឈ្មោះ ហ៊ាង ឆេង ខឹម ជាវិស្វករកម្មវិធី និងអ្នកជំនាញប្រតិបត្តិការឌីជីថល។ ការងាររបស់ខ្ញុំភ្ជាប់បច្ចេកវិទ្យាដែលអាចទុកចិត្តបានជាមួយកំណើនអាជីវកម្មជាក់ស្តែង។',
    aboutTextTwo:
      'ខ្ញុំផ្តោតលើការទំនាក់ទំនងច្បាស់លាស់ ប្រព័ន្ធដែលគិតបានល្អ និងលទ្ធផលដែលអាចវាស់វែងបាន។',
    roleLabel: 'ការងារបច្ចុប្បន្ន',
    role: 'ប្រធានប្រតិបត្តិការថ្នាក់ជាតិ',
    roleCompany: 'ប្រព័ន្ធឌីជីថល ការគ្រប់គ្រងយុទ្ធនាការ និងដំណើរការដែលអាចពង្រីកបាន។',
    servicesLabel: 'សមត្ថភាព',
    servicesTitle: 'ចាប់ពីគំនិតដំបូងរហូតដល់ដាក់ឱ្យប្រើប្រាស់ និងបន្តកែលម្អ។',
    servicesText:
      'ជ្រើសរើសសេវាកម្មមួយ ឬភ្ជាប់សេវាកម្មទាំងនេះជាដំណើរការឌីជីថលពេញលេញសម្រាប់គោលដៅរបស់អ្នក។',
    workLabel: 'ស្នាដៃដែលបានជ្រើសរើស',
    workTitle: 'ស្នាដៃដែលបានជ្រើសរើស និងបង្កើតសម្រាប់ការប្រើប្រាស់ជាក់ស្តែង។',
    workText:
      'ព័ត៌មានគម្រោងត្រូវបានលាក់ឈ្មោះដោយចេតនា ដើម្បីគោរពភាពឯកជន ខណៈបង្ហាញពីដំណើរការ ប្រព័ន្ធ និងលទ្ធផល។',
    result: 'លទ្ធផល',
    toolkitLabel: 'ជំនាញ និងឧបករណ៍',
    toolkitTitle: 'ឧបករណ៍ត្រឹមត្រូវ សម្រាប់លទ្ធផលដែលអាចទុកចិត្តបាន។',
    toolkitText:
      'ខ្ញុំជ្រើសរើសបច្ចេកវិទ្យាដោយផ្តោតលើភាពច្បាស់លាស់ ល្បឿន និងភាពងាយស្រួលក្នុងការថែទាំរយៈពេលវែង។',
    processLabel: 'ការធ្វើការជាមួយគ្នា',
    processTitle: 'កិច្ចសហការច្បាស់លាស់ ចាប់ពីការសន្ទនាដំបូងរហូតដល់ការប្រគល់។',
    process: [
      {
        title: 'ស្វែងយល់',
        text: 'យើងកំណត់បញ្ហា លទ្ធផលដែលចង់បាន និងដែនកំណត់ មុនជ្រើសរើសដំណោះស្រាយ។',
      },
      {
        title: 'អភិវឌ្ឍ',
        text: 'ខ្ញុំរចនា និងអនុវត្តប្រព័ន្ធដោយមានការធ្វើបច្ចុប្បន្នភាពច្បាស់លាស់។',
      },
      {
        title: 'កែលម្អ',
        text: 'យើងវាស់វែងអ្វីដែលសំខាន់ រៀនពីការប្រើប្រាស់ពិត និងកែលម្អជាបន្តបន្ទាប់។',
      },
    ],
    contactLabel: 'ធ្វើការជាមួយគ្នា',
    contactTitle: 'មានគំនិតដែលត្រូវការដៃគូឌីជីថលដែលអាចទុកចិត្តបានមែនទេ?',
    contactText:
      'ប្រាប់ខ្ញុំអំពីគម្រោង គោលដៅអាជីវកម្ម ឬបញ្ហាបច្ចេកទេសរបស់អ្នក។ ខ្ញុំនឹងឆ្លើយតបជាមួយជំហានបន្ទាប់ដែលច្បាស់លាស់។',
    email: 'ផ្ញើអ៊ីមែលមកខ្ញុំ',
    footer: 'កម្មវិធី · ប្រតិបត្តិការ · កំណើន',
  },
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12" />,
    external: <path d="M14 5h5v5m0-5-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />,
    growth: <path d="M4 18 10 12l4 4 6-8m-5 0h5v5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    moon: <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" />,
    payment: <path d="M3 7h18v11H3zM3 10h18M7 15h3" />,
    play: <path d="m9 7 8 5-8 5V7Zm-5 0v10" />,
    spark: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Zm6 12 .7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15Z" />,
    sun: <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2m-2.3-5.7 1.4-1.4M4.9 19.1l1.4-1.4m11.4 0 1.4 1.4M4.9 4.9l1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
    support: <path d="M5 12a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-2v-6h4M5 13h4v6H7a2 2 0 0 1-2-2v-5Z" />,
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const t = copy[language];

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const sectionIds = ['top', ...navigation.map((item) => item.id)];

    const updateScrollState = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);

      const marker = window.scrollY + window.innerHeight * 0.34;
      let current = 'top';
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActiveSection(current);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -45px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    if (selectedProject === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={`site-shell theme-${theme} ${language === 'kh' ? 'font-khmer' : ''}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <span className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
        <div className="header-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Heang Chheng Khoem, home">
            <span className="brand-mark">H</span>
            <span className="brand-name">
              Heang
              <small>Chheng Khoem</small>
            </span>
          </a>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                className={activeSection === item.id ? 'is-active' : ''}
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                {item[language]}
              </a>
            ))}
            <a className="nav-cta" href="mailto:heang.chhengkhoem.me@gmail.com" onClick={closeMenu}>
              {t.contactMe}
              <Icon name="arrow" size={17} />
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="language-toggle"
              onClick={() => setLanguage(language === 'en' ? 'kh' : 'en')}
              aria-label={language === 'en' ? 'Switch to Khmer' : 'Switch to English'}
            >
              {language === 'en' ? 'ខ្មែរ' : 'EN'}
            </button>
            <button
              className="icon-button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18} />
            </button>
            <button
              className="icon-button menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={menuOpen ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>

      <div id="main-content">
        <section className="hero section-grid" id="top">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="content-container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="availability-pill">
                <span />
                {t.availability}
              </div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p className="hero-description">{t.heroDescription}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  {t.viewWork}
                  <Icon name="arrow" size={18} />
                </a>
                <a className="button button-secondary" href="mailto:heang.chhengkhoem.me@gmail.com">
                  {t.contactMe}
                </a>
              </div>
              <div className="hero-meta">
                <span>{t.basedIn}</span>
                <span className="meta-divider" />
                <span>{t.experience}</span>
              </div>
            </div>

            <div className="portrait-stage" data-reveal>
              <div className="portrait-backdrop">
                <span className="portrait-code">HCK / 168</span>
                <span className="portrait-year">2026</span>
                <Image
                  src="/images/profile-heang.webp"
                  alt="Heang Chheng Khoem by the sea at sunset"
                  fill
                  priority
                  sizes="(max-width: 900px) 80vw, 42vw"
                  className="portrait-image"
                />
              </div>
              <div className="floating-card floating-card-top">
                <span className="floating-icon"><Icon name="spark" size={18} /></span>
                <span>
                  <small>Current focus</small>
                  Digital systems
                </span>
              </div>
              <div className="floating-card floating-card-bottom">
                <span className="floating-icon"><Icon name="support" size={18} /></span>
                <span>
                  <small>Approach</small>
                  Build · operate · improve
                </span>
              </div>
            </div>
          </div>

          <div className="content-container stats-panel" data-reveal>
            {t.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="content-container about-grid">
            <div className="section-heading" data-reveal>
              <p className="section-label">{t.aboutLabel}</p>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="about-content" data-reveal>
              <p className="about-lead">{t.aboutText}</p>
              <p>{t.aboutTextTwo}</p>
              <div className="focus-card">
                <div className="focus-icon"><Icon name="growth" size={23} /></div>
                <div>
                  <span>{t.roleLabel}</span>
                  <strong>{t.role}</strong>
                  <p>{t.roleCompany}</p>
                </div>
              </div>
              <div className="personal-signature">
                <span>Heang.</span>
                <p>{language === 'en' ? 'Thoughtful systems · clear communication · useful outcomes' : 'ប្រព័ន្ធល្អ · ការទំនាក់ទំនងច្បាស់ · លទ្ធផលមានប្រយោជន៍'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="services">
          <div className="content-container">
            <div className="section-intro" data-reveal>
              <div className="section-heading">
                <p className="section-label">{t.servicesLabel}</p>
                <h2>{t.servicesTitle}</h2>
              </div>
              <p>{t.servicesText}</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" data-reveal key={service.number}>
                  <div className="service-top">
                    <span className="service-icon"><Icon name={service.icon} size={24} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <p className="service-label">{service.label}</p>
                  <h3>{language === 'en' ? service.title : service.titleKh}</h3>
                  <p>{language === 'en' ? service.description : service.descriptionKh}</p>
                  <ul className="service-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <span />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="content-container">
            <div className="section-intro" data-reveal>
              <div className="section-heading">
                <p className="section-label">{t.workLabel}</p>
                <h2>{t.workTitle}</h2>
              </div>
              <p>{t.workText}</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-${project.tone}`} data-reveal key={project.title}>
                  <div className="project-visual">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 1060px) 50vw, 580px"
                      className="project-image"
                    />
                  </div>
                  <div className="project-body">
                    <div className="project-card-meta">
                      <span>
                        0{index + 1} · {language === 'en' ? 'Interface concept' : 'គំរូចំណុចប្រទាក់'}
                      </span>
                      <strong>{project.result}</strong>
                    </div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <button className="project-open" onClick={() => setSelectedProject(index)}>
                      View case study
                      <Icon name="arrow" size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section toolkit-section" id="skills">
          <div className="content-container toolkit-content">
            <div className="toolkit-header" data-reveal>
              <div className="section-heading">
                <p className="section-label">{t.toolkitLabel}</p>
                <h2>{t.toolkitTitle}</h2>
              </div>
              <div className="toolkit-summary">
                <div className="summary-meta">
                  <span>12</span>
                  <strong>
                    {language === 'en' ? 'Connected capabilities' : 'ជំនាញដែលបានភ្ជាប់គ្នា'}
                  </strong>
                </div>
                <p>{t.toolkitText}</p>
              </div>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group-card" data-reveal key={group.number}>
                  <div className="skill-group-top">
                    <span className="skill-group-icon"><Icon name={group.icon} size={22} /></span>
                    <span className="skill-group-number">{group.number}</span>
                  </div>
                  <div className="skill-group-copy">
                    <p>{group.label}</p>
                    <h3>{language === 'en' ? group.title : group.titleKh}</h3>
                    <span>{language === 'en' ? group.description : group.descriptionKh}</span>
                  </div>
                  <div className="skill-list">
                    {group.skills.map((skill) => {
                      const PlatformIcon = skillIconMap[skill];
                      return (
                        <span key={skill} title={skill}>
                          <b className="skill-platform-icon"><PlatformIcon aria-hidden="true" /></b>
                          <em>{skill}</em>
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="content-container">
            <div className="section-heading process-heading" data-reveal>
              <p className="section-label">{t.processLabel}</p>
              <h2>{t.processTitle}</h2>
            </div>
            <div className="process-grid">
              {t.process.map((step, index) => (
                <article className="process-card" data-reveal key={step.title}>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </div>

      <footer className="site-footer" id="contact">
        <div className="content-container footer-clean" data-reveal>
          <div className="footer-clean-cta">
            <div>
              <div className="footer-clean-status">
                <span />
                {language === 'en' ? 'Available for selected projects' : 'ទទួលគម្រោងដែលសមស្រប'}
              </div>
              <h2>
                {language === 'en'
                  ? 'Let’s build something useful.'
                  : 'យើងបង្កើតអ្វីដែលមានប្រយោជន៍ជាមួយគ្នា។'}
              </h2>
              <p>
                {language === 'en'
                  ? 'Tell me about your idea, goal, or technical challenge.'
                  : 'ប្រាប់ខ្ញុំអំពីគំនិត គោលដៅ ឬបញ្ហាបច្ចេកទេសរបស់អ្នក។'}
              </p>
            </div>
            <a className="button footer-clean-button" href="mailto:heang.chhengkhoem.me@gmail.com">
              <span>{language === 'en' ? 'Start a conversation' : 'ចាប់ផ្តើមការសន្ទនា'}</span>
              <Icon name="arrow" size={18} />
            </a>
          </div>

          <div className="footer-clean-main">
            <div className="footer-clean-identity">
              <a href="#top" aria-label="Heang Chheng Khoem, back to top">
                <span>H</span>
                <div>
                  <strong>Heang Chheng Khoem</strong>
                  <small>{t.footer}</small>
                </div>
              </a>
            </div>

            <div className="footer-clean-socials" aria-label="Social platforms">
              {socialLinks.map((link) => {
                const SocialIcon = socialIconMap[link.name];
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    key={link.name}
                    aria-label={`Visit ${link.name}`}
                  >
                    <SocialIcon aria-hidden="true" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-clean-bottom">
            <p>© 2026 Heang Chheng Khoem. {language === 'en' ? 'All rights reserved.' : 'រក្សាសិទ្ធិគ្រប់យ៉ាង។'}</p>
            <a href="#top">
              {language === 'en' ? 'Back to top' : 'ត្រឡប់ទៅខាងលើ'}
              <Icon name="arrow" size={15} />
            </a>
          </div>
        </div>
      </footer>

      <div className="mobile-contact-bar">
        <a href="mailto:heang.chhengkhoem.me@gmail.com">{language === 'en' ? 'Email me' : 'ផ្ញើអ៊ីមែល'}</a>
        <a href="https://t.me/khoem168" target="_blank" rel="noreferrer">
          <SiTelegram aria-hidden="true" />
          Telegram
        </a>
      </div>

      {selectedProject !== null && (
        <div className="case-modal" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <article
            className={`case-dialog project-${projects[selectedProject].tone}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="case-close" onClick={() => setSelectedProject(null)} aria-label="Close case study" autoFocus>
              <Icon name="x" size={19} />
            </button>
            <div className="case-visual">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].imageAlt}
                fill
                sizes="(max-width: 820px) calc(100vw - 32px), 820px"
                className="case-image"
              />
              <span className="case-visual-shade" />
              <div className="case-visual-copy">
                <span>{projects[selectedProject].type}</span>
                <strong>{projects[selectedProject].result}</strong>
              </div>
            </div>
            <div className="case-content">
              <p className="section-label">Anonymized project · Representative interface</p>
              <h2 id="case-title">{projects[selectedProject].title}</h2>
              <p className="case-intro">{projects[selectedProject].description}</p>
              <div className="case-meta">
                <div>
                  <span>Role</span>
                  <strong>{projects[selectedProject].role}</strong>
                </div>
                <div>
                  <span>Timeline</span>
                  <strong>{projects[selectedProject].timeline}</strong>
                </div>
                <div>
                  <span>Core stack</span>
                  <strong>{projects[selectedProject].stack.join(' · ')}</strong>
                </div>
              </div>
              <div className="case-columns">
                <div>
                  <span>Challenge</span>
                  <p>{projects[selectedProject].challenge}</p>
                </div>
                <div>
                  <span>Solution</span>
                  <p>{projects[selectedProject].solution}</p>
                </div>
              </div>
              <div className="case-responsibilities">
                <span>Responsibilities</span>
                <div>
                  {projects[selectedProject].responsibilities.map((responsibility) => (
                    <strong key={responsibility}>{responsibility}</strong>
                  ))}
                </div>
              </div>
              <div className="case-outcomes">
                {projects[selectedProject].outcomes.map((outcome) => (
                  <span key={outcome}><i>✓</i>{outcome}</span>
                ))}
              </div>
              <a href="mailto:heang.chhengkhoem.me@gmail.com" className="button button-primary">
                Discuss a similar project
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
