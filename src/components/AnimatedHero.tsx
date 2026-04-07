'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

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
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.playbackRate = 0.5;

        const handleCanPlay = () => {
            video.play().catch(() => {});
            setTimeout(() => setIsVideoReady(true), 100);
        };

        video.addEventListener('canplaythrough', handleCanPlay);
        video.load();

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlay);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-dark flex flex-col justify-center"
        >
            {/* Video Background with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                {/* Video — starts invisible, fades in only when ready. No fallback image = no flash. */}
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label="Background video showcasing Marrakech, Morocco"
                    style={{
                        opacity: isVideoReady ? 1 : 0,
                        transition: 'opacity 1s ease',
                    }}
                >
                    <source src="/videos/159727-819369000.mp4" type="video/mp4" />
                </video>

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
                    className="max-w-6xl mx-auto text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 font-poppins tracking-tight leading-tight drop-shadow-lg"
                    {...fadeUp(0.55)}
                >
                    {t('heroTitle')}
                </motion.h1>
            </div>

            {/* Bottom footer text */}
            <div className="absolute bottom-8 left-0 right-0 z-10 container mx-auto px-6">
                <div className="flex justify-center items-center">
                    <motion.div
                        className="max-w-lg text-center text-white/90 text-sm font-light leading-relaxed hidden md:block"
                        {...fadeUp(0.85)}
                    >
                        {t('heroFooter')}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
