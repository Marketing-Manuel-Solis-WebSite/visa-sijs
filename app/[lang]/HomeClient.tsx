'use client';

import React from 'react';
import Link from 'next/link';
import {
  Shield, ChevronRight, ExternalLink, Clock, AlertTriangle,
  CheckCircle, Scale, FileText, Briefcase, Users, Calendar
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQ';

interface HomeClientProps { lang: string; t: any; }

export default function HomeClient({ lang, t }: HomeClientProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header lang={lang} t={t} />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-[#1e3a5f] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-300 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 text-blue-200 mb-4 font-semibold tracking-wider text-xs uppercase">
                <Shield size={16} />
                <span>{lang === 'en' ? 'Immigration Protection Resource' : 'Recurso de Protección Migratoria'}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif tracking-tight">{t.hero.title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl font-light">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href={`/${lang}/eligibility`} className="inline-flex items-center justify-center bg-white text-[#1e3a5f] hover:bg-blue-50 font-bold py-4 px-8 rounded shadow-md transition-all text-lg">
                  <CheckCircle size={20} className="mr-2" />{t.hero.cta_primary}
                </Link>
                <a href="https://manuelsolis.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-blue-900/50 font-semibold py-4 px-8 rounded transition-all text-lg">
                  {t.hero.cta_secondary}<ExternalLink size={20} className="ml-2" />
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-blue-800/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">&lt; 21</div>
                  <div className="text-xs text-blue-200 font-medium uppercase tracking-wide">{t.timeline_section.age_label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">EB-4</div>
                  <div className="text-xs text-blue-200 font-medium uppercase tracking-wide">{lang === 'en' ? 'Visa Category' : 'Categoría de Visa'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">01JAN21</div>
                  <div className="text-xs text-blue-200 font-medium uppercase tracking-wide">{lang === 'en' ? 'Current Cut-Off (Feb 2026)' : 'Cut-Off Actual (Feb 2026)'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAVIGATION CARDS */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a5f] font-serif mb-3">
                {lang === 'en' ? 'Complete SIJS Resources' : 'Recursos SIJS Completos'}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {lang === 'en'
                  ? 'Navigate every step of the SIJS process with detailed, up-to-date information.'
                  : 'Navega cada paso del proceso SIJS con información detallada y actualizada.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { href: 'eligibility', icon: CheckCircle, title: t.cards.eligibility_title, desc: t.cards.eligibility_desc },
                { href: 'process', icon: FileText, title: t.cards.process_title, desc: t.cards.process_desc },
                { href: 'timeline', icon: Calendar, title: t.cards.timeline_title, desc: t.cards.timeline_desc },
                { href: 'work-permit', icon: Briefcase, title: t.cards.workpermit_title, desc: t.cards.workpermit_desc },
                { href: 'parents', icon: Users, title: t.cards.parents_title, desc: t.cards.parents_desc },
              ].map((card) => (
                <Link key={card.href} href={`/${lang}/${card.href}`} className="group bg-white border border-slate-200 hover:border-[#1e3a5f] p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="mb-6 text-[#1e3a5f] group-hover:scale-110 transition-transform origin-left">
                    <card.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">{card.title}</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">{card.desc}</p>
                  <span className="inline-flex items-center text-sm text-[#1e3a5f] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === 'en' ? 'Read More' : 'Ver Más'} <ChevronRight size={16} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FACTS SECTION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] font-serif mb-8 text-center">{t.timeline_section.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3"><Clock size={20} /><span className="font-bold text-sm uppercase tracking-wide">{t.timeline_section.age_label}</span></div>
                <p className="text-sm leading-relaxed">{t.timeline_section.age_text}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3"><AlertTriangle size={20} /><span className="font-bold text-sm uppercase tracking-wide">{t.timeline_section.visa_label}</span></div>
                <p className="text-sm leading-relaxed">{t.timeline_section.visa_text}</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3"><Scale size={20} /><span className="font-bold text-sm uppercase tracking-wide">{t.timeline_section.court_label}</span></div>
                <p className="text-sm leading-relaxed">{t.timeline_section.court_text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">{t.faq.title}</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {t.faq.items.map((item: any, index: number) => (
                <div key={index} className="h-full"><FAQItem q={item.q} a={item.a} /></div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} t={t} />
    </div>
  );
}
