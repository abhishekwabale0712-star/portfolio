/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Brain, 
  BarChart3, 
  Users, 
  Zap, 
  ExternalLink,
  ChevronRight,
  FileText,
  Target,
  TrendingUp,
  Database,
  Layout,
  Smartphone,
  Globe,
  Download,
  Figma,
  GraduationCap,
  Award,
  X,
  Plus,
  Link as LinkIcon,
  Sparkles,
  Cpu
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSection(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeSection]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const cardVariant = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    viewport: { once: true }
  };

  const statVariant = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" }
    },
    viewport: { once: true }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const featuredWork = [
    {
      title: "Associate Product Manager (Product Trainee)",
      company: "Travelxp",
      location: "Mumbai, India",
      period: "Oct 2025 – Present",
      impact: "40%",
      impactLabel: "Manual Effort Reduction",
      bullets: [
        "Led development of an AI-powered Flight Quotes feature for internal CMS users using Vercel AI SDK, automating quote generation and reducing manual effort by 40%, significantly improving operational efficiency.",
        "Integrated E-Trav as a new supplier to enhance data accuracy across flight listings, resulting in a 12% increase in bookings.",
        "Identified gaps in baggage information visibility across flight listings that were causing user drop-offs, and collaborated with engineering to implement structured responses and fallbacks, reducing booking drop-offs by 20% and improving flow reliability.",
        "Introduced EMI functionality into the platform by integrating JusPay's ExpressCheckout method, expanding payment flexibility for end users.",
        "Worked extensively on the CMS to streamline internal workflows, enhance process efficiency, and enable faster content and data management for operations teams.",
        "Leveraged Claude Code to author and execute comprehensive test suites, significantly reducing manual QA effort and accelerating release cycles."
      ],
      tags: ["AI/ML", "Vercel AI SDK", "CMS", "Claude Code"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Product Consultant, Part-Time",
      company: "BitZetta",
      location: "Remote",
      period: "Jan 2025 – Oct 2025",
      impact: "2",
      impactLabel: "SMB Tools Delivered",
      bullets: [
        "Owned product discovery-to-delivery for two SMB automation tools (Quotation and Billing Systems) used by interior and pharmacy businesses.",
        "Contributed to product strategy and roadmap planning for an AI-powered EdTech platform, defining personalized learning features that adapt content based on student pace, preferences, and performance.",
        "Supported early-stage product execution by creating use cases and end-to-end user flows, and collaborating with engineering teams to prioritize features and resolve product issues, improving overall learner experience."
      ],
      tags: ["Strategy", "Discovery", "EdTech", "AI"],
      color: "from-indigo-600 to-purple-500"
    },
    {
      title: "Product Manager – Internship",
      company: "WebMobi",
      location: "Remote, Berlin, Germany",
      period: "June 2024 – Dec 2025",
      impact: "30%",
      impactLabel: "Engagement Growth",
      bullets: [
        "Owned product vision & roadmap for WebMobi’s Nexalink digital business card platform, driving 30% user engagement growth.",
        "Defined product requirements through Google Analytics insights and prioritized features (QR code sharing, custom links, integrations), boosting feature adoption by 25%.",
        "Conducted A/B tests on card designs and sharing methods, improving usability and increasing engagement by 20%."
      ],
      tags: ["Growth", "A/B Testing", "Analytics"],
      color: "from-rose-600 to-orange-500"
    },
    {
      title: "Product Manager – Working Student",
      company: "Tenera (B2B SaaS, Startup)",
      location: "Berlin, Germany",
      period: "Mar 2022 – Oct 2022",
      impact: "15%",
      impactLabel: "Retention Boost",
      bullets: [
        "Conducted research and user interviews to improve tender and bidding workflows, boosting efficiency and adoption by 10%.",
        "Managed roadmap, sprints, and backlog with developers, delivering faster updates and improving retention by 15%.",
        "Defined requirements and PRD for translation feature, enabling multi-language support and expanding adoption in construction markets."
      ],
      tags: ["B2B SaaS", "Research", "Roadmap"],
      color: "from-emerald-600 to-teal-500"
    }
  ];

  const caseStudies = [
    {
      title: "The Good Bug",
      focus: "Retention & Repeat Purchase",
      impact: "Retention Loop",
      problem: "Increasing repeat purchase behavior for a health-tech brand through strategic retention loops.",
      prototype: "https://prototype-abhishekwabale-theboodbug.lovable.app/",
      file: "https://drive.google.com/file/d/19bJ4hXLRQcCFIN2W-QNriabY543RSoxb/view?usp=drive_link",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "NoBroker Consumer Services",
      focus: "Monetization Strategy",
      impact: "Revenue Growth",
      problem: "Increasing revenue from consumer services through a 'Lovable' MVP addressing rental pain points.",
      prototype: "https://ghar-seva-booking-app.lovable.app/",
      file: "https://drive.google.com/file/d/17b3UltPV_pF7Beb9wRcnGipj4CULLAA8/view?usp=drive_link",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Zomato Data & Experience",
      focus: "Analytics & Metrics",
      impact: "Data Insights",
      problem: "Analyzing food delivery experience in Tier-1 cities using data-driven insights and metrics.",
      notion: "https://www.notion.so/Analytics-and-Metrics-Zomato-s-food-delivery-experience-in-Tier-1-cities-240d33707898805e9555d5b177ab117f?pvs=25",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Amazon Prime Video",
      focus: "Growth & Experimentation",
      impact: "RICE Prioritization",
      problem: "Designing growth experiments with RICE prioritization to drive Prime subscriptions over competitors.",
      notion: "https://www.notion.so/Amazon-Prime-Video-222d33707898809dafd8c4a20e5fa501?pvs=25",
      figma: "https://www.figma.com/board/ugBqwmu0d1fMLq72aKXzU9/Prime-Video?node-id=0-1&t=6hMEptak3YIb8yLP-1",
      icon: <Layout className="w-5 h-5" />
    },
    {
      title: "Growth Loop Design for Threads",
      focus: "Growth Loops",
      impact: "Viral Mechanics",
      problem: "Identifying and designing viral growth loops for Instagram Threads to sustain user growth.",
      notion: "https://www.notion.so/Growth-Loops-Identification-Instagram-Threads-248d337078988085a4dbe4758069b620",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Fitness Platform Engagement",
      focus: "User Engagement",
      impact: "Retention Loops",
      problem: "Improving user engagement and repeat purchase behavior for a fitness-focused platform.",
      file: "https://drive.google.com/file/d/1endwjy-9Jj7AumrHm6cfwK9-YObfcMU_/view",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Monthly Expenses Tracker",
      focus: "Dashboard & UX",
      impact: "Financial Awareness",
      problem: "Empowering smarter spending habits through a tracker dashboard built for user financial awareness.",
      prototype: "https://rupee-flow-prototype.lovable.app/",
      notion: "https://www.notion.so/Dashboard-Using-Lovable-for-Users-to-track-monthly-expenses-and-Empowering-Smarter-Spending-Habits-229d337078988033a737f0244c78e8a7?pvs=25",
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  const productThinking = [
    {
      title: "Data-Driven Decisions",
      description: "Leveraging quantitative analytics to validate hypotheses and drive product roadmap.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "RICE Prioritization",
      description: "Rigorous framework to balance Reach, Impact, Confidence, and Effort for ROI.",
      icon: <Target className="w-6 h-6 text-purple-600" />
    },
    {
      title: "User-First Mindset",
      description: "Deep-diving into user pain points through qualitative research and empathy.",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Measurable Impact",
      description: "Obsessed with metrics that matter—retention, conversion, and satisfaction.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    }
  ];

  const education = [
    {
      degree: "MSc, International Technology Transfer Management",
      institution: "bbw Hochschule Berlin",
      period: "Sept 2023",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "B.E., Mechanical Engineering",
      institution: "SPPU Pune",
      period: "July 2019",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Product Management Launchpad",
      institution: "Airtribe",
      period: "Sept 2025",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const certifications = [
    { name: "Product Strategy", issuer: "Product School", year: "2025" },
    { name: "AI for PM", issuer: "Pendo.io", year: "2024" },
    { name: "CSPO®", issuer: "Scrum Alliance", year: "2023" },
    { name: "Software PM", issuer: "Univ. of Alberta", year: "2022" }
  ];

  const aiExpertise = {
    models: ["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3"],
    tools: ["Vercel AI SDK", "LangChain", "OpenAI API", "Anthropic API", "Google AI Studio", "Claude Code"],
    capabilities: ["Prompt Engineering", "AI Agents", "RAG Workflows", "AI-First UX Design", "Workflow Automation"],
    projects: [
      {
        name: "AI Flight Quotes",
        description: "Automated flight quote generation reducing manual effort by 40% through intelligent parsing and response generation.",
        tech: "Vercel AI SDK, Claude"
      },
      {
        name: "AI EdTech Roadmap",
        description: "Personalized learning features that adapt to student performance and learning style using LLM-driven insights.",
        tech: "LLM-driven personalization"
      }
    ]
  };

  const skills = {
    Product: ["Discovery & Research", "Roadmapping", "Go-to-Market", "MVP Definition", "Experimentation", "Product Analytics", "KPI Tracking"],
    Technical: ["JSON", "SQL", "Claude Code", "VS Code", "Amplitude", "Google Analytics", "Figma", "Jira", "Notion", "Google AI Studio", "GitHub"],
    Frameworks: ["OKRs", "RICE Prioritization", "Agile/Scrum"],
    Collaboration: ["Stakeholder Alignment", "Cross-Functional Leadership", "Problem Solving"]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-colors border border-slate-700/50"
          >
            <ArrowRight className="w-6 h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <a href="#" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-display">
              Abhishek Wabale
            </a>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Associate Product Manager</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-4 lg:pt-44 lg:pb-6 overflow-hidden">
        <motion.div 
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent blur-3xl opacity-60 -z-10" 
        />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-blue-50/50 border border-blue-100/50 text-blue-700 text-[10px] font-extrabold uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
            Product Manager | AI | Growth
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.02] font-display"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">AI-driven</span> products with measurable impact
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Product professional with 2+ years building AI-first features, automation tools, and 0→1 products. Hands-on with LLMs, AI agents, and rapid prototyping.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.a 
              href="#dashboard" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-slate-200 hover:shadow-blue-200"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection('resume')}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-200 flex justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-blue-600"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section (Main Screen) */}
      <section id="about-me" className="pt-4 pb-4 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <Brain className="w-3.5 h-3.5" />
              About Me
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight font-display">Crafting Products with <span className="text-blue-600">Purpose & Precision</span></h2>
            <div className="space-y-5 text-slate-600 font-medium leading-relaxed text-lg mb-10 max-w-3xl">
              <p>
                I am a <span className="text-slate-900 font-bold">Product Professional</span> with 2+ years of experience building AI-first features, automation tools, and 0→1 products across travel, SaaS, and networking domains.
              </p>
              <p>
                Hands-on with <span className="text-blue-600 font-bold">LLMs, AI agents, and rapid prototyping</span> — from AI-powered flight quotes to workflow automation using Claude Code. Wired for cross-functional execution and shipping fast.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-6 border-t border-slate-100">
              <motion.div 
                variants={statVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-100/50">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-display">2+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Exp</div>
                </div>
              </motion.div>
              <motion.div 
                variants={statVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 shadow-sm border border-purple-100/50">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-display">AI</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Focused</div>
                </div>
              </motion.div>
              <motion.div 
                variants={statVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100/50">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-display">Growth</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mindset</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Grid Section */}
      <section id="dashboard" className="pt-4 pb-16 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <Layout className="w-3.5 h-3.5" />
              Portfolio Dashboard
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tight font-display">Explore My Work</h2>
            <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
              A comprehensive view of my product journey, from strategic case studies to technical experiments and core competencies.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Work Experience Card */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveSection('work')}
              className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50/50 opacity-50 blur-3xl -mr-20 -mt-20 group-hover:bg-indigo-100 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0 border border-indigo-100/50">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black font-display">Work Experience</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">Professional journey at Travelxp and WebMobi, delivering high-impact products.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100/50 uppercase tracking-widest">40% Effort Reduction</span>
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100/50 uppercase tracking-widest">30% Growth</span>
                </div>
                <div className="flex items-center text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Case Studies Card */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveSection('case-studies')}
              className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50/50 opacity-50 blur-3xl -mr-20 -mt-20 group-hover:bg-purple-100 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shrink-0 border border-purple-100/50">
                    <Layout className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black font-display">Case Studies</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">Deep dives into product discovery, strategy, and execution for personal projects and experiments.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black text-purple-600 bg-purple-50 px-2 py-1 rounded-md border border-purple-100/50 uppercase tracking-widest">Strategy</span>
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100/50 uppercase tracking-widest">Growth</span>
                </div>
                <div className="flex items-center text-purple-600 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* AI & LLM Card */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveSection('ai-llm')}
              className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 opacity-50 blur-3xl -mr-20 -mt-20 group-hover:bg-blue-100 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0 border border-blue-100/50">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black font-display">AI & LLMs</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">Leveraging state-of-the-art models and AI-first frameworks to build intelligent product experiences.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100/50 uppercase tracking-widest">Prompt Eng</span>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100/50 uppercase tracking-widest">Agents</span>
                </div>
                <div className="flex items-center text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  View Expertise <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveSection('education')}
              className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50/50 opacity-50 blur-3xl -mr-20 -mt-20 group-hover:bg-orange-100 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shrink-0 border border-orange-100/50">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black font-display">Education</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">Academic background and professional certifications in Product Management.</p>
                <div className="flex items-center text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveSection('skills')}
              className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50/50 opacity-50 blur-3xl -mr-20 -mt-20 group-hover:bg-pink-100 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0 border border-pink-100/50">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black font-display">Skills</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">Technical toolkit across the product lifecycle, from discovery to analytics.</p>
                <div className="flex items-center text-pink-600 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Product Thinking Card */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveSection('thinking')}
              className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50/50 opacity-50 blur-3xl -mr-20 -mt-20 group-hover:bg-amber-100 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shrink-0 border border-amber-100/50">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black font-display">Product Thinking</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">My approach to bridging the gap between complex technology and meaningful user experiences.</p>
                <div className="flex items-center text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {activeSection && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSection(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between shrink-0">
                <h2 className="text-3xl font-black tracking-tight capitalize">
                  {activeSection.replace('-', ' ')}
                </h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="overflow-y-auto p-8 sm:p-12 custom-scrollbar">
                {activeSection === 'resume' && (
                  <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end mb-6 no-print">
                      <button 
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        Print / Save as PDF
                      </button>
                    </div>
                    <div className="bg-white p-8 sm:p-16 shadow-[0_0_50px_rgba(0,0,0,0.05)] rounded-2xl border border-slate-100 print:shadow-none print:border-none print:p-0">
                      {/* Resume Header */}
                      <div className="border-b-2 border-slate-900 pb-8 mb-10">
                        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Abhishek Wabale</h1>
                        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-600">
                          <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-600" /> abhishekkwabale@gmail.com</span>
                          <span className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-blue-600" /> linkedin.com/in/abhishekwabale</span>
                          <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-blue-600" /> Mumbai, India</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-12">
                        {/* Professional Summary */}
                        <section>
                          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Professional Summary</h2>
                          <p className="text-slate-700 leading-relaxed font-medium text-lg">
                            Product professional with 2+ years building AI-first features, automation tools, and 0→1 products across travel, SaaS, and networking domains. 
                            Hands-on with LLMs, AI agents, and rapid prototyping — from AI-powered flight quotes to workflow automation using Claude Code. 
                            Wired for cross-functional execution, efficiency-first thinking, and shipping fast.
                          </p>
                        </section>

                        {/* Experience */}
                        <section>
                          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-8">Work Experience</h2>
                          <div className="space-y-10">
                            {featuredWork.map((work, index) => (
                              <div key={index} className="relative pl-8 border-l-2 border-slate-100">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600" />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                                  <h3 className="text-2xl font-display font-black text-slate-900">{work.title}</h3>
                                  <div className="flex items-center gap-3">
                                    {work.impact && (
                                      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/50 uppercase tracking-widest">
                                        {work.impact} {work.impactLabel}
                                      </span>
                                    )}
                                    <span className="text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{work.period}</span>
                                  </div>
                                </div>
                                <div className="text-blue-600 font-bold text-lg mb-4">{work.company} • {work.location}</div>
                                <ul className="space-y-3">
                                  {work.bullets.map((bullet, i) => (
                                    <li key={i} className="flex gap-4 text-slate-600 text-base leading-relaxed font-medium">
                                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </section>

                        <div className="grid md:grid-cols-2 gap-12">
                          {/* Skills */}
                          <section>
                            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-6">Core Competencies</h2>
                            <div className="space-y-6">
                              {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                  <h4 className="font-black text-slate-900 mb-3 text-xs uppercase tracking-widest">{category}</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {items.map((skill, i) => (
                                      <span key={i} className="text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{skill}</span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </section>

                          <div className="space-y-12">
                            {/* Education */}
                            <section>
                              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-6">Education</h2>
                              <div className="space-y-6">
                                {education.map((edu, index) => (
                                  <div key={index}>
                                    <h4 className="font-display font-black text-slate-900 text-xl">{edu.degree}</h4>
                                    <div className="text-sm font-bold text-slate-500">{edu.institution}</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{edu.period}</div>
                                  </div>
                                ))}
                              </div>
                            </section>

                            {/* Certifications */}
                            <section>
                              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-6">Certifications</h2>
                              <div className="grid grid-cols-1 gap-4">
                                {certifications.map((cert, index) => (
                                  <div key={index} className="flex items-center gap-3">
                                    <Award className="w-4 h-4 text-purple-600" />
                                    <div>
                                      <div className="font-display font-black text-slate-900 text-sm">{cert.name}</div>
                                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{cert.issuer} • {cert.year}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'work' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredWork.map((work, index) => (
                      <div key={index} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{work.company}</span>
                            <h3 className="text-xl font-display font-black mt-3">{work.title}</h3>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{work.period}</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                          {work.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed font-medium">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                          <div>
                            <div className="text-3xl font-black text-slate-900 flex items-center gap-2">
                              {work.impact}
                              <TrendingUp className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{work.impactLabel}</div>
                          </div>
                          <div className="flex gap-2">
                            {work.tags.map((tag, i) => (
                              <span key={i} className="text-[10px] font-bold text-slate-400 uppercase tracking-tight border border-slate-200 px-2 py-1 rounded-lg bg-white">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 'case-studies' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                      <div key={index} className="bg-white p-8 rounded-[32px] border border-slate-100 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100/50">
                              {study.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-display font-black text-slate-900">{study.title}</h3>
                              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">{study.focus}</span>
                            </div>
                          </div>
                          {study.impact && (
                            <div className="text-right">
                              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact</div>
                              <div className="text-sm font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100/50">{study.impact}</div>
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">The Problem</h4>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">{study.problem}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-50">
                          {study.prototype && (
                            <a href={study.prototype} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                              <Globe className="w-4 h-4" /> Prototype
                            </a>
                          )}
                          {study.notion && (
                            <a href={study.notion} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                              <LinkIcon className="w-4 h-4" /> Notion
                            </a>
                          )}
                          {study.file && (
                            <a href={study.file} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                              <FileText className="w-4 h-4" /> Case Study
                            </a>
                          )}
                          {study.figma && (
                            <a href={study.figma} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                              <Layout className="w-4 h-4" /> Figma
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 'ai-llm' && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-12">
                      <div>
                        <h3 className="text-2xl font-display font-black mb-8 flex items-center gap-3">
                          <Sparkles className="w-6 h-6 text-blue-600" />
                          AI Capabilities
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {aiExpertise.capabilities.map((cap, i) => (
                            <span key={i} className="px-5 py-3 bg-blue-50 text-blue-700 border border-blue-100 rounded-2xl text-xs font-black uppercase tracking-wider shadow-sm">
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-display font-black mb-8 flex items-center gap-3">
                          <Brain className="w-6 h-6 text-purple-600" />
                          Models & Tools
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">LLMs</h4>
                            <div className="flex flex-wrap gap-2">
                              {aiExpertise.models.map((m, i) => (
                                <span key={i} className="text-xs font-bold text-slate-700 block mb-1" style={{ display: 'block' }}>{m}</span>
                              ))}
                            </div>
                          </div>
                          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {aiExpertise.tools.map((t, i) => (
                                <span key={i} className="text-xs font-bold text-slate-700 block mb-1" style={{ display: 'block' }}>{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-black mb-8 flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-emerald-600" />
                        AI-First Projects
                      </h3>
                      <div className="space-y-6">
                        {aiExpertise.projects.map((project, i) => (
                          <div key={i} className="p-8 bg-slate-900 rounded-[32px] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/40 transition-colors" />
                            <div className="relative z-10">
                              <h4 className="text-xl font-black mb-3">{project.name}</h4>
                              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">{project.description}</p>
                              <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-lg inline-block border border-blue-500/20">
                                {project.tech}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'education' && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-display font-black mb-8">Academic Background</h3>
                      <div className="space-y-8">
                        {education.map((edu, index) => (
                          <div key={index} className="flex gap-6">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-100">
                              <GraduationCap className="w-7 h-7" />
                            </div>
                            <div>
                              <h4 className="text-xl font-black mb-1">{edu.degree}</h4>
                              <div className="text-slate-500 font-bold">{edu.institution}</div>
                              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{edu.period}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-black mb-8">Certifications</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                          <div key={index} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm shrink-0">
                                <Award className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-black text-sm text-slate-900 mb-0.5">{cert.name}</h4>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{cert.issuer} • {cert.year}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'skills' && (
                  <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-xl font-display font-black mb-8 flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {items.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-2 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-wider hover:border-blue-300 hover:text-blue-600 transition-all cursor-default shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 'thinking' && (
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <h3 className="text-2xl font-display font-black mb-8 tracking-tight">Product Thinking</h3>
                      <div className="grid sm:grid-cols-2 gap-8">
                        {productThinking.map((item, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-4 mb-2">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                                {item.icon}
                              </div>
                              <h4 className="font-display font-black text-base">{item.title}</h4>
                            </div>
                            <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative bg-slate-900 rounded-[32px] p-10 text-white overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -mr-32 -mt-32" />
                      <div className="relative z-10">
                        <div className="w-10 h-0.5 bg-blue-500 mb-6" />
                        <blockquote className="text-2xl font-bold leading-tight mb-8 italic">
                          "I bridge the gap between complex technology and meaningful user experiences through rigorous discovery and data-driven execution."
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-black text-lg">AW</div>
                          <div>
                            <div className="font-black text-base">Abhishek Wabale</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Associate Product Manager</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-0" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-6xl lg:text-8xl font-display font-black mb-10 tracking-tighter">Let's Connect</h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Open to discussing product strategy, growth experiments, or the future of AI in SaaS.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:abhishekkwabale@gmail.com" 
                className="flex items-center gap-4 bg-white text-slate-900 px-12 py-6 rounded-xl font-black text-lg hover:bg-slate-100 transition-all shadow-2xl group"
              >
                <Mail className="w-6 h-6" />
                Email Me
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </a>
              <a 
                href="https://linkedin.com/in/abhishekwabale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-xl font-black text-lg hover:bg-white/20 transition-all"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white font-display font-black text-3xl tracking-tight">Abhishek Wabale</div>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Associate Product Manager</div>
          </div>
          <div className="text-slate-500 text-sm font-medium opacity-60">
            © {new Date().getFullYear()} Abhishek Wabale. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/abhishek-wabale-a7b322189/" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abhishekkwabale@gmail.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
