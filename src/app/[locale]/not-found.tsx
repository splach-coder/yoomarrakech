'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
    const t = useTranslations('NotFound');
    const locale = useLocale();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <p className="text-7xl font-bold font-poppins text-primary/20 mb-4">404</p>
            <h2 className="text-2xl font-bold mb-4 font-poppins text-neutral-dark">{t('title')}</h2>
            <p className="text-gray-500 mb-8 max-w-md">{t('text')}</p>
            <Link
                href={`/${locale}`}
                className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
                {t('backHome')}
            </Link>
        </div>
    );
}
