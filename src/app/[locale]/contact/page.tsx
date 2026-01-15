'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Elegant Hero Section */}
            <section className="relative h-[45vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                ></div>
                <div className="absolute inset-0 bg-neutral-900/40"></div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-light font-poppins text-white mb-6 tracking-tight">
                            {t('heroTitlePart1')} <span className="font-bold border-b-2 border-primary/50">{t('heroTitlePart2')}</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
                            {t('heroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Integrated Contact Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-7xl mx-auto bg-white border border-neutral-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden rounded-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5">

                        {/* Left Side: Professional Info */}
                        <div className="lg:col-span-2 bg-neutral-50 p-12 md:p-16 flex flex-col justify-between">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-8 block">{t('reachOut')}</span>
                                <h2 className="text-3xl font-bold font-poppins text-neutral-dark mb-12">
                                    {t('ctaStart')} <br />
                                    <span className="text-primary">{t('ctaNewAdventure')}</span>
                                </h2>

                                <div className="space-y-10">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('callWhatsapp')}</p>
                                            <a href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}`} className="text-lg text-neutral-dark hover:text-primary transition-colors font-medium">
                                                {siteInfo.contact.whatsapp}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('emailUs')}</p>
                                            <a href={`mailto:${siteInfo.contact.email}`} className="text-lg text-neutral-dark hover:text-primary transition-colors font-medium">
                                                {siteInfo.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('location')}</p>
                                            <p className="text-neutral-dark font-medium leading-relaxed">
                                                {siteInfo.contact.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 sm:mt-0 pt-12 border-t border-neutral-200 flex items-center gap-6">
                                <a href={siteInfo.socials.instagram} target="_blank" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                                <span className="h-[1px] flex-grow bg-neutral-200"></span>
                            </div>
                        </div>

                        {/* Right Side: Sleek Inquiries Form */}
                        <div className="lg:col-span-3 p-12 md:p-16">
                            <div className="mb-10 text-center lg:text-left">
                                <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-2">{t('sendInquiry')}</h3>
                                <p className="text-gray-400 text-sm">{t('fillForm')}</p>
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            required
                                            placeholder={t('fullName')}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border-b border-neutral-200 bg-transparent py-4 text-neutral-dark outline-none focus:border-primary transition-all font-light"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="email"
                                            required
                                            placeholder={t('emailAddr')}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border-b border-neutral-200 bg-transparent py-4 text-neutral-dark outline-none focus:border-primary transition-all font-light"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <textarea
                                        rows={5}
                                        required
                                        placeholder={t('tripPlans')}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full border-b border-neutral-200 bg-transparent py-4 text-neutral-dark outline-none focus:border-primary transition-all font-light resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-8 flex justify-center lg:justify-start">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-4 bg-primary text-white px-12 py-4 rounded-full font-bold hover:bg-neutral-dark transition-all duration-300 group shadow-lg shadow-primary/20"
                                    >
                                        <MessageCircle className="w-5 h-5 fill-current" />
                                        {t('chatWhatsapp')}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
