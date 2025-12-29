'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '@/data/siteData';
import { ArrowUpRight, Clock, Star, Map, Compass, Palmtree, Car } from 'lucide-react';
import Link from 'next/link';

interface ServicesListingProps {
    locale: string;
}

const categories = [
    {
        id: 'tours',
        label: 'Cultural Tours',
        icon: Map,
        route: 'tours',
        data: () => siteData.tours
    },
    {
        id: 'activities',
        label: 'Adventures',
        icon: Compass,
        route: 'activities',
        data: () => {
            const experiences = siteData.activities.experiences || [];
            const grouped = experiences.reduce((acc: any, curr: any) => {
                const type = curr.type;
                if (!acc[type]) {
                    acc[type] = {
                        ...curr,
                        id: curr.type,
                        name: `${curr.type} Adventures`,
                        desc: `Experience our exclusive ${curr.type} activities.`,
                    };
                }
                if (curr.price < acc[type].price) {
                    acc[type].price = curr.price;
                }
                return acc;
            }, {});
            return Object.values(grouped);
        }
    },
    {
        id: 'packages',
        label: 'Curated Packs',
        icon: Palmtree,
        route: 'packages',
        data: () => siteData.packages
    },
    {
        id: 'transport',
        label: 'Transport',
        icon: Car,
        route: 'transport',
        data: () => siteData.transport
    },
];

export const ServicesListing = ({ locale }: ServicesListingProps) => {
    const renderPrice = (item: any, categoryId: string) => {
        if (categoryId === 'tours' && item.pricing && item.pricing[0]) {
            const p = item.pricing[0] as any;
            return p.totalPrice ? `${p.totalPrice}€` : `${p.pricePerPerson}€/p`;
        }
        if (categoryId === 'packages' || categoryId === 'activities') {
            return item.price ? `${item.price}€` : 'On Request';
        }
        return 'On Request';
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark">
            {/* Hero Section */}
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
                            Discover Morocco
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
                            Our <span className="text-primary-light">Services</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            From cultural tours to desert adventures, we offer unforgettable experiences across Morocco
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Sections */}
            <div className="container mx-auto px-4 py-16">
                {categories.map((category, catIdx) => {
                    const items = category.data();
                    if (!items || items.length === 0) return null;

                    return (
                        <div key={category.id} className="mb-20">
                            {/* Category Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <category.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold font-poppins text-neutral-dark">
                                            {category.label}
                                        </h2>
                                        <p className="text-gray-500 text-sm">
                                            {items.length} {items.length === 1 ? 'option' : 'options'} available
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href={`/${locale}/${category.route}`}
                                    className="text-primary font-medium hover:underline flex items-center gap-2"
                                >
                                    View All <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {items.slice(0, 4).map((item: any, idx: number) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[280px] border border-neutral-100 cursor-pointer hover:-translate-y-1">
                                            {/* Image Section */}
                                            <div className="md:w-2/5 relative h-48 md:h-full overflow-hidden">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                    style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                                                ></div>
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-dark shadow-sm">
                                                    {category.label}
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="md:w-3/5 p-6 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                                            <Clock className="w-3 h-3 text-primary" />
                                                            <span>
                                                                {category.id === 'tours' && item.duration ? item.duration.replace('_', ' ') :
                                                                    category.id === 'activities' ? '2 hours' :
                                                                        category.id === 'packages' ? '4 hours' : 'Flexible'}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-1 rounded-md">
                                                            <Star className="w-3 h-3 fill-current" />
                                                            <span>4.9</span>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-xl font-bold font-poppins text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors uppercase">
                                                        {item.name || item.type}
                                                    </h3>

                                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                        {item.desc || `Experience the best of Morocco with our ${item.name || item.type}.`}
                                                    </p>
                                                </div>

                                                <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs text-gray-400 font-medium mb-0.5">
                                                            {category.id === 'transport' ? 'Price' : 'Starting from'}
                                                        </p>
                                                        <p className="text-xl font-bold text-primary">{renderPrice(item, category.id)}</p>
                                                    </div>

                                                    <Link
                                                        href={`/${locale}/${category.route}/${item.id}`}
                                                        className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-dark font-medium text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2"
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
                    );
                })}
            </div>
        </div>
    );
};
