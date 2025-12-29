'use client';

import React from 'react';
import { Button } from './ui/Button';
import { useTranslations } from 'next-intl';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    onCtaClick?: () => void;
    lang: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, onCtaClick, lang }) => {
    return (
        <div className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-neutral-dark">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)', opacity: 0.6 }} // Placeholder image path
            />
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins tracking-tight animate-fade-in-up">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
                    {subtitle}
                </p>
                <div className="animate-fade-in-up delay-200">
                    <Button
                        variant="primary"
                        size="lg"
                        href={`/${lang}/services`}
                        className="bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary transition-colors"
                    >
                        {ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
};
