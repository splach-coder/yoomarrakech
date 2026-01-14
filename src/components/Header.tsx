'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Keep header background check but handle Home page specific logic via CSS or simple condition
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

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

    // Determine text colors based on scroll, page, and menu state
    const isDarkText = isScrolled || !needsWhiteText || isMenuOpen;
    const textColorClass = isDarkText ? 'text-neutral-dark' : 'text-white';
    const navTextClass = isDarkText ? 'text-neutral-dark hover:text-primary' : 'text-white/90 hover:text-white';
    const buttonClass = isDarkText
        ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
        : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30';

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? `py-4 ${!isMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-4 flex items-center justify-between relative">

                    {/* Logo Section */}
                    <Link href={`/${locale}`} className="flex items-center gap-2 z-50 relative">
                        <Image
                            src="/images/logo.png"
                            alt="YooMarrakech"
                            width={64}
                            height={64}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
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

                    {/* Desktop Right Actions */}
                    <div className="hidden md:flex items-center gap-6 z-50">
                        <select
                            defaultValue={locale}
                            onChange={handleLocaleChange}
                            disabled={isPending}
                            className={`bg-transparent border-0 text-sm focus:outline-none focus:border-0 cursor-pointer font-medium ${textColorClass}`}
                        >
                            <option value="en" className="text-neutral-dark">EN</option>
                            <option value="fr" className="text-neutral-dark">FR</option>
                        </select>

                        <Link
                            href={`/${locale}/services`}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all text-sm ${buttonClass}`}
                        >
                            {t('tripNow')} &rarr;
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm active:scale-95 transition-all"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} className={isMenuOpen ? "text-neutral-dark" : (isScrolled ? "text-neutral-dark" : "text-neutral-dark")} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} className={isScrolled ? "text-neutral-dark" : "text-neutral-dark"} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-neutral-light z-30 md:hidden flex flex-col pt-24 pb-8 px-6"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                        {/* Menu Items */}
                        <div className="flex-1 flex flex-col items-center justify-center space-y-6 relative z-10">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-poppins font-bold text-neutral-dark hover:text-primary transition-colors block text-center"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer / Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="space-y-6 relative z-10"
                        >
                            <div className="flex justify-center gap-6">
                                <button
                                    onClick={() => {
                                        startTransition(() => {
                                            const newPath = pathname.replace(`/${locale}`, '/en');
                                            router.replace(newPath);
                                        });
                                        setIsMenuOpen(false);
                                    }}
                                    className={`font-bold text-lg transition-colors ${locale === 'en' ? 'text-primary' : 'text-neutral-dark/40 hover:text-neutral-dark'}`}
                                >
                                    EN
                                </button>
                                <span className="text-neutral-dark/20">|</span>
                                <button
                                    onClick={() => {
                                        startTransition(() => {
                                            const newPath = pathname.replace(`/${locale}`, '/fr');
                                            router.replace(newPath);
                                        });
                                        setIsMenuOpen(false);
                                    }}
                                    className={`font-bold text-lg transition-colors ${locale === 'fr' ? 'text-primary' : 'text-neutral-dark/40 hover:text-neutral-dark'}`}
                                >
                                    FR
                                </button>
                            </div>

                            <Link
                                href={`/${locale}/services`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full bg-primary text-neutral-dark font-bold text-lg py-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                            >
                                {t('bookYourTrip')}
                            </Link>

                            <div className="text-center text-sm text-neutral-dark/40 pt-4">
                                © {new Date().getFullYear()} YooMarrakech. {t('allRightsReserved')}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

