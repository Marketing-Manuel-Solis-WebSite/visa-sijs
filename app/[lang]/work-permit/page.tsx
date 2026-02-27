import { Metadata } from 'next';
import WorkPermitClient from './WorkPermitClient';
import { TRANSLATIONS } from '../../../data/translations';
export async function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export const metadata: Metadata = {
  title: 'SIJS Work Permit & Deferred Action 2026: EAD, A.C.R. v. Noem & Current Policy',
  description: 'SIJS deferred action and work permit (EAD) update for 2025-2026. What changed, A.C.R. v. Noem litigation, current standards, and what it means for you.',
  keywords: ['SIJS work permit', 'SIJS deferred action', 'SIJS EAD', 'acción diferida SIJS', 'permiso de trabajo SIJS', 'A.C.R. v. Noem', 'SIJS 2026 update'],
  alternates: { canonical: 'https://visa-sijs.com/work-permit' },
};
export default async function WorkPermitPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  return <WorkPermitClient lang={validLang} t={TRANSLATIONS[validLang]} />;
}
