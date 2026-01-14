'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const getDestinations = (dict: any) => [
    {
        id: 1,
        title: dict.Marrakech,
        image: "/images/marrakech/marrakech1.jpg",
        description: dict.MarrakechDesc,
        link: "/tours?search=Marrakech"
    },
    {
        id: 2,
        title: dict.Agafay,
        image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
        description: dict.AgafayDesc,
        link: "/packages?search=Agafay"
    },
    {
        id: 3,
        title: dict.Atlas,
        image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
        description: dict.AtlasDesc,
        link: "/tours?search=Atlas"
    }
];

export const PopularDestinations = ({ locale, dict }: { locale: string, dict: any }) => {
    const destinations = getDestinations(dict);

    return (
        <section className="py-8 container mx-auto px-6 md:px-4">
            {/* Top Divider with Title */}
            <div className="flex items-center justify-center mb-16 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-[1px] bg-gray-200"></div>
                </div>
                <span className="relative bg-secondary px-8 font-poppins font-semibold text-primary text-lg italic z-10">
                    {dict.title}
                </span>
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight font-poppins text-neutral-dark mb-4">
                        {dict.heading1} <br />
                        <span className="text-primary/80">{dict.heading2}</span>
                    </h2>
                </div>

                <div className="max-w-md flex flex-col items-end text-right">
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        {dict.description}
                    </p>
                    <Link
                        href={`/${locale}/services`}
                        className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
                    >
                        {dict.viewAll}
                    </Link>
                </div>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations.map((dest, i) => (
                    <Link href={`/${locale}${dest.link}`} key={dest.id} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group cursor-pointer h-full"
                        >
                            {/* Image Card */}
                            <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${dest.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            {/* Content */}
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-2xl font-bold font-poppins text-neutral-dark">{dest.title}</h3>
                                <div className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed pr-4">
                                {dest.description}
                            </p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
