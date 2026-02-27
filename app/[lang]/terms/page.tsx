import { Metadata } from 'next';
import TermsClient from './TermsClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = { title: 'Terms of Use | VISA-SIJS', robots: { index: false, follow: true } };
export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <TermsClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
