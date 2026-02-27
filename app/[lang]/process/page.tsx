import { Metadata } from 'next';
import ProcessClient from './ProcessClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS Process Step by Step: State Court, I-360, EB-4, I-485 (2026)',
  description: 'Complete SIJS process: state court order with findings, I-360 petition, EB-4 visa wait, adjustment of status I-485. Documents and common mistakes.',
  keywords: ['SIJS process', 'I-360 SIJS', 'SIJS step by step', 'SIJS court order', 'I-485 SIJS', 'SIJS green card process'],
  alternates: { canonical: 'https://visa-sijs.com/process' },
};
export default async function ProcessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <ProcessClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
