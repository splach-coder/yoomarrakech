'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Plus, X } from 'lucide-react';

const faqs = [
    {
        question: "Do you offer customizable travel itineraries?",
        answer: "Yes! We specialize in creating personalized itineraries tailored to your preferences. Whether you're interested in cultural landmarks, outdoor adventures, or unique experiences, our team will help craft the perfect journey."
    },
    {
        question: "What is the best time to visit Morocco?",
        answer: "The best time to visit is generally during spring (Mid-March to May) or autumn (September to November) when the weather is warm and pleasant."
    },
    {
        question: "Are your tours guided?",
        answer: "Yes, all our tours include expert local guides who provide deep insights into the history, culture, and hidden gems of each destination."
    },
    {
        question: "Do you provide assistance with visas?",
        answer: "While we can provide guidance and supporting documents for your visa application, we recommend checking with your local Moroccan embassy for the most up-to-date requirements."
    },
    {
        question: "What is included in the trip cost?",
        answer: "Our packages typically include accommodation, private transport, expert guides, and select meals. Specific inclusions are detailed in each itinerary."
    }
];

export const FaqSection = ({ locale }: { locale: string }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-8 container mx-auto">
            {/* Top Divider with Title */}
            <div className="flex items-center justify-end mb-16">
                <div className="h-[1px] bg-gray-200 w-full max-w-4xl mr-8"></div>
                <span className="font-poppins font-semibold text-primary text-lg italic whitespace-nowrap">FAQs</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column - Content & FAQs */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-medium leading-tight font-poppins mb-6">
                        Explore our FAQ section for <span className="text-primary/80">answers on trip planning.</span>
                    </h2>
                    <p className="text-gray-500 mb-12">
                        We're here to help! Browse our FAQ section to get all the information you need to plan your perfect trip
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-white shadow-sm' : 'border-gray-100 bg-white hover:border-primary/50'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-poppins font-semibold text-lg text-neutral-dark pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="flex-shrink-0">
                                        {openIndex === index ? (
                                            <X className="w-5 h-5 text-primary" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-primary" />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Image Card */}
                <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden hidden lg:block">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }} // Using placeholder for now
                    ></div>

                    {/* Floating Contact Card */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white rounded-3xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold font-poppins text-neutral-dark mb-3 text-center">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
                            Need more help planning your perfect Morocco journey? Our team is here to assist you with any questions or special requests
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href={`/${locale}/contact`}
                                className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
