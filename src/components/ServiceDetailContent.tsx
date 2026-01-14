'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookingForm } from '@/components/BookingForm';
import { Clock, MapPin, Check, X, Users, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface SubItem {
    id: string;
    type: string;
    location?: string;
    price: number;
    duration?: string;
}

interface ServiceDetailProps {
    id: string;
    type: 'tour' | 'activity' | 'package' | 'transport';
    title: string;
    description: string;
    image: string;
    price: number | string;
    duration?: string;
    location?: string;
    included?: string[];
    excluded?: string[];
    minPeople?: number;
    subItems?: SubItem[]; // For grouped activities like "Quad"
    locale: string;
    gallery?: string[];
}

export const ServiceDetailContent = ({
    type,
    title,
    description,
    image,
    price,
    duration,
    location,
    included = [],
    excluded = [],
    subItems = [],
    locale,
    gallery = []
}: ServiceDetailProps) => {

    const renderDuration = (d: string) => d?.replace('_', ' ') || 'Flexible';

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center fixed-bg" // simple parallax if implemented in css
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>



                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white z-10">
                    <div className="container mx-auto px-6 md:px-4">
                        <div className="max-w-4xl">
                            <div className="mb-6">
                                <Link href={`/${locale}/services`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                                    <ArrowLeft className="w-4 h-4" /> Back to Services
                                </Link>
                            </div>
                            <span className="inline-block px-3 py-1 rounded-md bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
                                {type}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">{title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium opacity-90">
                                {location && (
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span>{location}</span>
                                    </div>
                                )}
                                {duration && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>{renderDuration(duration)}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span>4.9 (120 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100">
                            <h2 className="text-2xl font-bold mb-6">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                {description}
                            </p>
                        </div>

                        {/* Gallery Section */}
                        {gallery && gallery.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100">
                                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {gallery.map((imgSrc, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${imgSrc})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Variants (If Grouped Activity) */}
                        {subItems.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100">
                                <h2 className="text-2xl font-bold mb-6">Available Options</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {subItems.map((item) => (
                                        <div key={item.id} className="border border-neutral-200 rounded-xl p-4 hover:border-primary transition-colors cursor-pointer bg-neutral-50 group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-lg capitalize">{item.location || item.type}</h3>
                                                <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded text-sm">
                                                    {item.price}€
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-2">Experience the thrill in {item.location}.</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Inclusions / Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check className="w-5 h-5" />
                                    </span>
                                    Included
                                </h3>
                                <ul className="space-y-3">
                                    {included.length > 0 ? included.map((inc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{inc}</span>
                                        </li>
                                    )) : (
                                        <>
                                            <li className="flex items-start gap-3 text-gray-600 text-sm"><Check className="w-4 h-4 text-green-500 mt-0.5" />Hotel Pickup & Drop-off</li>
                                            <li className="flex items-start gap-3 text-gray-600 text-sm"><Check className="w-4 h-4 text-green-500 mt-0.5" />Professional Guide</li>
                                            <li className="flex items-start gap-3 text-gray-600 text-sm"><Check className="w-4 h-4 text-green-500 mt-0.5" />Transport A/C</li>
                                        </>
                                    )}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                        <X className="w-5 h-5" />
                                    </span>
                                    Not Included
                                </h3>
                                <ul className="space-y-3">
                                    {excluded.length > 0 ? excluded.map((exc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                            <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                            <span>{exc}</span>
                                        </li>
                                    )) : (
                                        <>
                                            <li className="flex items-start gap-3 text-gray-600 text-sm"><X className="w-4 h-4 text-red-400 mt-0.5" />Personal Expenses</li>
                                            <li className="flex items-start gap-3 text-gray-600 text-sm"><X className="w-4 h-4 text-red-400 mt-0.5" />Tips</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* Custom Plan Block - Moved to Left Column */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="font-bold text-xl mb-2 text-neutral-dark">Need a Custom Plan?</h4>
                                <p className="text-gray-500 text-sm max-w-md">We can customize this experience for large groups, special events, or specific requirements.</p>
                            </div>
                            <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors whitespace-nowrap">
                                Contact Support
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Booking */}
                    <div className="lg:col-span-1">
                        <BookingForm
                            serviceName={title}
                            serviceType={type}
                            basePrice={price}
                            variants={subItems.map(item => ({
                                id: item.id,
                                name: item.type,
                                location: item.location,
                                price: item.price,
                                duration: item.duration
                            }))}
                        />



                    </div>

                </div>
            </div>
        </div>
    );
};
