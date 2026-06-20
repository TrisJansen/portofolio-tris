import { useState } from "react";
import {
  Menu, X, ArrowRight, CheckCircle2, ClipboardCheck, PieChart, Search,
  Bot, Presentation, Settings, Code2, Database, Send, FlaskConical,
  MapPin, Mail, Phone, Briefcase, Calendar, Award, Quote, Sparkles
} from "lucide-react";

import fotoHero from "./assets/DSC01121.JPG";
import fotogalery1 from "./assets/speaking.JPG"
import fotogalery2 from "./assets/Partner.jpg"
import fotogalery3 from "./assets/Google.jpg"

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

function Twitter({ size = 16, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616-.054 1.49.999 3.139 2.594 3.652-.394.105-.794.116-1.184.066.334 1.143 1.36 1.971 2.601 2.069-1.27.996-2.872 1.491-4.609 1.328 1.518.973 3.318 1.543 5.255 1.543 6.315 0 9.766-5.232 9.766-9.768 0-.149-.003-.297-.01-.443.671-.484 1.255-1.09 1.717-1.78z"/>
    </svg>
  );
}

function Youtube({ size = 16, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M23.498 6.186a2.97 2.97 0 0 0-2.088-2.088C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.41.598A2.97 2.97 0 0 0 .502 6.186 31.03 31.03 0 0 0 0 12a31.03 31.03 0 0 0 .502 5.814 2.97 2.97 0 0 0 2.088 2.088C4.308 20.5 12 20.5 12 20.5s7.692 0 9.41-.598a2.97 2.97 0 0 0 2.088-2.088A31.03 31.03 0 0 0 24 12a31.03 31.03 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
    </svg>
  );
}

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
  { icon: Calendar, value: "4+", label: "Tahun Pengalaman" },
  { icon: Award, value: "100%", label: "Komitmen Kualitas" },
];

const HIGHLIGHTS = [
  { icon: ClipboardCheck, title: "Quality Software", desc: "Standar & best practices QA" },
  { icon: PieChart, title: "Business Analyst", desc: "Requirement & risk analysis" },
  { icon: Search, title: "Manual Testing", desc: "Test case & exploratory testing" },
  { icon: Bot, title: "Automation Testing", desc: "Framework & script automation" },
  { icon: Presentation, title: "Presenting", desc: "Reporting & stakeholder presentation" },
  { icon: Settings, title: "System Implementor", desc: "End-to-end solution delivery" },
];

const GALLERY = [
  { src: fotogalery1, caption: "" },
  { src: fotogalery2, caption: "" },
  { src: fotogalery3, caption: "" },
];

const SKILLS = [
  { icon: ClipboardCheck, title: "Quality Software", desc: "Standar & best practices QA" },
  { icon: PieChart, title: "Business Analysis", desc: "Requirement & risk analysis" },
  { icon: Search, title: "Manual Tester", desc: "Test case & exploratory testing" },
  { icon: Bot, title: "Automation Testing", desc: "Framework & script automation" },
  { icon: Presentation, title: "Presenting", desc: "Reporting & stakeholder presentation" },
  { icon: Settings, title: "Implementor", desc: "End-to-end solution delivery" },
];

const TOOLS = [
  { icon: Code2, name: "VS Code" },
  { icon: Database, name: "SQL" },
  { icon: Send, name: "Postman" },
  { icon: FlaskConical, name: "Katalon" },
];

const EXPERIENCE = [
  { number: "01", title: "Platform E-Commerce", role: "Lead QA · 12 bulan", desc: "Mengkoordinasikan tim QA untuk menguji sistem pembayaran, integrasi logistik, dan flow transaksi. Menerapkan automation testing untuk regression suite." },
  { number: "02", title: "Sistem Manajemen Rumah Sakit", role: "QA Lead · 10 bulan", desc: "Memastikan keandalan modul rekam medis, antrian pasien, dan integrasi dengan sistem laboratorium. Fokus pada keamanan data dan performance." },
  { number: "03", title: "Aplikasi Mobile Fintech", role: "Senior QA · 8 bulan", desc: "Pengujian menyeluruh pada fitur transaksi, autentikasi biometrik, dan notifikasi real-time. Implementasi test automation untuk mobile." },
  { number: "04", title: "Dashboard Analitik Data", role: "QA Engineer · 6 bulan", desc: "Validasi akurasi data visualisasi, performa query, dan user experience. Membantu tim dalam penyusunan test strategy." },
  { number: "+6", title: "Berbagai Proyek Lainnya", role: "Head QA · 4+ tahun", desc: "Mulai dari sistem pemerintahan, e-learning, hingga manajemen inventaris. Selalu dengan pendekatan quality-first." },
];

