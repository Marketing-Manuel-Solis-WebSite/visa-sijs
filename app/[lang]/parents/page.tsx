import { Metadata } from 'next';
import ParentsClient from './ParentsClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS and Parents: Can I Petition for My Parents? (2026)',
  description: 'SIJS-based permanent residents cannot petition for parents. Permanent restriction under INA § 101(a)(27)(J). What this means and alternatives.',
  keywords: ['SIJS parents', 'SIJS petition parents', 'SIJS family petition', 'SIJS pedir padres', 'SIJS restricción padres'],
  alternates: { canonical: 'https://visa-sijs.com/parents' },
};
export default async function ParentsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <ParentsClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
