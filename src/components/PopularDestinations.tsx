'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const destinations = [
    {
        id: 1,
        title: "Marrakech",
        image: "/images/hero-marrakech.jpg", // Reusing for now, ideally unique images
        description: "Dive into the vibrant heart of Morocco! Marrakech dazzles with its endless energy, from the neon-lit streets of the Medina to the tranquil Majorelle Garden.",
    },
    {
        id: 2,
        title: "Agafay Desert",
        image: "/images/hero-marrakech.jpg",
        description: "Experience the magic of the stone desert just outside the city. A perfect blend of luxury camping, camel treks, and starlit dinners.",
    },
    {
        id: 3,
        title: "Atlas Mountains",
        image: "/images/hero-marrakech.jpg",
        description: "Escape to the majestic peaks. Discover traditional Berber villages, waterfalls, and breathtaking panoramic views.",
    }
];

export const PopularDestinations = ({ locale }: { locale: string }) => {
    return (
        <section className="py-8 container mx-auto">
            {/* Top Divider with Title */}
            <div className="flex items-center justify-center mb-16 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-[1px] bg-gray-200"></div>
                </div>
                <span className="relative bg-secondary px-8 font-poppins font-semibold text-primary text-lg italic z-10">
                    Popular Destinations
                </span>
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight font-poppins text-neutral-dark mb-4">
                        Journey Through Morocco's <br />
                        <span className="text-primary/80">Best Destinations</span>
                    </h2>
                </div>

                <div className="max-w-md flex flex-col items-end text-right">
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        Discover Morocco's cosmopolitan cities, ancient medinas, and breathtaking landscapes just a short distance from each other.
                    </p>
                    <Link
                        href={`/${locale}/services`}
                        className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
                    >
                        View All
                    </Link>
                </div>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations.map((dest, i) => (
                    <motion.div
                        key={dest.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group cursor-pointer"
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
                ))}
            </div>
        </section>
    );
};
