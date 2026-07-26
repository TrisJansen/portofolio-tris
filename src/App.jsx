import { useState } from "react";
import {
  Menu, X, ArrowRight, CheckCircle2, ClipboardCheck, PieChart, Search,
  Bot, Presentation, Settings, Code2, Database, Send, FlaskConical,
  MapPin, Mail, Phone, Briefcase, Calendar, Award, Quote, Sparkles,
  Monitor, BookOpen, Users, ListTodo, Kanban, GitBranch, Sheet,
  FileText, Bug, Brain, Cpu, Download, MessageCircle
} from "lucide-react";

import fotoHero from "./assets/DSC01121.JPG";
import fotogalery1 from "./assets/speaking.JPG";
import fotogalery2 from "./assets/Partner.jpg";
import fotogalery3 from "./assets/Google.jpg";
import fotogalery4 from "./assets/Carvil.jpg";
import fotogalery5 from "./assets/ap1.jpeg";
import fotogalery6 from "./assets/apbertiga.jpeg";
import fotogalery7 from "./assets/aptim.jpeg";

// ─── Social Icon Components ───────────────────────────────────────────────────
function Linkedin({ size = 16, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
    </svg>
  );
}

function Github({ size = 16, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function Instagram({ size = 16, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 24, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "6282361925781"; // +62 823 6192 5781
const WHATSAPP_MESSAGE = encodeURIComponent("Halo Tris, saya ingin terhubung dengan Anda mengenai kolaborasi proyek.");

// ⬇ Ganti dengan URL publik file CV Anda (Google Drive, Dropbox, dll.)
// Contoh Google Drive: ubah link share menjadi link direct download
// https://drive.google.com/uc?export=download&id=FILE_ID_ANDA
const CV_DOWNLOAD_URL = "/cv-tris-jansen.pdf"; // Ganti dengan URL CV Anda

const SOCIAL_LINKS = [
  { id: "linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/trisjansen/", label: "LinkedIn" },
  { id: "github", icon: Github, url: "https://github.com/TrisJansen", label: "GitHub" },
  { id: "instagram", icon: Instagram, url: "https://www.instagram.com/jansen_ltoruan/", label: "Instagram" },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Galeri" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

const STATS = [
  { icon: Briefcase, value: "10+", label: "Proyek Dihadapi" },
  { icon: Calendar, value: "3+", label: "Tahun Pengalaman" },
  { icon: Award, value: "100%", label: "Komitmen Kualitas" },
];

const HIGHLIGHTS = [
  { icon: Users, title: "Leadership", desc: "Team mentoring, delegation & strategic alignment" },
  { icon: ClipboardCheck, title: "Quality Software", desc: "Standar & best practices QA" },
  { icon: PieChart, title: "Business Analyst", desc: "Requirement & risk analysis" },
  { icon: Search, title: "Manual Testing", desc: "Test case & exploratory testing" },
  { icon: Bot, title: "Automation Testing", desc: "Framework & script automation" },
  { icon: Settings, title: "System Implementor", desc: "End-to-end solution delivery" },
  { icon: Monitor, title: "Demo System", desc: "UAT testing & stakeholder walkthrough" },
  { icon: BookOpen, title: "System Training", desc: "End-user onboarding & knowledge transfer" },
  { icon: Presentation, title: "Presenting", desc: "Reporting & stakeholder presentation" },
];

const GALLERY = [
  { src: fotogalery1, caption: "" },
  { src: fotogalery2, caption: "" },
  { src: fotogalery3, caption: "" },
  { src: fotogalery4, caption: "" },
  { src: fotogalery5, caption: "" },
  { src: fotogalery6, caption: "" },
  { src: fotogalery7, caption: "" },
];

const SKILLS = [
  { icon: Users, title: "Leadership", desc: "Team mentoring, delegation & strategic alignment" },
  { icon: ClipboardCheck, title: "Quality Software", desc: "Standar & best practices QA" },
  { icon: PieChart, title: "Business Analyst", desc: "Requirement & risk analysis" },
  { icon: Search, title: "Manual Testing", desc: "Test case & exploratory testing" },
  { icon: Bot, title: "Automation Testing", desc: "Framework & script automation" },
  { icon: Settings, title: "System Implementor", desc: "End-to-end solution delivery" },
  { icon: Monitor, title: "Demo System", desc: "UAT testing & stakeholder walkthrough" },
  { icon: BookOpen, title: "System Training", desc: "End-user onboarding & knowledge transfer" },
  { icon: Presentation, title: "Presenting", desc: "Reporting & stakeholder presentation" },
];

const TOOLS = [
  { icon: Code2, name: "VS Code" },
  { icon: Database, name: "SQL" },
  { icon: Send, name: "Postman" },
  { icon: FlaskConical, name: "Katalon" },
  { icon: ListTodo, name: "ClickUp" },
  { icon: Kanban, name: "Jira" },
  { icon: GitBranch, name: "Git" },
  { icon: Sheet, name: "Google Sheets" },
  { icon: FileText, name: "Google Docs" },
  { icon: Bug, name: "Chrome DevTools" },
  { icon: Sparkles, name: "ChatGPT" },
  { icon: Brain, name: "Claude AI" },
  { icon: Cpu, name: "Copilot" },
];

const EXPERIENCE = [
  {
    number: "01",
    title: "Forwarding Management System (Oaktree.id)",
    role: "Lead QA & Quality Assurance · 3 Tahun (Saat Ini)",
    desc: "Memimpin tim QA dan bertanggung jawab penuh atas kualitas sistem. Melakukan manual testing (smoke, regression), API testing terintegrasi, serta semi-automation testing. Berkoordinasi erat dengan Developer, Project Manager, dan pemangku kepentingan untuk memastikan flow pembuatan dokumen shipment, transaksi, integrasi ERP, dan reporting berjalan akurat dan handal. Aktif dalam demo sistem, analisis kebutuhan, implementasi fitur, serta pelatihan user untuk adopsi sistem yang optimal.",
  },
  {
    number: "02",
    title: "Consolidating Accounting System (Bambootree.id)",
    role: "Quality Assurance · 3 Tahun (Saat Ini)",
    desc: "Menguji dan memvalidasi integrasi antar sistem, baik melalui API maupun import data Excel. Berkoordinasi dengan Developer dan Project Manager untuk memastikan alur bisnis sesuai requirement. Menerapkan manual testing, API testing terintegrasi, dan regression testing untuk menjaga stabilitas sistem akuntansi konsolidasi.",
  },
  {
    number: "03",
    title: "Distribution Management System (Carvil)",
    role: "Junior Project Manager & Quality Assurance · 4 Bulan",
    desc: "Menangani manajemen timeline dan koordinasi tim developer serta Project Manager Officer. Bertanggung jawab atas validasi data, visualisasi dashboard, dan integrasi ERP. Melakukan manual testing dan API testing untuk memastikan akurasi distribusi dan performa sistem juga aktif dalam melakukan demo system, implementasi system dan pelatihan user.",
  },
  {
    number: "04",
    title: "Working Progress Management System",
    role: "Lead Quality Assurance · 3 Bulan",
    desc: "Memimpin tim QA dalam menguji fungsionalitas, visual, dan user experience sistem manajemen progres kerja, aktif melakukan demo System dan training user. Berkolaborasi dengan Developer dan Project Manager untuk validasi data serta memberikan rekomendasi perbaikan selama tahap development, memastikan sistem sesuai kebutuhan pengguna.",
  },
  {
    number: "05",
    title: "Marketplace Platform (Holliwings.Apparel.com)",
    role: "Quality Assurance (Freelance) · 3 Minggu",
    desc: "Bergabung sebagai QA freelance, melakukan pengujian fungsional end-to-end dan memberikan rekomendasi perbaikan kepada tim development dan project manager selama proses development berlangsung.",
  },
  {
    number: "+6",
    title: "Berbagai Proyek Lainnya",
    role: "Lead QA · 1+ Tahun",
    desc: "Menangani proyek-proyek beragam seperti Procurement Management System, Palm Oil Mill System, integrasi AI-WhatsApp dengan n8n, dan auto-generated quotation yang menghubungkan ClickUp, Odoo, dan ERP. Selalu menerapkan pendekatan quality-first dalam setiap tahap, mulai dari analisis hingga deployment.",
  },
];

// ─── Running Text ─────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  { icon: ClipboardCheck, label: "Software Quality Assurance" },
  { icon: PieChart, label: "Business Analyst" },
  { icon: Settings, label: "Sistem Implementor" },
  { icon: Presentation, label: "Sistem Trainer" },
];

const BACKDROP_WORDS = ["TESTING", "QUALITY", "ANALYSIS", "IMPLEMENTATION", "TRAINING", "REPORTING"];

function RunningText() {
  // Duplikasi item agar scroll terasa mulus dan seamless
  const chips = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  const backdrop = [...BACKDROP_WORDS, ...BACKDROP_WORDS, ...BACKDROP_WORDS];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white py-9 select-none">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-front {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll-left 28s linear infinite;
        }
        .marquee-front:hover {
          animation-play-state: paused;
        }
        .marquee-back {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll-right 46s linear infinite;
        }
        .marquee-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }
      `}</style>

      {/* Lapisan belakang: kata besar transparan, bergerak berlawanan arah — kesan kedalaman */}
      <div className="absolute inset-0 flex items-center marquee-fade opacity-[0.05] pointer-events-none">
        <div className="marquee-back">
          {backdrop.map((word, i) => (
            <span
              key={i}
              className="text-6xl md:text-7xl font-extrabold text-indigo-900 whitespace-nowrap px-8 tracking-tight"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Lapisan depan: pill berwarna dengan ikon */}
      <div className="relative marquee-fade">
        <div className="marquee-front">
          {chips.map((item, i) => {
            const isIndigo = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex items-center gap-2.5 mx-2.5 pl-2 pr-5 py-2 rounded-full border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all shrink-0 bg-white ${
                  isIndigo ? "border-indigo-100" : "border-cyan-100"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isIndigo ? "bg-indigo-50 text-indigo-600" : "bg-cyan-50 text-cyan-600"
                  }`}
                >
                  <item.icon size={14} strokeWidth={2.2} />
                </span>
                <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Tooltip label */}
      <span className="hidden group-hover:flex bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap transition-all">
        Chat via WhatsApp
      </span>
      {/* Button bubble */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200">
        <WhatsAppIcon size={28} className="text-white" />
      </div>
    </a>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ page, setPage, mobileOpen, setMobileOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => { setPage("home"); setMobileOpen(false); }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Tris</span>
          <span className="text-2xl font-extrabold text-slate-800">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                page === item.id
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md"
                  : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setPage("contact")}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Hubungi <ArrowRight size={16} />
        </button>

        <button className="lg:hidden text-slate-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setMobileOpen(false); }}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                page === item.id ? "bg-indigo-50 text-indigo-600" : "text-slate-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-14 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          {SOCIAL_LINKS.map(({ id, icon: Icon, url, label }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <p className="text-sm text-slate-400 text-center">
          © 2026{" "}
          <span className="font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Tris Jansen Lumban Toruan
          </span>{" "}
          — Dibangun untuk kualitas
        </p>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Tersedia untuk kolaborasi
            </span>
            <p className="text-lg text-slate-500 mb-1">Halo, saya</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
              Tris Jansen <br />
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Lumban Toruan
              </span>
            </h1>
            <p className="text-slate-500 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              <span className="font-semibold text-slate-700">Lead Quality Assurance</span> dengan
              pengalaman menangani 10+ proyek. Berkomitmen menghadirkan software berkualitas melalui
              pendekatan strategis dan pengujian yang mendalam.
            </p>
            <div className="flex justify-center md:justify-start gap-10 mb-8">
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => setPage("contact")}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Send size={18} /> Hubungi Saya
              </button>
              <button
                onClick={() => setPage("experience")}
                className="px-7 py-3.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-indigo-300 transition-all flex items-center gap-2"
              >
                <Briefcase size={18} /> Lihat Proyek
              </button>
              {/* ── Download CV ─────────────────────────────── */}
              <a
                href={CV_DOWNLOAD_URL}
                download
                className="px-7 py-3.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-indigo-300 transition-all flex items-center gap-2"
              >
                <Download size={18} /> Unduh CV
              </a>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 p-1.5 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img src={fotoHero} alt="Foto Tris Jansen" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Running Text ─────────────────────────────────────────────── */}
      <RunningText />

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="text-indigo-300 mx-auto mb-4" size={32} />
          <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed">
            "Kualitas bukanlah sebuah tindakan, melainkan{" "}
            <span className="font-semibold text-slate-800 not-italic">kebiasaan</span>. Setiap proyek
            adalah langkah menuju keunggulan."
          </p>
          <p className="mt-4 font-semibold text-slate-800">— Tris Jansen Lumban Toruan</p>
        </div>
      </section>
    </div>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Tentang Saya</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
          Mengantarkan{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Kualitas
          </span>{" "}
          di Setiap Langkah
        </h1>
      </div>

      <div className="max-w-4xl mx-auto mb-16 space-y-5">
        <p className="text-slate-500 leading-relaxed text-lg">
          Saya <strong className="text-slate-700">Tris Jansen Lumban Toruan</strong>, seorang{" "}
          <strong className="text-slate-700">Lead Quality Assurance</strong> yang berdedikasi tinggi.
          Dengan pengalaman menangani lebih dari <strong className="text-slate-700">10+ proyek</strong>{" "}
          serta memimpin <strong className="text-slate-700">5 proyek</strong> secara langsung di posisi
          Lead QA, saya tidak hanya berfokus pada menemukan bug, tetapi membangun fondasi kualitas yang
          kokoh sejak awal perencanaan.
        </p>
        <p className="text-slate-500 leading-relaxed text-lg">
          Pendekatan saya bersifat holistik dan strategis. Saya aktif terlibat dalam{" "}
          <strong className="text-slate-700">analisis bisnis (Business Analysis)</strong> untuk
          mendalami kebutuhan pengguna serta tujuan proyek, sehingga strategi pengujian yang dirancang
          benar-benar relevan dengan ekspektasi pasar. Dari hasil analisis tersebut, saya memimpin
          proses <strong className="text-slate-700">implementasi sistem (System Implementation)</strong>{" "}
          dengan memastikan setiap aspek teknis teruji, terdokumentasi, dan terintegrasi secara sempurna
          sebelum perilisan.
        </p>
        <p className="text-slate-500 leading-relaxed text-lg">
          Di luar ranah teknis, saya memiliki keahlian dalam melakukan{" "}
          <strong className="text-slate-700">demonstrasi sistem (System Demo)</strong> dan{" "}
          <strong className="text-slate-700">presentasi sistem (System Presenting)</strong> di hadapan
          berbagai pemangku kepentingan, mulai dari tim teknis hingga jajaran eksekutif dan klien. Saya
          mampu menerjemahkan hasil pengujian dan performa produk menjadi bahasa bisnis yang jelas,
          meyakinkan, serta mudah dipahami—menjembatani kesenjangan antara tim pengembang dan kebutuhan
          bisnis.
        </p>
        <p className="text-slate-500 leading-relaxed text-lg">
          Sebagai seorang pemimpin, saya sangat mengedepankan{" "}
          <strong className="text-slate-700">pendelegasian (Delegation)</strong> dan{" "}
          <strong className="text-slate-700">kepemimpinan (Leadership)</strong> yang memberdayakan. Saya
          percaya bahwa memberikan kepercayaan dan ruang tanggung jawab penuh kepada setiap anggota tim
          adalah kunci untuk menciptakan lingkungan kerja yang produktif, kolaboratif, dan inovatif.
        </p>
        <p className="text-slate-500 leading-relaxed text-lg">
          Intinya, kualitas bagi saya bukan sekadar metrik, melainkan tentang{" "}
          <strong className="text-slate-700">membangun kepercayaan</strong>. Setiap proyek adalah
          kesempatan untuk menghadirkan pengalaman digital yang handal, aman, dan benar-benar memuaskan
          bagi pengguna akhir.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HIGHLIGHTS.map((h, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center mb-4">
              <h.icon className="text-indigo-600" size={20} />
            </div>
            <h4 className="font-semibold text-slate-800 mb-1">{h.title}</h4>
            <p className="text-sm text-slate-500">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Gallery Page ─────────────────────────────────────────────────────────────
function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Galeri</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          Foto{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Profile
          </span>
        </h1>
        <p className="text-slate-500">Beberapa momen dan kesan profesional saya.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-7">
        {GALLERY.map((g, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group border border-slate-100">
            <img
              src={g.src}
              alt={g.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Skills Page ──────────────────────────────────────────────────────────────
function SkillsPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Keahlian</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          Kompetensi{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Utama
          </span>
        </h1>
        <p className="text-slate-500">Kombinasi skill teknis dan non-teknis yang saya bawa dalam setiap proyek.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {SKILLS.map((s, i) => (
          <div key={i} className="text-center p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center mx-auto mb-4">
              <s.icon className="text-indigo-600" size={24} />
            </div>
            <h4 className="font-semibold text-slate-800 mb-1">{s.title}</h4>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-slate-800 text-center mb-8">Perangkat Andalan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {TOOLS.map((t, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <t.icon className="text-cyan-600 mx-auto mb-3" size={28} />
              <h4 className="text-sm font-semibold text-slate-700">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Experience Page ──────────────────────────────────────────────────────────
function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Proyek</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          10+ Proyek{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Telah Dihadapi
          </span>
        </h1>
        <p className="text-slate-500">
          Berbagai proyek dengan skala dan kompleksitas yang beragam, semuanya dengan komitmen kualitas yang sama.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-6 p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all"
          >
            <div className="text-3xl font-extrabold text-indigo-200 min-w-[52px]">{e.number}</div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">{e.title}</h4>
              <p className="text-sm font-medium text-cyan-600 mb-2">{e.role}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
function ContactPage({ setPage }) {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Kontak</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          Mari{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Terhubung
          </span>
        </h1>
        <p className="text-slate-500">Siap berkolaborasi untuk menciptakan software berkualitas. Hubungi saya kapan saja.</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-start">
        {/* ── Detail Kontak (satu kartu, bukan tumpukan kotak kecil) ─────── */}
        <div className="md:col-span-2 space-y-5">
          <div className="p-7 rounded-2xl bg-white border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-5">Detail Kontak</h3>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <Mail className="text-indigo-600" size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-0.5">Email</p>
                <p className="text-sm text-slate-700 font-medium break-words">trisjansen.lumbantoruan@gmail.com</p>
              </div>
            </div>

            <div className="h-px bg-slate-100 my-5" />

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Phone className="text-cyan-600" size={18} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-0.5">Telepon</p>
                <p className="text-sm text-slate-700 font-medium">+62 823 6192 5781</p>
              </div>
            </div>

            <div className="h-px bg-slate-100 my-5" />

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-indigo-600" size={18} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-0.5">Lokasi</p>
                <p className="text-sm text-slate-700 font-medium">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* ── Download CV Card ───────────────────────────────────────── */}
          <a
            href={CV_DOWNLOAD_URL}
            download
            className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Download size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-0.5">Unduh CV Saya</h3>
              <p className="text-sm text-white/80">Format PDF · Terbaru 2026</p>
            </div>
          </a>

          {/* ── Status Ketersediaan → arahkan ke WhatsApp melayang ───────── */}
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900 text-white">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Tersedia untuk proyek baru
              </p>
              <p className="text-xs text-white/60 mt-1 leading-relaxed">
                Chat tercepat lewat ikon WhatsApp di pojok kanan bawah layar.
              </p>
            </div>
          </div>
        </div>

        {/* ── Mini Galeri + Social ─────────────────────────────────────── */}
        <div className="md:col-span-3 space-y-5">
          <div className="p-7 rounded-2xl bg-white border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-800">Sedikit Cerita di Balik Layar</h3>
              <button
                onClick={() => setPage("gallery")}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 flex-shrink-0"
              >
                Lihat galeri <ArrowRight size={14} />
              </button>
            </div>

            <div className="relative h-72 sm:h-80">
              <div className="absolute left-0 top-0 w-[62%] h-[80%] rounded-2xl overflow-hidden border-[6px] border-white shadow-lg -rotate-2">
                <img src={fotogalery1} alt="Momen berbicara di depan tim" className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] h-[62%] rounded-2xl overflow-hidden border-[6px] border-white shadow-xl rotate-3">
                <img src={fotogalery3} alt="Momen kolaborasi tim" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="p-6 rounded-2xl bg-white border border-slate-100 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-slate-500">Atau temukan saya di platform lain</p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ id, icon: Icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "home":       return <HomePage setPage={setPage} />;
      case "about":      return <AboutPage />;
      case "gallery":    return <GalleryPage />;
      case "skills":     return <SkillsPage />;
      case "experience": return <ExperiencePage />;
      case "contact":    return <ContactPage setPage={setPage} />;
      default:           return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />

      {/* ── Floating WhatsApp ──────────────────────────────────────────── */}
      <FloatingWhatsApp />
    </div>
  );
}