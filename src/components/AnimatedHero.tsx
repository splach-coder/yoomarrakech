'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { HeroSearchBar } from './HeroSearchBar';

interface AnimatedHeroProps {
    lang: string;
}

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: 'easeOut' as const, delay },
});

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ lang }) => {
    const t = useTranslations('HomePage');
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-dark flex flex-col justify-center"
        >
            {/* Image Background with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-marrakech.jpg"
                    alt="Minaret silhouette against a sunset sky in Marrakech"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/35 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 z-10" />
            </motion.div>

            {/* Central Content — staggered entrance */}
            <div className="relative z-10 container mx-auto px-4 text-center pb-24 flex flex-col items-center">
                {/* Tag line */}
                <motion.p
                    className="font-dancing text-2xl md:text-3xl text-white mb-4 italic drop-shadow-md"
                    {...fadeUp(0.3)}
                >
                    {t('heroTag')}
                </motion.p>

                {/* Main title */}
                <motion.h1
                    className="max-w-6xl mx-auto text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 font-poppins tracking-tight leading-tight drop-shadow-lg"
                    {...fadeUp(0.55)}
                >
                    {t('heroTitle')}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="max-w-xl mx-auto text-white/90 text-base md:text-lg font-light leading-relaxed mb-10 drop-shadow-md"
                    {...fadeUp(0.7)}
                >
                    {t('heroFooter')}
                </motion.p>

                {/* Search bar — date + travelers, shared booking state */}
                <motion.div className="w-full" {...fadeUp(0.85)}>
                    <HeroSearchBar />
                </motion.div>
            </div>
        </section>
    );
};
