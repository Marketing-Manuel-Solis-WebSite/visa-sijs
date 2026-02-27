'use client';

import React from 'react';
import { FileText, CheckCircle, AlertTriangle, ExternalLink, Scale } from 'lucide-react';
import ContentPage from '../../../components/ContentPage';

export default function ProcessClient({ lang, t }: { lang: string; t: any }) {
  const d = t.process;
  return (
    <ContentPage lang={lang} t={t} breadcrumb={d.title} badge={lang === 'en' ? 'Step-by-Step' : 'Paso a Paso'} badgeIcon={<FileText size={14} />} title={d.title} subtitle={d.subtitle}
      sidebar={
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-slate-800 text-lg font-serif mb-4">{lang === 'en' ? 'Official Forms' : 'Formularios Oficiales'}</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.uscis.gov/i-360" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Form I-360 (USCIS)</a></li>
            <li><a href="https://www.uscis.gov/i-485" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Form I-485 (USCIS)</a></li>
            <li><a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#1e3a5f] hover:underline"><ExternalLink size={14} className="mr-2" />Visa Bulletin</a></li>
          </ul>
        </div>
      }
    >
      {/* Step 1 */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3 font-bold">1</span>
          {d.step1_title}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">{d.step1_desc}</p>
        <div className="space-y-3 mb-4">
          {d.step1_findings.map((finding: string, i: number) => (
            <div key={i} className="flex items-start gap-3 bg-blue-50 p-3 rounded border border-blue-100">
              <Scale size={16} className="text-blue-600 mt-0.5 shrink-0" />
              <span className="text-sm text-blue-900">{finding}</span>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
          <div className="flex items-start gap-2">
            <AlertTriangle size={18} className="text-amber-700 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-900">{d.step1_note}</p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3 font-bold">2</span>
          {d.step2_title}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">{d.step2_desc}</p>
        <div className="space-y-3">
          {d.step2_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Step 3 */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3 font-bold">3</span>
          {d.step3_title}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">{d.step3_desc}</p>
        <div className="space-y-3">
          {d.step3_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Step 4 */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-4 flex items-center">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3 font-bold">4</span>
          {d.step4_title}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">{d.step4_desc}</p>
        <div className="space-y-3">
          {d.step4_points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a5f] font-serif mb-6">{d.docs_title}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {d.docs.map((doc: string, i: number) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 p-3 rounded border border-slate-100">
              <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Errors */}
      <section className="bg-rose-50 border border-rose-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-rose-900 font-serif mb-6 flex items-center">
          <AlertTriangle size={24} className="mr-3" />{d.errors_title}
        </h2>
        <div className="space-y-3">
          {d.errors.map((error: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-rose-600 mt-0.5 shrink-0" />
              <span className="text-sm text-rose-800">{error}</span>
            </div>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
