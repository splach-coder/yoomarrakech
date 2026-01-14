'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const galleryImages = [
    { src: '/images/marrakech/marrakech1.jpg', span: 'row-span-2' },
    { src: '/images/marrakech/marrakech2.jpg', span: 'row-span-2' },
    { src: '/images/marrakech/marrakech3.jpg', span: 'row-span-1' },
    { src: '/images/marrakech/marrakech4.jpg', span: 'row-span-1' },
    { src: '/images/marrakech/marrakech5.jpg', span: 'row-span-2' },
    { src: '/images/marrakech/marrakech6.jpg', span: 'row-span-2' },
    { src: '/images/marrakech/marrakech7.jpg', span: 'row-span-1' },
];

export const GallerySection = ({ locale, dict }: { locale: string, dict: any }) => {
    return (
        <section className="py-8 container mx-auto px-6 md:px-4">
            {/* Top Divider with Title */}
            <div className="flex items-center justify-center mb-12 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="h-[1px] bg-gray-200 w-full"></div>
                </div>
                <div className="relative bg-secondary px-8">
                    <span className="font-poppins font-semibold text-primary text-lg italic">{dict.title}</span>
                </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-medium font-poppins leading-tight">
                    {dict.headlinePart1} <span className="text-primary/80 font-light">{dict.headlinePart2}</span>
                </h2>
            </div>

            {/* Masonry-style Gallery Grid */}
            <div className="relative max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {/* Row 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <Image src="/images/marrakech/marrakech1.jpg" alt="Gallery 1" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <Image src="/images/marrakech/marrakech2.jpg" alt="Gallery 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <Image src="/images/marrakech/marrakech3.jpg" alt="Gallery 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer md:col-span-2"
                    >
                        <Image src="/images/marrakech/marrakech4.jpg" alt="Gallery 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <Image src="/images/marrakech/marrakech5.jpg" alt="Gallery 5" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer md:col-span-3"
                    >
                        <Image src="/images/marrakech/marrakech6.jpg" alt="Gallery 6" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <Image src="/images/marrakech/marrakech7.jpg" alt="Gallery 7" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                </div>

                {/* Centered Explore Button - Absolute positioned between rows vertically */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <Link
                        href={`/${locale}/gallery`}
                        className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-2xl flex items-center gap-2 transform hover:scale-105 border border-primary/10"
                    >
                        {dict.explore} <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Mobile Button (Simple spacing) */}
                <div className="flex justify-center mt-8 md:hidden">
                    <Link
                        href={`/${locale}/gallery`}
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2 border border-primary/10"
                    >
                        {dict.explore} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Bottom Description */}
            <div className="text-center mt-12 max-w-3xl mx-auto">
                <p className="text-gray-600 text-sm leading-relaxed">
                    {dict.description}
                </p>
            </div>
        </section>
    );
};
