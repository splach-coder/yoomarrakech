'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteData } from '@/data/siteData';
import { ArrowLeft, ArrowUpRight, Clock, Star, Users } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default function TransportPage({ params }: PageProps) {
    const { locale } = React.use(params);
    const t = useTranslations('ListingPage');
    const transport = siteData.transport || [];

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark">
            {/* Hero Banner */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
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
                            {t('tag')}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
                            {t('transportTitle')}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                            {t('transportSubtitle')}
                        </p>
                        <Link
                            href={`/${locale}/services`}
                            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-neutral-dark text-white transition-all inline-flex items-center gap-2 font-medium backdrop-blur-sm"
                        >
                            <ArrowLeft className="w-5 h-5" /> {t('viewAllCollections')}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Transport Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {transport.map((item: any, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[350px] border border-neutral-100 group cursor-pointer hover:-translate-y-1">
                                <div className="md:w-2/5 relative h-64 md:h-full overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${item.image || '/images/hero-marrakech.jpg'})` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-dark shadow-sm">
                                        {t('transportLabel')}
                                    </div>
                                </div>

                                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                                <Clock className="w-3 h-3 text-primary" />
                                                <span>{t('transportFlexible')}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-1 rounded-md">
                                                <Star className="w-3 h-3 fill-current" />
                                                <span>4.9</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-3 leading-tight group-hover:text-primary transition-colors">
                                            {item.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                                            {t('transportDescDefault', { itemName: item.name })}
                                        </p>
                                    </div>

                                    <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium mb-0.5">{t('price')}</p>
                                            <p className="text-2xl font-bold text-primary">{t('onRequest')}</p>
                                        </div>

                                        <Link
                                            href={`/${locale}/transport/${item.id}`}
                                            className="px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-dark font-medium text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2"
                                        >
                                            {t('details')} <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
