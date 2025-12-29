'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Shield, Star, Heart } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '', decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref} className="text-6xl font-medium font-poppins mb-2 text-primary inline-block">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

export const AboutPageContent = () => {
    const t = useTranslations('AboutPage');

    return (
        <div className="min-h-screen bg-secondary">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                ></div>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block font-poppins font-semibold text-primary text-xl italic mb-4">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="h-[1px] bg-gray-300 w-16 mr-4"></div>
                            <span className="font-poppins font-semibold text-primary text-lg italic">Our Story</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium font-poppins text-neutral-dark mb-8 leading-tight">
                            {t('storyTitle')}
                        </h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                            <p>{t('storyText')}</p>
                            <p>
                                Founded by locals with a deep love for their heritage, we aim to show you the Morocco that we know and love. From the bustling souks of Marrakech to the serene silence of the Agafay desert, every experience is crafted with care.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 group"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                        ></div>
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="p-4">
                            <AnimatedCounter value={98} suffix="%" />
                            <p className="text-gray-500 mt-2 text-lg">Travelers recommend us</p>
                        </div>
                        <div className="p-4">
                            <AnimatedCounter value={100} suffix="+" />
                            <p className="text-gray-500 mt-2 text-lg">Unique itineraries</p>
                        </div>
                        <div className="p-4">
                            <AnimatedCounter value={4.9} suffix="/5" decimals={1} />
                            <p className="text-gray-500 mt-2 text-lg">Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="font-poppins font-semibold text-primary text-lg italic block mb-4">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-medium font-poppins text-neutral-dark leading-tight">
                        Our Core <span className="text-primary italic">Values</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="bg-white p-10 rounded-3xl text-center group hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary/20">
                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-300">
                            <Heart className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-4">Authentic Connection</h3>
                        <p className="text-gray-500 leading-relaxed">
                            We prioritize genuine interactions, connecting you directly with local artisans, guides, and communities.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-white p-10 rounded-3xl text-center group hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary/20">
                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-300">
                            <Star className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-4">Premium Quality</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {t('missionText')}
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-white p-10 rounded-3xl text-center group hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary/20">
                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-300">
                            <Shield className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-4">Safe & Reliable</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Your safety is our top priority. We provide professional transport, expert guides, and 24/7 support.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
