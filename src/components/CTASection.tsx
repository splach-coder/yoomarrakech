'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export const CTASection = ({ locale, dict }: { locale: string, dict: any }) => {
    return (
        <section className="py-8 container mx-auto px-6 md:px-4">
            <div className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-12 md:p-24 shadow-2xl group">
                {/* Background Image with Blur */}
                <div className="absolute inset-0" aria-hidden="true">
                    <Image
                        src="/images/marrakech/marrakech4.jpg"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover scale-110 blur-[8px]"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-white leading-tight tracking-tight">
                        {dict.ready}
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                        {dict.text}
                    </p>

                    <div className="flex justify-center">
                        <Link
                            href={`/${locale}/contact`}
                            className="px-8 py-3 rounded-full bg-white text-neutral-dark font-bold hover:bg-gray-100 transition-all font-poppins shadow-xl transform hover:scale-105"
                        >
                            {dict.button}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
