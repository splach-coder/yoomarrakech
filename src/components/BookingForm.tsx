'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { Calendar, Users, MessageCircle, MapPin, Clock, Receipt, Check, ChevronDown } from 'lucide-react';

interface BookingFormProps {
    serviceName: string;
    serviceType: 'tour' | 'activity' | 'package' | 'transport';
    basePrice?: number | string;
    variants?: Array<{
        id: string;
        name: string;
        location?: string;
        price: number;
        duration?: string;
    }>;
    pricingRules?: Array<{
        minPeople?: number;
        maxPeople?: number;
        totalPrice?: number;
        pricePerPerson?: number;
    }>;
    maxGuests?: number;
    onSubmit?: (data: any) => void;
}

export const BookingForm = ({
    serviceName,
    serviceType,
    basePrice = 0,
    variants = [],
    pricingRules = [],
    maxGuests = 20
}: BookingFormProps) => {
    const [formData, setFormData] = useState({
        date: '',
        guests: 2,
        selectedVariant: variants.length > 0 ? variants[0].id : null,
    });

    const [showPriceBreakdown, setShowPriceBreakdown] = useState(true);

    const [pricing, setPricing] = useState({
        basePrice: 0,
        guestsTotal: 0,
        total: 0
    });

    // Calculate pricing whenever form data changes
    // Calculate pricing whenever form data changes
    useEffect(() => {
        let price = 0;
        let guestsTotal = 0;

        // Logic for variants
        if (variants.length > 0 && formData.selectedVariant) {
            const variant = variants.find(v => v.id === formData.selectedVariant);
            price = variant?.price || 0;
            guestsTotal = price * formData.guests;
        }
        // Logic for complex pricing logic from siteData (e.g. tours)
        else if (pricingRules && pricingRules.length > 0) {
            // Find applicable rule for current guest count
            const rule = pricingRules.find(r =>
                formData.guests >= (r.minPeople || 0) &&
                formData.guests <= (r.maxPeople || Infinity)
            );

            if (rule) {
                if (rule.totalPrice) {
                    // Fixed price for the group size range
                    guestsTotal = rule.totalPrice;
                    price = Math.round(rule.totalPrice / formData.guests); // Average per person for display
                } else if (rule.pricePerPerson) {
                    // Per person price for the group size range
                    price = rule.pricePerPerson;
                    guestsTotal = price * formData.guests;
                }
            } else {
                // Fallback if no rule matches (e.g. exceeding max people defined in rules)
                const lastRule = pricingRules[pricingRules.length - 1];
                if (lastRule.totalPrice) {
                    guestsTotal = lastRule.totalPrice;
                    price = Math.round(lastRule.totalPrice / formData.guests);
                } else if (lastRule.pricePerPerson) {
                    price = lastRule.pricePerPerson;
                    guestsTotal = price * formData.guests;
                } else {
                    price = typeof basePrice === 'number' ? basePrice : parseInt(basePrice as string) || 0;
                    guestsTotal = price * formData.guests;
                }
            }
        }
        // Default simple pricing
        else {
            price = typeof basePrice === 'number' ? basePrice : parseInt(basePrice as string) || 0;
            guestsTotal = price * formData.guests;
        }

        setPricing({
            basePrice: price,
            guestsTotal: guestsTotal,
            total: guestsTotal
        });
    }, [formData.guests, formData.selectedVariant, basePrice, variants, pricingRules]);

    const handleGuestsChange = (increment: number) => {
        setFormData(prev => ({
            ...prev,
            guests: Math.max(1, Math.min(maxGuests, prev.guests + increment))
        }));
    };

    const handleVariantChange = (variantId: string) => {
        setFormData(prev => ({ ...prev, selectedVariant: variantId }));
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const selectedVariant = variants.find(v => v.id === formData.selectedVariant);
        const variantInfo = selectedVariant
            ? `\n🎯 Option: ${selectedVariant.name} (${selectedVariant.location})`
            : '';

        const text = `Hello! I would like to book "${serviceName}".
        
📋 Booking Details:
📅 Date: ${formData.date}
👥 Guests: ${formData.guests}${variantInfo}

💰 Total Price: ${pricing.total}€

Please confirm availability. Thank you!`;

        const encodedText = encodeURIComponent(text);
        const phoneNumber = siteConfig.contact.whatsapp.replace('+', '');
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    const selectedVariant = variants.find(v => v.id === formData.selectedVariant);
    const isTransport = serviceType === 'transport';

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 sticky top-24 overflow-hidden">
            {/* Header with Price */}
            <div className="bg-primary p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <Receipt className="w-5 h-5" />
                        <h3 className="text-lg font-bold">Book Now</h3>
                    </div>
                    {!isTransport && (
                        <button
                            type="button"
                            onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <ChevronDown className={`w-5 h-5 transition-transform ${showPriceBreakdown ? 'rotate-180' : ''}`} />
                        </button>
                    )}
                </div>
                <div className="flex items-baseline gap-2">
                    {isTransport ? (
                        <div>
                            <span className="text-2xl font-bold block">Contact for Price</span>
                            <span className="text-white/70 text-sm">Custom quote based on your needs</span>
                        </div>
                    ) : (
                        <>
                            <span className="text-4xl font-bold">{pricing.total}€</span>
                            <span className="text-white/70 text-sm">total</span>
                        </>
                    )}
                </div>
            </div>

            {/* Price Breakdown - Collapsible (Hidden for Transport) */}
            {!isTransport && showPriceBreakdown && (
                <div className="px-6 py-4 bg-primary/5 border-b border-neutral-100">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span>Price per person</span>
                            <span className="font-semibold">{pricing.basePrice}€</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Number of travelers</span>
                            <span className="font-semibold">× {formData.guests}</span>
                        </div>
                        <div className="pt-2 border-t border-neutral-200 flex justify-between font-bold text-neutral-dark">
                            <span>Subtotal</span>
                            <span className="text-primary">{pricing.guestsTotal}€</span>
                        </div>
                    </div>
                    {selectedVariant?.location && (
                        <div className="mt-3 pt-3 border-t border-neutral-200 flex items-center gap-2 text-gray-500 text-xs">
                            <MapPin className="w-3 h-3" />
                            <span>{selectedVariant.location}</span>
                        </div>
                    )}
                </div>
            )}

            {/* Booking Form */}
            <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-5">
                {/* Variant Selection (for activities with options) */}
                {variants.length > 0 && (
                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase text-neutral-dark tracking-wide flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" /> Choose Experience
                        </label>
                        <div className="space-y-2">
                            {variants.map((variant) => (
                                <div
                                    key={variant.id}
                                    onClick={() => handleVariantChange(variant.id)}
                                    className={`relative p-3 rounded-lg border-2 cursor-pointer transition-all ${formData.selectedVariant === variant.id
                                        ? 'border-primary bg-primary/5 shadow-sm'
                                        : 'border-neutral-200 hover:border-primary/30 hover:bg-neutral-50'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-neutral-dark capitalize">{variant.name}</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">{variant.location}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <p className="text-lg font-bold text-primary">{variant.price}€</p>
                                            </div>
                                            {formData.selectedVariant === variant.id && (
                                                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Date Picker */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-neutral-dark tracking-wide flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" /> Travel Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-neutral-dark text-sm"
                    />
                </div>

                {/* Guests Counter */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-neutral-dark tracking-wide flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" /> Travelers
                    </label>
                    <div className="flex items-center justify-between bg-neutral-50 border border-neutral-200 rounded-lg p-2">
                        <button
                            type="button"
                            onClick={() => handleGuestsChange(-1)}
                            className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-neutral-dark hover:bg-neutral-200 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={formData.guests <= 1}
                        >
                            −
                        </button>
                        <div className="text-center">
                            <span className="font-bold text-xl text-neutral-dark block">{formData.guests}</span>
                            <span className="text-xs text-gray-500">{formData.guests === 1 ? 'person' : 'people'}</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleGuestsChange(1)}
                            className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary/10 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={formData.guests >= maxGuests}
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-200 my-6"></div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Confirm via WhatsApp</span>
                </button>

                <p className="text-xs text-center text-gray-400">
                    💳 No payment now • Pay on arrival
                </p>
            </form>
        </div>
    );
};
