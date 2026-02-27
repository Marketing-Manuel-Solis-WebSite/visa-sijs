'use client';

import React from 'react';
import { Calendar, CheckCircle, AlertTriangle, ExternalLink, Clock, Info } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';

export default function TimelineClient({ lang, t }: { lang: string; t: any }) {
  const d = t.timeline;
  return (
    <ContentPage lang={lang} t={t} breadcrumb={d.title} badge={lang === 'en' ? 'Visa Bulletin' : 'Visa Bulletin'} badgeIcon={<Calendar size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Sources' : 'Fuentes Oficiales'}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Visa Bulletin (State Dept)</a></li>
              <li><a href="https://www.uscis.gov/green-card/green-card-processes-and-procedures/visa-availability-priority-dates" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Priority Dates (USCIS)</a></li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={18} className="text-amber-600" />
              <span className="font-bold text-amber-900 text-sm">{lang === 'en' ? 'Updated Monthly' : 'Actualización Mensual'}</span>
            </div>
            <p className="text-amber-800 text-xs leading-relaxed">{d.current_note}</p>
          </div>
        </>
      }
    >
      {/* How Visa Bulletin Works */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.what_title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{d.what_desc}</p>
        <div className="space-y-4">
          {d.charts.map((chart: { label: string; desc: string }, i: number) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg bg-slate-50">
              <Info size={20} className="text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{chart.label}</h3>
                <p className="text-sm text-slate-600">{chart.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Data */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-900 font-serif mb-4">{d.current_title}</h2>
        <p className="text-blue-800 leading-relaxed mb-4">{d.current_desc}</p>
        <div className="bg-white border border-blue-300 rounded-lg p-6 text-center">
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-2">EB-4 Final Action Date</p>
          <p className="text-4xl font-bold text-[#1e3a5f] font-serif">01 JAN 2021</p>
          <p className="text-xs text-blue-500 mt-2">{lang === 'en' ? 'All chargeability areas (Feb 2026)' : 'Todas las áreas de imputación (Feb 2026)'}</p>
        </div>
      </section>

      {/* Priority Date */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.priority_title}</h2>
        <p className="text-slate-600 leading-relaxed">{d.priority_desc}</p>
      </section>

      {/* Wait Times */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4">{d.wait_title}</h2>
        <p className="text-slate-600 leading-relaxed">{d.wait_desc}</p>
      </section>

      {/* Can I file now? */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.check_title}</h2>
        <div className="space-y-4">
          {d.check_steps.map((step: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</div>
              <p className="text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