function Navbar({ page, setPage, mobileOpen, setMobileOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button onClick={() => { setPage("home"); setMobileOpen(false); }} className="flex items-center gap-2">
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

        <button onClick={() => setPage("contact")} className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
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

function Footer({ setPage }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-14 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex gap-3 mb-6">
          <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-colors"><Linkedin size={18} /></a>
          <a href="#" aria-label="GitHub" className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-colors"><Github size={18} /></a>
          <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-colors"><Twitter size={18} /></a>
          <a href="#" aria-label="YouTube" className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-colors"><Youtube size={18} /></a>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => setPage(item.id)} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">{item.label}</button>
          ))}
        </nav>
        <p className="text-sm text-slate-400 text-center">
          © 2026 <span className="font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Tris Jansen Lumban Toruan</span> — Dibangun untuk kualitas
        </p>
      </div>
    </footer>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Tersedia untuk kolaborasi
            </span>
            <p className="text-lg text-slate-500 mb-1">Halo, saya</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
              Tris Jansen <br />
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Lumban Toruan</span>
            </h1>
            <p className="text-slate-500 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              <span className="font-semibold text-slate-700">Head Quality Assurance</span> dengan pengalaman menangani 10+ proyek. Berkomitmen menghadirkan software berkualitas melalui pendekatan strategis dan pengujian yang mendalam.
            </p>
            <div className="flex justify-center md:justify-start gap-10 mb-8">
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button onClick={() => setPage("contact")} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <Send size={18} /> Hubungi Saya
              </button>
              <button onClick={() => setPage("experience")} className="px-7 py-3.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-indigo-300 transition-all flex items-center gap-2">
                <Briefcase size={18} /> Lihat Proyek
              </button>
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

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="text-indigo-300 mx-auto mb-4" size={32} />
          <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed">
            "Kualitas bukanlah sebuah tindakan, melainkan <span className="font-semibold text-slate-800 not-italic">kebiasaan</span>. Setiap proyek adalah langkah menuju keunggulan."
          </p>
          <p className="mt-4 font-semibold text-slate-800">— Tris Jansen Lumban Toruan</p>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Tentang Saya</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Mengantarkan <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Kualitas</span> di Setiap Langkah</h1>
      </div>

      <div className="max-w-4xl mx-auto mb-16 space-y-5">
        <p className="text-slate-500 leading-relaxed text-lg">
          Saya <strong className="text-slate-700">Tris Jansen Lumban Toruan</strong>, seorang <strong className="text-slate-700">Head Quality Assurance</strong> yang berdedikasi untuk memastikan setiap produk software yang dirilis memenuhi standar kualitas tertinggi. Dengan pengalaman memimpin lebih dari 10 proyek, saya membawa pendekatan holistik — dari analisis bisnis hingga implementasi pengujian otomatis.
        </p>
        <p className="text-slate-500 leading-relaxed text-lg">
          Saya percaya bahwa kualitas bukan hanya tentang menemukan bug, tetapi tentang membangun kepercayaan. Setiap proyek adalah kesempatan untuk menciptakan pengalaman digital yang handal, aman, dan memuaskan bagi pengguna.
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

function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Galeri</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Foto <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Profile</span></h1>
        <p className="text-slate-500">Beberapa momen dan kesan profesional saya.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-7">
        {GALLERY.map((g, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group border border-slate-100">
            <img src={g.src || `https://picsum.photos/seed/${g.seed}/500/500`} alt={g.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Keahlian</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Kompetensi <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Utama</span></h1>
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

function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Proyek</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">10+ Proyek <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Telah Dihadapi</span></h1>
        <p className="text-slate-500">Berbagai proyek dengan skala dan kompleksitas yang beragam, semuanya dengan komitmen kualitas yang sama.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="flex items-start gap-6 p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all">
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

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-2">Kontak</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Mari <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Terhubung</span></h1>
        <p className="text-slate-500">Siap berkolaborasi untuk menciptakan software berkualitas. Hubungi saya kapan saja.</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-5">
          <div className="p-6 rounded-2xl bg-white border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
              <Mail className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
            <p className="text-sm text-slate-500">trisjansen.lumbantoruan@gmail.com</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
              <Phone className="text-cyan-600" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Telepon</h3>
            <p className="text-sm text-slate-500">+62 823 6192 5781</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
              <MapPin className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Lokasi</h3>
            <p className="text-sm text-slate-500">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="md:col-span-3 p-8 rounded-2xl bg-white border border-slate-100">
          {!submitted ? (
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Nama Lengkap" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <input type="text" placeholder="Subjek" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <textarea required placeholder="Pesan Anda" rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" />
              <button type="button" onClick={handleSubmit} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                Kirim Pesan <Send size={16} />
              </button>
            </div>
          ) : (
            <div className="text-center py-10">
              <CheckCircle2 className="text-cyan-500 mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-slate-800 text-lg mb-2">Pesan Terkirim!</h3>
              <p className="text-sm text-slate-500">Terima kasih telah menghubungi saya. Saya akan segera merespon pesan Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "about": return <AboutPage />;
      case "gallery": return <GalleryPage />;
      case "skills": return <SkillsPage />;
      case "experience": return <ExperiencePage />;
      case "contact": return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}