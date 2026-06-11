'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Calendar, Users, Search, Minus, Plus } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { useBooking, MIN_TRAVELERS, MAX_TRAVELERS } from '@/context/BookingContext';

export const HeroSearchBar = () => {
    const t = useTranslations('HomePage.search');
    const tCommon = useTranslations('Common');
    const locale = useLocale();
    const router = useRouter();
    const { date, travelers, setDate, setTravelers } = useBooking();

    const dateInputRef = useRef<HTMLInputElement>(null);
    const travelersRef = useRef<HTMLDivElement>(null);
    const [showTravelers, setShowTravelers] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    // Close travelers popover on outside click
    useEffect(() => {
        if (!showTravelers) return;
        const handleClick = (e: MouseEvent) => {
            if (travelersRef.current && !travelersRef.current.contains(e.target as Node)) {
                setShowTravelers(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [showTravelers]);

    const openDatePicker = () => {
        const input = dateInputRef.current;
        if (!input) return;
        try {
            input.showPicker();
        } catch {
            input.focus();
        }
    };

    const formattedDate = date
        ? new Date(`${date}T00:00:00`).toLocaleDateString(locale, {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
          })
        : '';

    const handleSearch = () => {
        router.push('/services');
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-black/45 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-full p-2 gap-1 shadow-2xl">
                {/* Date */}
                <button
                    type="button"
                    onClick={openDatePicker}
                    aria-label={t('pickDate')}
                    className="relative flex-1 flex items-center gap-3 px-5 py-3 rounded-xl sm:rounded-full hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60 outline-none transition-colors text-left cursor-pointer"
                >
                    <Calendar className="w-5 h-5 text-white/80 shrink-0" />
                    <span className={`text-sm font-medium truncate ${date ? 'text-white' : 'text-white/80'}`}>
                        {formattedDate || t('pickDate')}
                    </span>
                    <input
                        ref={dateInputRef}
                        type="date"
                        aria-label={t('pickDate')}
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        tabIndex={-1}
                    />
                </button>

                <div className="hidden sm:block h-8 w-px bg-white/15 shrink-0" />
                <div className="sm:hidden h-px w-full bg-white/15" />

                {/* Travelers */}
                <div ref={travelersRef} className="relative flex-1">
                    <button
                        type="button"
                        onClick={() => setShowTravelers(prev => !prev)}
                        aria-expanded={showTravelers}
                        aria-haspopup="dialog"
                        aria-label={t('travelersLabel')}
                        className="w-full flex items-center gap-3 px-5 py-3 rounded-xl sm:rounded-full hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60 outline-none transition-colors text-left cursor-pointer"
                    >
                        <Users className="w-5 h-5 text-white/80 shrink-0" />
                        <span className="text-sm font-medium text-white truncate">
                            {t('travelers', { count: travelers })}
                        </span>
                    </button>

                    {showTravelers && (
                        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-30 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 w-56 max-w-[calc(100vw-2rem)]">
                            <p className="text-xs font-bold uppercase tracking-wide text-neutral-dark mb-3">
                                {t('travelersLabel')}
                            </p>
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={() => setTravelers(travelers - 1)}
                                    disabled={travelers <= MIN_TRAVELERS}
                                    aria-label={`${tCommon('decrease')} — ${t('travelersLabel')}`}
                                    className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-dark hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 outline-none transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="font-bold text-lg text-neutral-dark" aria-live="polite">{travelers}</span>
                                <button
                                    type="button"
                                    onClick={() => setTravelers(travelers + 1)}
                                    disabled={travelers >= MAX_TRAVELERS}
                                    aria-label={`${tCommon('increase')} — ${t('travelersLabel')}`}
                                    className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-dark hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 outline-none transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowTravelers(false)}
                                className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                            >
                                {t('done')}
                            </button>
                        </div>
                    )}
                </div>

                {/* Search */}
                <button
                    type="button"
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-2 bg-white text-neutral-dark font-semibold text-sm px-7 py-3 rounded-xl sm:rounded-full hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/60 outline-none transition-colors shrink-0 cursor-pointer"
                >
                    <Search className="w-4 h-4" />
                    <span>{t('search')}</span>
                </button>
            </div>
        </div>
    );
};
