'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition, useState, useEffect } from 'react';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isScrolled, setIsScrolled] = useState(false);

    // Keep header background check but handle Home page specific logic via CSS or simple condition
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
            router.replace(newPath);
        });
    };

    const navLinks = [
        { href: `/${locale}`, label: t('home') },
        { href: `/${locale}/about`, label: t('about') },
        { href: `/${locale}/services`, label: t('services') },
        { href: `/${locale}/gallery`, label: t('gallery') },
        { href: `/${locale}/contact`, label: t('contact') },
    ];

    // Check if we are on pages that need white text (Home, About, Services, Service Details, Contact, Gallery)
    const isHomePage = pathname === `/${locale}`;
    const isAboutPage = pathname === `/${locale}/about`;
    const isServicesPage = pathname === `/${locale}/services`;
    const isContactPage = pathname === `/${locale}/contact`;
    const isGalleryPage = pathname === `/${locale}/gallery`;
    const isServiceDetailPage = pathname.startsWith(`/${locale}/tours/`) ||
        pathname.startsWith(`/${locale}/activities/`) ||
        pathname.startsWith(`/${locale}/packages/`) ||
        pathname.startsWith(`/${locale}/transport/`);
    const isServiceListingPage = pathname === `/${locale}/tours` ||
        pathname === `/${locale}/activities` ||
        pathname === `/${locale}/packages` ||
        pathname === `/${locale}/transport`;
    const needsWhiteText = isHomePage || isAboutPage || isServicesPage || isServiceDetailPage || isServiceListingPage || isContactPage || isGalleryPage;

    // Determine text colors based on scroll and page
    const textColorClass = isScrolled || !needsWhiteText ? 'text-neutral-dark' : 'text-white';
    const navTextClass = isScrolled || !needsWhiteText ? 'text-neutral-dark hover:text-primary' : 'text-white/90 hover:text-white';
    const logoColorClass = isScrolled || !needsWhiteText ? 'text-primary' : 'text-white';
    const buttonClass = isScrolled || !needsWhiteText
        ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
        : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                } ${!needsWhiteText && !isScrolled ? 'bg-secondary' : ''}`} // Fallback for other pages if not scrolled
        >
            <div className="container mx-auto px-4 flex items-center justify-between relative">

                {/* Logo Section - Left */}
                <Link href={`/${locale}`} className={`flex items-center gap-2 z-50 transition-colors ${logoColorClass}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isScrolled || !isHomePage ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                        <span className="font-bold text-xl">Y</span>
                    </div>
                </Link>

                {/* Centered Navigation */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-medium transition-colors text-sm tracking-wide ${navTextClass}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6 z-50">
                    <select
                        defaultValue={locale}
                        onChange={handleLocaleChange}
                        disabled={isPending}
                        className={`bg-transparent border-none text-sm focus:outline-none cursor-pointer font-medium ${textColorClass}`}
                    >
                        <option value="en" className="text-neutral-dark">EN</option>
                        <option value="fr" className="text-neutral-dark">FR</option>
                    </select>

                    <Link
                        href={`/${locale}/services`}
                        className={`px-6 py-2.5 rounded-full font-medium transition-all text-sm ${buttonClass}`}
                    >
                        Trip Now &rarr;
                    </Link>
                </div>

                {/* Mobile Menu Icon Placeholder */}
                <div className={`md:hidden text-2xl cursor-pointer ${textColorClass}`}>
                    ☰
                </div>
            </div>
        </header>
    );
}
