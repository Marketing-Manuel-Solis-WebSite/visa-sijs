import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Globe, AlertTriangle, ChevronRight, Scale, FileText } from 'lucide-react';

interface FooterProps { lang: string; t: any; }

export default function Footer({ lang, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800 font-sans" role="contentinfo">
      {/* Info Banner */}
      <div className="bg-[#1e293b] py-3 px-4 border-b border-slate-700">
        <div className="container mx-auto flex items-center justify-center text-center gap-2 text-xs md:text-sm text-slate-400">
          <AlertTriangle size={14} className="text-slate-300 shrink-0" aria-hidden="true" />
          <span>{t.footer.safety_warning}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3 text-white mb-2">
              <Image src="/visa-sijs.png" alt="VISA-SIJS Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold font-serif tracking-tight text-white">VISA-SIJS</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">{t.footer.about_desc}</p>
            <div className="pt-2 flex gap-3">
              <Link href={`/${lang === 'en' ? 'es' : 'en'}`} className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 hover:text-white transition text-slate-400" aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}>
                <Globe size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <nav aria-label={lang === 'en' ? 'Quick resources' : 'Recursos rápidos'}>
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.resources_title}</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: t.nav.eligibility, href: `/${lang}/eligibility` },
                { label: t.nav.process, href: `/${lang}/process` },
                { label: t.nav.timeline, href: `/${lang}/timeline` },
                { label: t.nav.workpermit, href: `/${lang}/work-permit` },
                { label: t.nav.parents, href: `/${lang}/parents` },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="flex items-center text-slate-400 hover:text-white transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-slate-300 transition-colors" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Official Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.safety_title}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Scale size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/special-immigrant-juveniles" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">USCIS — SIJS Information</a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Visa Bulletin (Dept. of State)</a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/i-360" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Form I-360 (USCIS)</a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <a href="https://www.uscis.gov/i-485" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Form I-485 (USCIS)</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal Help */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.contact_title}</h3>
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700/50">
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {lang === 'en'
                  ? 'SIJS involves both state court proceedings and federal immigration law. For personalized advice, consult with a qualified attorney experienced in juvenile and immigration law.'
                  : 'SIJS involucra tanto procedimientos de corte estatal como ley federal de inmigración. Para asesoría personalizada, consulta con un abogado calificado con experiencia en ley de menores e inmigración.'}
              </p>
              <a href="https://manuelsolis.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white font-medium hover:text-blue-300 transition-colors gap-1.5 text-sm">
                {lang === 'en' ? 'Find Legal Help' : 'Buscar Ayuda Legal'}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#020617] py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <div className="text-center md:text-left max-w-xl">
            <p className="mb-2 leading-relaxed">{t.footer.disclaimer}</p>
            <p>&copy; {currentYear} Visa-SIJS.com — {t.footer.rights_reserved}</p>
          </div>
          <nav className="flex gap-6 shrink-0" aria-label="Legal links">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-200 transition text-left">{t.footer.privacy_policy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-200 transition text-left">{t.footer.terms_of_use}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
