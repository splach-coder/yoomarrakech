'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Award } from 'lucide-react';

interface AnimatedHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    lang: string;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ lang }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-dark flex flex-col justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/images/hero-marrakech.jpg)',
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </motion.div>

            {/* Central Content */}
            <div className="relative z-10 container mx-auto px-4 text-center pb-24 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-dancing text-2xl md:text-3xl text-white mb-4 italic drop-shadow-md">
                        Discover Marrakech
                    </p>
                </motion.div>

                <motion.h1
                    className="max-w-6xl mx-auto text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 font-poppins tracking-tight leading-tight drop-shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    A Journey of Tradition,<br className="hidden md:block" />
                    Innovation, and Natural Beauty
                </motion.h1>
            </div>

            {/* Bottom Footer Info */}
            <div className="absolute bottom-8 left-0 right-0 z-20 container mx-auto px-6">
                <div className="flex justify-center items-center">
                    {/* Center: Description Text */}
                    <div className="max-w-lg text-center text-white/90 text-sm font-light leading-relaxed hidden md:block animate-fade-in-up delay-700">
                        Curated travel experiences showcasing the timeless beauty of Marrakech.
                    </div>
                </div>
            </div>
        </div>
    );
};
