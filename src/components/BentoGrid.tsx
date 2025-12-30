'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Map, Sun, Bus, Compass } from 'lucide-react';
import Link from 'next/link';

interface BentoItemProps {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    className?: string; // For grid sizing (col-span)
    bgImage?: string;
    delay?: number;
}

const BentoItem: React.FC<BentoItemProps> = ({ title, description, icon: Icon, href, className = "", bgImage, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`relative rounded-3xl overflow-hidden group ${className}`}
        >
            <Link href={href} className="block w-full h-full">
                {/* Background Layer */}
                <div className="absolute inset-0 bg-neutral-dark transition-colors duration-500" />

                {/* Optional Image Background */}
                {bgImage && (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                )}

                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="mb-auto transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold font-poppins text-white mb-2">{title}</h3>
                            <p className="text-gray-300 text-sm font-light max-w-xs">{description}</p>
                        </div>
                        <Icon className="w-10 h-10 text-white/20 group-hover:text-primary transition-colors duration-300" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export const BentoGrid = ({ locale }: { locale: string }) => {
    return (
        <div className="container mx-auto px-6 md:px-4 py-24">
            <motion.div className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold font-poppins text-neutral-dark mb-4">Uncover the Magic</h2>
                <p className="text-gray-600 max-w-xl mx-auto">Categorized experiences designed to take you deeper into the heart of Morocco.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                {/* Large Item - Tours */}
                <BentoItem
                    title="Authentic Tours"
                    description="Guided journeys through Atlas Mountains and ancient cities."
                    icon={Map}
                    href={`/${locale}/services#tours`}
                    className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-accent"
                    bgImage="/images/hero-marrakech.jpg" // Reusing hero image for now
                    delay={0.1}
                />

                {/* Medium Item - Activities */}
                <BentoItem
                    title="Desert Activities"
                    description="Quad biking & camel treks in Agafay."
                    icon={Sun}
                    href={`/${locale}/services#activities`}
                    className="bg-neutral-dark"
                    delay={0.2}
                />

                {/* Medium Item - Transport */}
                <BentoItem
                    title="Private Transport"
                    description="Comfortable transfers & logistics."
                    icon={Bus}
                    href={`/${locale}/services#transport`}
                    className="bg-neutral-dark"
                    delay={0.3}
                />
            </div>
        </div>
    );
}
