import { Metadata } from 'next';
import EligibilityClient from './EligibilityClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS Eligibility 2026: Do I Qualify? Requirements, Age, Court Findings',
  description: 'SIJS eligibility requirements: age under 21, unmarried, state court findings of abuse/neglect/abandonment, dependency, and best interest determination.',
  keywords: ['SIJS eligibility', 'SIJS requirements', 'SIJS age limit', 'SIJS abuse neglect abandonment', 'do I qualify SIJS'],
  alternates: { canonical: 'https://visa-sijs.com/eligibility' },
};
export default async function EligibilityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <EligibilityClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
