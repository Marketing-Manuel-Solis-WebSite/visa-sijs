import { Metadata } from 'next';
import { TRANSLATIONS } from '../../data/translations';
import HomeClient from './HomeClient';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  const title = isEnglish
    ? 'SIJS 2026: Special Immigrant Juvenile Status — Complete Guide, Eligibility & Process'
    : 'SIJS 2026: Estatus Especial de Inmigrante Juvenil — Guía Completa, Elegibilidad y Proceso';

  const description = isEnglish
    ? 'Complete SIJS guide for 2026. Eligibility, state court orders, I-360 petition, EB-4 Visa Bulletin, deferred action, work permits, and 2025–2026 policy changes.'
    : 'Guía completa SIJS para 2026. Elegibilidad, órdenes de corte estatal, petición I-360, Visa Bulletin EB-4, acción diferida, permisos de trabajo y cambios de política 2025–2026.';

  const t = TRANSLATIONS[lang === 'en' ? 'en' : 'es'];
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item: { q: string; a: string }) => ({
      '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return {
    title, description,
    alternates: {
      canonical: `https://visa-sijs.com/${lang}`,
      languages: { es: 'https://visa-sijs.com/es', en: 'https://visa-sijs.com/en', 'x-default': 'https://visa-sijs.com/es' },
    },
    openGraph: { title, description, url: `https://visa-sijs.com/${lang}`, type: 'website', locale: isEnglish ? 'en_US' : 'es_US' },
    other: { 'script:ld+json': JSON.stringify(faqSchema) },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: t.faq.items.map((item: { q: string; a: string }) => ({
            '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }),
      }} />
      <HomeClient lang={validLang} t={t} />
    </>
  );
}
