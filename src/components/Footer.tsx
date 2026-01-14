'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const TikTok = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className={className}
    >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
);

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-dark text-white pt-20 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-4 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-6">
                        <Image
                            src="/images/logo.png"
                            alt="YooMarrakech"
                            width={100}
                            height={100}
                            className="mb-6 object-contain"
                        />
                        <h3 className="text-3xl font-medium font-poppins text-white mb-6">{t('exploreTitle')}</h3>
                        <p className="text-white/80 leading-relaxed mb-6 font-light max-w-md">
                            {t('exploreText')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-white/80 font-medium mb-6 text-sm">{t('quickLinks')}</h4>
                        <ul className="space-y-4 font-light">
                            <li><Link href={`/${locale}`} className="hover:text-white text-white/70 transition-colors">Home</Link></li>
                            <li><Link href={`/${locale}/about`} className="hover:text-white text-white/70 transition-colors">{t('about')}</Link></li>
                            <li><Link href={`/${locale}/gallery`} className="hover:text-white text-white/70 transition-colors">Gallery</Link></li>
                            <li><Link href={`/${locale}/services`} className="hover:text-white text-white/70 transition-colors">Travel Services</Link></li>
                            <li><Link href={`/${locale}/contact`} className="hover:text-white text-white/70 transition-colors">{t('contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-3">
                        <h4 className="text-white/80 font-medium mb-6 text-sm">{t('legal')}</h4>
                        <ul className="space-y-4 font-light">
                            <li><Link href={`/${locale}/terms`} className="hover:text-white text-white/70 transition-colors">{t('terms')}</Link></li>
                            <li><Link href={`/${locale}/privacy`} className="hover:text-white text-white/70 transition-colors">{t('privacy')}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/60 text-sm">
                        &copy; YooMarrakech {currentYear} {t('copyright')}
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="https://instagram.com" target="_blank" className="hover:text-primary text-white/80 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="https://tiktok.com" target="_blank" className="hover:text-primary text-white/80 transition-colors">
                            <TikTok className="w-5 h-5" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" className="hover:text-primary text-white/80 transition-colors">
                            <Youtube className="w-5 h-5" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="hover:text-primary text-white/80 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
