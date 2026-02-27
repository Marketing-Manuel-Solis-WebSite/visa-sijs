import { Metadata } from 'next';
import TimelineClient from './TimelineClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS Wait Times 2026: EB-4 Visa Bulletin, Priority Dates & Processing',
  description: 'SIJS EB-4 wait times for 2026. Current Visa Bulletin Final Action Date: 01JAN21. Priority dates, how to check, and when to file I-485.',
  keywords: ['SIJS wait time', 'EB-4 SIJS', 'visa bulletin SIJS', 'SIJS priority date', 'cuánto tarda SIJS 2026', 'fecha de prioridad SIJS'],
  alternates: { canonical: 'https://visa-sijs.com/timeline' },
};
export default async function TimelinePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <TimelineClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
