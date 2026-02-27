'use client';

import React from 'react';
import { Briefcase, AlertTriangle, CheckCircle, ExternalLink, Clock, Info, Scale } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';
import FAQItem from '../../../components/FAQ';

export default function WorkPermitClient({ lang, t }: { lang: string; t: any }) {
  const d = t.workpermit;
  return (
    <ContentPage lang={lang} t={t} breadcrumb={d.title} badge={d.last_updated} badgeIcon={<Clock size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <>
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} className="text-rose-600" />
              <span className="font-bold text-rose-900 text-sm">{lang === 'en' ? 'Rapidly Changing' : 'Cambio Rápido'}</span>
            </div>
            <p className="text-rose-800 text-xs leading-relaxed">
              {lang === 'en'
                ? 'This area of law is actively being litigated and may change. Check with an attorney for the most current information for your specific case.'
                : 'Esta área del derecho está siendo litigada activamente y puede cambiar. Consulta con un abogado para la información más actual para tu caso específico.'}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Resources' : 'Recursos Oficiales'}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.uscis.gov/i-765" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Form I-765 (EAD)</a></li>
              <li><a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/special-immigrant-juveniles" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />USCIS — SIJS</a></li>
            </ul>
          </div>
        </>
      }
    >
      {/* Overview */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.overview_title}</h2>
        <p className="text-slate-600 leading-relaxed">{d.overview_desc}</p>
      </section>

      {/* Timeline of Changes */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.history_title}</h2>
        <div className="space-y-6 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
          {d.history_events.map((event: { date: string; desc: string }, i: number) => (
            <div key={i} className="flex items-start gap-4 relative">
              <div className="bg-white border-2 border-blue-500 w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10">
                <Clock size={14} className="text-blue-600" />
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex-1">
                <p className="font-bold text-[#1e3a5f] text-sm mb-1">{event.date}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Standards */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.standards_title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{d.standards_desc}</p>
        <div className="space-y-4">
          {d.standards.map((s: { group: string; standard: string }, i: number) => (
            <div key={i} className={`p-4 rounded-lg border ${i === 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
              <h3 className={`font-bold mb-2 text-sm ${i === 0 ? 'text-emerald-900' : 'text-amber-900'}`}>{s.group}</h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? 'text-emerald-800' : 'text-amber-800'}`}>{s.standard}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing Litigation */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-4">
          <Scale className="text-amber-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">{d.appeal_title}</h3>
            <p className="text-amber-800 text-sm leading-relaxed">{d.appeal_desc}</p>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.risk_title}</h2>
        <div className="space-y-3">
          {d.risk_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <Info size={16} className="text-blue-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EAD Info */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <Briefcase size={24} className="mr-3 text-blue-600" />{d.ead_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{d.ead_desc}</p>
      </section>

      {/* Mini FAQ */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.faq_title}</h2>
        <div className="space-y-2">
          {d.faq.map((item: { q: string; a: string }, i: number) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
