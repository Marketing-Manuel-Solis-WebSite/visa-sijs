'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Legal from '../../../components/Legal';

export default function TermsClient({ lang, t }: { lang: string; t: any }) {
  const goHome = () => { if (typeof window !== 'undefined') window.location.href = `/${lang}`; };
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header lang={lang} t={t} />
      <main className="flex-grow"><Legal type="terms" goHome={goHome} /></main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
