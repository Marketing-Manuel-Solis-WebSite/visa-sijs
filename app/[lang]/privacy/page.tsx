import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = { title: 'Privacy Policy | VISA-SIJS', robots: { index: false, follow: true } };
export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <PrivacyClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
