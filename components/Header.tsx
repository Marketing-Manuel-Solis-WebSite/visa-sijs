'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps { lang: string; t: any; }

export default function Header({ lang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getSwitchLangUrl = () => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = lang === 'en' ? 'es' : 'en';
    return segments.join('/');
  };

  const NavLink = ({ target, label }: { target: string; label: string }) => {
    const isActive = pathname?.includes(target);
    return (
      <Link
        href={`/${lang}/${target === 'home' ? '' : target}`}
        className={`flex items-center py-2 px-3 rounded transition-colors font-medium text-sm ${
          isActive
            ? 'text-[#1e3a5f] bg-blue-50 border-b-2 border-[#1e3a5f]'
            : 'text-slate-600 hover:text-[#1e3a5f] hover:bg-blue-50/50'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#f0f4f8] border-b border-slate-300 py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-slate-600 font-medium">
            {lang === 'en' ? 'Informational Resource — Not Legal Advice' : 'Recurso Informativo — No Es Asesoría Legal'}
          </span>
        </div>
        <div className="flex space-x-4">
          <Link
            href={getSwitchLangUrl()}
            className="font-bold text-[#1e3a5f] hover:underline flex items-center space-x-1"
          >
            <Globe size={12} />
            <span>{lang === 'en' ? 'Español' : 'English'}</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href={`/${lang}`} className="flex items-center space-x-3 cursor-pointer">
            <Image src="/visa-sijs.png" alt="VISA-SIJS Logo" width={44} height={44} className="rounded-lg" priority />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight text-[#1e3a5f] leading-none font-serif">
                VISA-SIJS
              </h1>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                {lang === 'en' ? 'Special Immigrant Juvenile Status' : 'Estatus Especial de Inmigrante Juvenil'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            <NavLink target="eligibility" label={t.nav.eligibility} />
            <NavLink target="process" label={t.nav.process} />
            <NavLink target="timeline" label={t.nav.timeline} />
            <NavLink target="work-permit" label={t.nav.workpermit} />
            <NavLink target="parents" label={t.nav.parents} />
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#1e3a5f]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-2 shadow-lg absolute w-full z-50">
            <NavLink target="eligibility" label={t.nav.eligibility} />
            <NavLink target="process" label={t.nav.process} />
            <NavLink target="timeline" label={t.nav.timeline} />
            <NavLink target="work-permit" label={t.nav.workpermit} />
            <NavLink target="parents" label={t.nav.parents} />
          </div>
        )}
      </header>
    </>
  );
}
