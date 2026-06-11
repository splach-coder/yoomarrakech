'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export const MIN_TRAVELERS = 1;
export const MAX_TRAVELERS = 20;
export const DEFAULT_TRAVELERS = 2;

const STORAGE_KEY = 'yoo-booking';

interface BookingState {
    /** ISO date (yyyy-mm-dd), '' when not chosen yet */
    date: string;
    travelers: number;
}

interface BookingContextValue extends BookingState {
    setDate: (date: string) => void;
    setTravelers: (travelers: number) => void;
}

const clampTravelers = (value: unknown) => {
    const n = typeof value === 'number' && Number.isFinite(value) ? Math.round(value) : DEFAULT_TRAVELERS;
    return Math.max(MIN_TRAVELERS, Math.min(MAX_TRAVELERS, n));
};

const BookingContext = createContext<BookingContextValue | null>(null);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<BookingState>({ date: '', travelers: DEFAULT_TRAVELERS });

    // Hydrate from localStorage after mount so SSR markup stays deterministic
    useEffect(() => {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const saved = JSON.parse(raw) as Partial<BookingState>;
            const today = new Date().toISOString().split('T')[0];
            setState({
                // A date saved on a previous visit may be in the past — drop it
                date: typeof saved.date === 'string' && saved.date >= today ? saved.date : '',
                travelers: clampTravelers(saved.travelers),
            });
        } catch {
            // corrupted storage — keep defaults
        }
    }, []);

    const update = useCallback((patch: Partial<BookingState>) => {
        setState(prev => {
            const next = { ...prev, ...patch };
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            } catch {
                // storage unavailable (private mode / quota) — state still works in-memory
            }
            return next;
        });
    }, []);

    const setDate = useCallback((date: string) => update({ date }), [update]);
    const setTravelers = useCallback(
        (travelers: number) => update({ travelers: clampTravelers(travelers) }),
        [update]
    );

    const value = useMemo(
        () => ({ ...state, setDate, setTravelers }),
        [state, setDate, setTravelers]
    );

    return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBooking = () => {
    const ctx = useContext(BookingContext);
    if (!ctx) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return ctx;
};
