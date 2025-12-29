'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/data/siteData';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowUpRight, Compass, Map, Palmtree, Car, Clock, Users, Star } from 'lucide-react';
import Link from 'next/link';

const categories = {
    tours: { label: 'Cultural Tours', image: '/images/hero-marrakech.jpg', desc: 'Immerse yourself in history.', icon: Map },
    activities: { label: 'Adventures', image: '/images/hero-marrakech.jpg', desc: 'Thrills in the desert.', icon: Compass },
    packages: { label: 'Curated Packs', image: '/images/hero-marrakech.jpg', desc: 'Complete experiences.', icon: Palmtree },
    transport: { label: 'Transport', image: '/images/hero-marrakech.jpg', desc: 'Travel in comfort.', icon: Car },
};

// Moroccan Pattern SVG Background
const PatternBackground = () => (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FDC82F 1px, transparent 0)', backgroundSize: '40px 40px' }}>
    </div>
);

export const ServicesPageContent = ({ locale }: { locale: string }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const getItems = () => {
        if (selectedCategory === 'tours') return siteData.tours;
        if (selectedCategory === 'packages') return siteData.packages;
        if (selectedCategory === 'transport') return siteData.transport;

        if (selectedCategory === 'activities') {
            const experiences = siteData.activities.experiences || [];
            // Group by type
            const grouped = experiences.reduce((acc: any, curr: any) => {
                const type = curr.type;
                if (!acc[type]) {
                    acc[type] = {
                        ...curr,
                        id: curr.type, // Use type as ID
                        name: `${curr.type} Adventures`,
                        desc: `Experience our exclusive ${curr.type} activities.`,
                        isGrouped: true
                    };
                }
                if (curr.price < acc[type].price) {
                    acc[type].price = curr.price;
                }
                return acc;
            }, {});
            return Object.values(grouped);
        }
        return [];
    };

    const renderPrice = (item: any) => {
        if (item.price) return `${item.price}€`;
        if (item.pricing && item.pricing[0]) {
            const p = item.pricing[0];
            return p.totalPrice ? `${p.totalPrice}€` : `${p.pricePerPerson}€/p`;
        }
        return '';
    };

    const renderDuration = (item: any) => {
        if (item.duration) return item.duration.replace('_', ' ');
        if (item.availableFrom) return `${item.availableFrom} - ${item.availableTo}`;
        return 'Flexible';
    }

    return (
        <div className="min-h-screen relative overflow-hidden font-poppins text-neutral-dark">
            <div className="absolute inset-0 bg-[#F2F2F2]">
                <PatternBackground />
            </div>

            <div className="relative z-10">
                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="min-h-screen pt-32 pb-20 container mx-auto px-4"
                        >
                            <div className="text-center mb-16">
                                <span className="font-poppins font-semibold text-primary text-xl italic mb-3 block">Discover Morocco</span>
                                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-neutral-dark mb-6 tracking-tight">
                                    Curated <span className="text-primary/80">Experiences</span>
                                </h1>
                            </div>

                            {/* Mosaic / Bento Grid Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[70vh] min-h-[600px]">

                                {/* TOURS: Large Main Block (Left) */}
                                <Link href={`/${locale}/tours`}>
                                    <motion.div
                                        className="lg:col-span-7 relative rounded-xl overflow-hidden cursor-pointer group shadow-2xl"
                                        whileHover={{ scale: 0.99 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${categories.tours.image})` }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity"></div>
                                        <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl w-fit mb-4">
                                                        <categories.tours.icon className="w-8 h-8 text-white" />
                                                    </div>
                                                    <h2 className="text-5xl font-bold font-poppins text-white mb-2">{categories.tours.label}</h2>
                                                    <p className="text-xl font-light opacity-90">{categories.tours.desc}</p>
                                                </div>
                                                <div className="border border-white/30 rounded-full p-4 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                                                    <ArrowUpRight className="w-8 h-8" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>

                                {/* Right Column */}
                                <div className="lg:col-span-5 flex flex-col gap-6 h-full">

                                    {/* ACTIVITIES: Top Right */}
                                    <Link href={`/${locale}/activities`}>
                                        <motion.div
                                            className="flex-1 relative rounded-xl overflow-hidden cursor-pointer group shadow-2xl"
                                            whileHover={{ scale: 0.99 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${categories.activities.image})` }}></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                                            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h2 className="text-3xl font-bold font-poppins text-white mb-1">{categories.activities.label}</h2>
                                                        <p className="text-sm font-light opacity-90">{categories.activities.desc}</p>
                                                    </div>
                                                    <categories.activities.icon className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>

                                    {/* Bottom Split: Packages & Transport */}
                                    <div className="flex-1 flex gap-6">

                                        {/* PACKAGES */}
                                        <Link href={`/${locale}/packages`}>
                                            <motion.div
                                                className="flex-1 relative rounded-xl overflow-hidden cursor-pointer group shadow-2xl"
                                                whileHover={{ scale: 0.99 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${categories.packages.image})` }}></div>
                                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                                                    <categories.packages.icon className="w-10 h-10 mb-3 text-white/90" />
                                                    <h2 className="text-2xl font-bold font-poppins text-white">{categories.packages.label}</h2>
                                                </div>
                                            </motion.div>
                                        </Link>

                                        {/* TRANSPORT */}
                                        <Link href={`/${locale}/transport`}>
                                            <motion.div
                                                className="flex-1 relative rounded-xl overflow-hidden cursor-pointer group shadow-2xl bg-neutral-900 border border-neutral-800 hover:border-primary/50"
                                                whileHover={{ scale: 0.99 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                                                    <categories.transport.icon className="w-10 h-10 mb-3 text-white/90" />
                                                    <h2 className="text-2xl font-bold font-poppins text-white">{categories.transport.label}</h2>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Category Hero Banner */}
                            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${categories[selectedCategory as keyof typeof categories].image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                                    <h2 className="text-6xl md:text-8xl font-bold font-poppins mb-6 capitalize animate-fade-in-up text-white">
                                        {categories[selectedCategory as keyof typeof categories].label}
                                    </h2>
                                    <p className="text-2xl font-light opacity-90 animate-fade-in-up delay-100 text-white mb-8">
                                        {categories[selectedCategory as keyof typeof categories].desc}
                                    </p>
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        className="px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-neutral-dark text-white transition-all flex items-center gap-2 font-medium backdrop-blur-sm animate-fade-in-up delay-200"
                                    >
                                        <ArrowLeft className="w-5 h-5" /> View All Collections
                                    </button>
                                </div>
                            </div>

                            {/* Professional Listing Grid */}
                            <div className="container mx-auto px-4 py-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {getItems().map((item: any, idx) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group"
                                        >
                                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[350px] border border-neutral-100 group cursor-pointer hover:-translate-y-1">
                                                {/* Image Section */}
                                                <div className="md:w-2/5 relative h-64 md:h-full overflow-hidden">
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                        style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                                                    ></div>
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-dark shadow-sm">
                                                        {selectedCategory}
                                                    </div>
                                                </div>

                                                {/* Content Section */}
                                                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                                                <Clock className="w-3 h-3 text-primary" />
                                                                <span>{renderDuration(item)}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-1 rounded-md">
                                                                <Star className="w-3 h-3 fill-current" />
                                                                <span>4.9</span>
                                                            </div>
                                                        </div>

                                                        <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-3 leading-tight group-hover:text-primary transition-colors uppercase">
                                                            {item.name || item.type}
                                                        </h3>

                                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                                                            {item.desc || "Immerse yourself in the authentic beauty of Morocco with our expertly curated experience."}
                                                        </p>
                                                    </div>

                                                    <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                                                        <div>
                                                            <p className="text-xs text-gray-400 font-medium mb-0.5">Starting from</p>
                                                            <p className="text-2xl font-bold text-primary">{renderPrice(item)}</p>
                                                        </div>

                                                        <Link
                                                            href={`/${locale}/${selectedCategory === 'activities' ? 'activities' : selectedCategory}/${item.id}`}
                                                            className="px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-dark font-medium text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2"
                                                        >
                                                            Details <ArrowUpRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
