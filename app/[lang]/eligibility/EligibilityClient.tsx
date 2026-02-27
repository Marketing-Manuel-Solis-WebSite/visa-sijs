'use client';

import React from 'react';
import { CheckCircle, AlertTriangle, ExternalLink, Shield, Users } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';

export default function EligibilityClient({ lang, t }: { lang: string; t: any }) {
  const d = t.eligibility;
  return (
    <ContentPage lang={lang} t={t} breadcrumb={d.title} badge={lang === 'en' ? 'Eligibility' : 'Elegibilidad'} badgeIcon={<CheckCircle size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Resources' : 'Recursos Oficiales'}</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/special-immigrant-juveniles" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />USCIS — SIJS</a></li>
            <li><a href="https://www.uscis.gov/i-360" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Form I-360</a></li>
          </ul>
        </div>
      }
    >
      {/* What is SIJS */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <Shield size={24} className="mr-3 text-blue-600" />{d.what_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{d.what_desc}</p>
      </section>

      {/* Requirements */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.reqs_title}</h2>
        <div className="space-y-4">
          {d.reqs.map((req: { label: string; desc: string }, i: number) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
              <CheckCircle size={18} className="text-emerald-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{req.label}</h3>
                <p className="text-sm text-slate-600">{req.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Limitation */}
      <section className="bg-rose-50 border border-rose-200 rounded-xl p-6">
        <div className="flex gap-4">
          <AlertTriangle className="text-rose-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-rose-900 mb-2">{d.important_title}</h3>
            <p className="text-rose-800 text-sm leading-relaxed">{d.important_desc}</p>
          </div>
        </div>
      </section>

      {/* Who can be guardian */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <Users size={24} className="mr-3 text-blue-600" />{d.who_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{d.who_desc}</p>
      </section>

      {/* State variations */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-4">
          <AlertTriangle className="text-amber-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">{d.state_title}</h3>
            <p className="text-amber-800 text-sm leading-relaxed">{d.state_desc}</p>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
