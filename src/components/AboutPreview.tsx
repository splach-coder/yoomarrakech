'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '', decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "some" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref} className="text-5xl font-medium font-poppins mb-2 text-primary inline-block">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

export const AboutPreview = ({ locale }: { locale: string }) => {
    return (
        <section className="py-8 container mx-auto px-6 md:px-4">
            {/* Top Divider with Title */}
            <div className="flex items-center justify-between mb-12">
                <div className="h-[1px] bg-gray-200 flex-grow mr-8"></div>
                <span className="font-poppins font-semibold text-primary text-lg italic">About us</span>
            </div>

            {/* Main Headline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mb-16"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight font-poppins">
                    <span className="text-neutral-dark">We specialize in creating tailor-made journeys across Morocco, </span>
                    <span className="text-primary/80">blending must-see landmarks with hidden gems to give you a true sense of this beautiful country.</span>
                </h2>
            </motion.div>

            {/* Image Banner */}
            <motion.div
                className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-16 group border-4 border-primary/20"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                {/* Center Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                        href={`/${locale}/about`}
                        className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2 transform hover:scale-105"
                    >
                        Read More <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.div>

            {/* Two Column Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 max-w-6xl mx-auto">
                <p className="text-gray-600 leading-relaxed text-lg">
                    Our team is made up of Morocco enthusiasts, local experts, and travel specialists dedicated to crafting unique and meaningful experiences. We don't just show you the sights; we connect you with the soul of the place.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                    From Marrakech's vibrant energy to the quiet dunes of the Agafay Desert, and from the scenic Atlas Mountains to the coastal charm of Essaouira, we strive to bring out the best of Morocco in each trip.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto border-t border-gray-100 pt-12">
                <div>
                    <div>
                        <AnimatedCounter value={98} suffix="%" />
                    </div>
                    <p className="text-gray-500 max-w-xs">
                        of travelers would recommend us to friends and family.
                    </p>
                </div>
                <div>
                    <div>
                        <AnimatedCounter value={100} suffix="+" />
                    </div>
                    <p className="text-gray-500 max-w-xs">
                        unique itineraries crafted each year to showcase Morocco.
                    </p>
                </div>
                <div>
                    <div>
                        <AnimatedCounter value={4.9} suffix="/5" decimals={1} />
                    </div>
                    <p className="text-gray-500 max-w-xs">
                        average rating from hundreds of happy customers.
                    </p>
                </div>
            </div>
        </section>
    );
};
