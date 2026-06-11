'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
    X, ArrowUpRight, Clock, Star, MapPin, Users,
    ChevronRight, Sparkles,
} from 'lucide-react';

export interface ServiceModalItem {
    id: string;
    name?: string;
    type?: string;
    image?: string;
    gallery?: string[];
    price?: number;
    pricing?: { maxPeople?: number; minPeople?: number; pricePerPerson?: number; totalPrice?: number }[];
    duration?: string;
    location?: string;
    description?: string;
    included?: string[];
}

interface ServiceModalProps {
    item: ServiceModalItem | null;
    category: string;
    locale: string;
    onClose: () => void;
    label?: string;
}

/* ─── Moroccan geometric decorative SVG ─── */
const MoroccanDiamond = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 2 L58 30 L30 58 L2 30 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 10 L50 30 L30 50 L10 30 Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.6" />
    </svg>
);

const backdrop: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

const panel: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' as const } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: 'easeIn' as const } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// renderPrice is now defined inside the component to access translations

const formatDuration = (dur?: string): string => {
    if (!dur) return 'Flexible';
    return dur.replace(/_/g, ' ');
};

export const ServiceModal: React.FC<ServiceModalProps> = ({
    item,
    category,
    locale,
    onClose,
    label,
}) => {
    const tCommon = useTranslations('Common');
    const perPerson = tCommon('perPerson');

    const renderPrice = (item: ServiceModalItem): string => {
        if (item.price) return `€${item.price}`;
        if (item.pricing?.[0]) {
            const p = item.pricing[0];
            if (p.totalPrice) return `€${p.totalPrice}`;
            if (p.pricePerPerson) return `€${p.pricePerPerson} ${perPerson}`;
        }
        return tCommon('priceFrom');
    };

    /* Close on Escape */
    const handleKey = useCallback(
        (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
        [onClose]
    );
    useEffect(() => {
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = item ? 'hidden' : '';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [item, handleKey]);

    const heroImage = item?.image || '/images/hero-marrakech.jpg';
    const title = item?.name || (item?.type ? `${item.type} Adventure` : '');
    const detailHref = item ? `/${locale}/${category}/${item.id}` : '#';

    return (
        <AnimatePresence>
            {item && (
                <>
                    {/* ── Blurred Backdrop ── */}
                    <motion.div
                        key="backdrop"
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* ── Modal Panel ── */}
                    <motion.div
                        key="panel"
                        variants={panel}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-3xl flex flex-col bg-[#0f0e0c] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ── Hero Image Section ── */}
                        <div className="relative h-[45%] min-h-[260px] flex-shrink-0 overflow-hidden">
                            <Image
                                src={heroImage}
                                alt={title}
                                fill
                                className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                                priority
                            />
                            {/* Dark gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

                            {/* Moroccan decorative corner */}
                            <div className="absolute top-4 left-4 text-[#FDC82F]/30 w-16 h-16">
                                <MoroccanDiamond className="w-full h-full" />
                            </div>
                            <div className="absolute bottom-4 right-4 text-[#FDC82F]/20 w-10 h-10">
                                <MoroccanDiamond className="w-full h-full" />
                            </div>

                            {/* ── Close Button ── */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all group"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* ── Floating Category Badge ── */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="px-4 py-1.5 rounded-full bg-[#FDC82F]/90 backdrop-blur-md text-[#1A1A1A] text-xs font-bold uppercase tracking-widest shadow-lg"
                                >
                                    {label || category}
                                </motion.div>
                            </div>

                            {/* ── Floating Price ── */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                                className="absolute bottom-5 left-6"
                            >
                                <div className="bg-[#FDC82F] text-[#1A1A1A] rounded-2xl px-5 py-3 shadow-xl">
                                    <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70 leading-none mb-1">Starting from</p>
                                    <p className="text-2xl font-black font-poppins leading-none">{renderPrice(item)}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* ── Scrollable Content ── */}
                        <div className="flex-1 overflow-y-auto">
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                animate="visible"
                                className="p-8 space-y-6"
                            >
                                {/* Title */}
                                <motion.div variants={fadeUp}>
                                    <h2 className="text-3xl md:text-4xl font-black font-poppins text-white leading-tight mb-2 uppercase tracking-tight">
                                        {title}
                                    </h2>
                                    {/* Moroccan underline */}
                                    <div className="flex items-center gap-2">
                                        <div className="h-0.5 w-12 bg-[#FDC82F]" />
                                        <MoroccanDiamond className="w-4 h-4 text-[#FDC82F]" />
                                        <div className="h-0.5 w-6 bg-[#FDC82F]/40" />
                                    </div>
                                </motion.div>

                                {/* Meta Tags */}
                                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                                        <Clock className="w-4 h-4 text-[#FDC82F]" />
                                        <span className="text-white/80 text-sm font-medium capitalize">{formatDuration(item.duration)}</span>
                                    </div>
                                    {item.location && (
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                                            <MapPin className="w-4 h-4 text-[#FDC82F]" />
                                            <span className="text-white/80 text-sm font-medium">{item.location}</span>
                                        </div>
                                    )}
                                    {item.pricing?.[0]?.maxPeople && (
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                                            <Users className="w-4 h-4 text-[#FDC82F]" />
                                            <span className="text-white/80 text-sm font-medium">Up to {item.pricing[0].maxPeople} people</span>
                                        </div>
                                    )}
                                </motion.div>

                                {/* Description */}
                                <motion.div variants={fadeUp}>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {item.description ||
                                            `Experience the authentic beauty of Morocco with our expertly curated ${title}. Designed for unforgettable memories in the heart of Marrakech.`}
                                    </p>
                                </motion.div>

                                {/* What's Included */}
                                {item.included && item.included.length > 0 && (
                                    <motion.div variants={fadeUp}>
                                        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">What&apos;s Included</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.included.map((inc) => (
                                                <div key={inc} className="flex items-center gap-2 bg-[#FDC82F]/10 border border-[#FDC82F]/20 rounded-lg px-3 py-1.5">
                                                    <Sparkles className="w-3 h-3 text-[#FDC82F]" />
                                                    <span className="text-[#FDC82F] text-xs font-semibold capitalize">{inc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Gallery Strip */}
                                {item.gallery && item.gallery.length > 0 && (
                                    <motion.div variants={fadeUp}>
                                        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Gallery</p>
                                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                                            {item.gallery.map((img, i) => (
                                                <div key={i} className="relative flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden border border-white/10">
                                                    <Image src={img} alt={`${title} — photo ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Pricing Breakdown */}
                                {item.pricing && item.pricing.length > 1 && (
                                    <motion.div variants={fadeUp}>
                                        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
                                        <div className="space-y-2">
                                            {item.pricing.map((p, i) => (
                                                <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                                                    <div className="flex items-center gap-2 text-white/60 text-sm">
                                                        <Users className="w-3.5 h-3.5" />
                                                        <span>
                                                            {p.minPeople && p.maxPeople
                                                                ? `${p.minPeople}–${p.maxPeople} people`
                                                                : p.maxPeople
                                                                    ? `Up to ${p.maxPeople} people`
                                                                    : `${p.minPeople}+ people`}
                                                        </span>
                                                    </div>
                                                    <span className="text-[#FDC82F] font-bold text-sm">
                                                        {p.totalPrice ? `€${p.totalPrice}` : `€${p.pricePerPerson} ${perPerson}`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>

                        {/* ── Sticky CTA Footer ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex-shrink-0 border-t border-white/10 bg-[#0f0e0c] px-8 py-5 flex items-center gap-4"
                        >
                            {/* Shimmer CTA */}
                            <Link
                                href={detailHref}
                                className="relative flex-1 overflow-hidden group rounded-full bg-[#FDC82F] text-[#1A1A1A] font-black text-sm py-3 flex items-center justify-center gap-2 shadow-lg shadow-[#FDC82F]/20 hover:shadow-[#FDC82F]/40 transition-shadow"
                            >
                                {/* Shimmer sweep */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
                                <span>Book This Experience</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href={detailHref}
                                className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                                title="Full Details"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
