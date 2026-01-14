'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface AnimatedHeroProps {
    lang: string;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ lang }) => {
    const t = useTranslations('HomePage');
    const containerRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set slow motion playback speed (0.5 = half speed)
        video.playbackRate = 0.5;

        // Play video only after it's fully loaded
        const handleCanPlayThrough = () => {
            setIsVideoLoaded(true);
            video.play().then(() => {
                setIsVideoPlaying(true);
            }).catch((error) => {
                console.error('Video autoplay prevented:', error);
            });
        };

        const videoEl = video;
        videoEl.addEventListener('canplaythrough', handleCanPlayThrough);

        // Force load
        videoEl.load();

        return () => {
            videoEl.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-dark flex flex-col justify-center">
            {/* Video Background with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Video Element with Zoom Animation */}
                <motion.video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isVideoPlaying ? 1 : 1.1 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    aria-label="Background video showcasing Marrakech, Morocco"
                    style={{
                        opacity: isVideoLoaded ? 1 : 0,
                        zIndex: isVideoLoaded ? 10 : 0
                    }}
                >
                    <source src="/videos/159727-819369000.mp4" type="video/mp4" />
                </motion.video>

                {/* Fallback image while video loads */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2070)',
                        opacity: isVideoLoaded ? 0 : 1,
                        zIndex: 5
                    }}
                />

                {/* Overlays - Above video */}
                <div className="absolute inset-0 bg-black/30 z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20" />
            </motion.div>

            {/* Central Content */}
            <div className="relative z-10 container mx-auto px-4 text-center pb-24 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-dancing text-2xl md:text-3xl text-white mb-4 italic drop-shadow-md">
                        {t('heroTag')}
                    </p>
                </motion.div>

                <motion.h1
                    className="max-w-6xl mx-auto text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 font-poppins tracking-tight leading-tight drop-shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {t('heroTitle')}
                </motion.h1>
            </div>

            {/* Bottom Footer Info */}
            <div className="absolute bottom-8 left-0 right-0 z-10 container mx-auto px-6">
                <div className="flex justify-center items-center">
                    {/* Center: Description Text */}
                    <div className="max-w-lg text-center text-white/90 text-sm font-light leading-relaxed hidden md:block animate-fade-in-up delay-700">
                        {t('heroFooter')}
                    </div>
                </div>
            </div>
        </section>
    );
};
