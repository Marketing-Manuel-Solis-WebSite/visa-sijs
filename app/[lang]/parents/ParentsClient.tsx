'use client';

import React from 'react';
import { Users, AlertTriangle, CheckCircle, ExternalLink, Info, XCircle } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';

export default function ParentsClient({ lang, t }: { lang: string; t: any }) {
  const d = t.parents;
  return (
    <ContentPage lang={lang} t={t} breadcrumb={d.title} badge={lang === 'en' ? 'Important Limitation' : 'Limitación Importante'} badgeIcon={<Users size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Info size={20} className="text-[#1e3a5f]" />
            <h3 className="font-bold text-slate-800 text-lg font-serif">{lang === 'en' ? 'Key Reference' : 'Referencia Clave'}</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">INA § 101(a)(27)(J)</p>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/special-immigrant-juveniles" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />USCIS — SIJS</a></li>
          </ul>
        </div>
      }
    >
      {/* Direct Answer */}
      <section className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-rose-900 font-serif mb-4 flex items-center">
          <XCircle size={28} className="mr-3 text-rose-600" />{d.answer_title}
        </h2>
        <p className="text-rose-800 leading-relaxed text-lg">{d.answer_desc}</p>
      </section>

      {/* Why */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.why_title}</h2>
        <p className="text-slate-600 leading-relaxed">{d.why_desc}</p>
      </section>

      {/* Scope */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.scope_title}</h2>
        <div className="space-y-3">
          {d.scope_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3 bg-rose-50 p-3 rounded border border-rose-100">
              <AlertTriangle size={16} className="text-rose-600 mt-0.5 shrink-0" />
              <span className="text-sm text-rose-800">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.comparison_title}</h2>
        <p className="text-slate-600 leading-relaxed">{d.comparison_desc}</p>
      </section>

      {/* Practical Advice */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex gap-4">
          <Info className="text-blue-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">{d.advice_title}</h3>
            <p className="text-blue-800 text-sm leading-relaxed">{d.advice_desc}</p>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
