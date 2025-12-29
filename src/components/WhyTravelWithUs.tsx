'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhyTravelWithUs = () => {
    return (
        <section className="py-8 container mx-auto">
            {/* Top Divider with Title */}
            <div className="flex items-center justify-end mb-16">
                <div className="h-[1px] bg-gray-200 w-full max-w-4xl mr-8"></div>
                <span className="font-poppins font-semibold text-primary text-lg italic whitespace-nowrap">Why travel with us</span>
            </div>

            {/* Main Headline */}
            <div className="max-w-5xl mb-24">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight font-poppins">
                    <span className="text-neutral-dark">Choosing the right travel partner </span>
                    <span className="text-primary/80">can make all the difference in your journey.</span>
                </h2>
            </div>

            {/* Cards Grid with connecting lines */}
            <div className="relative">
                {/* Dashed connecting lines */}
                <div className="absolute inset-0 hidden md:block pointer-events-none overflow-visible" aria-hidden="true" style={{ top: '-50px', bottom: '-50px' }}>
                    <svg className="w-full h-full" style={{ minHeight: '900px' }} viewBox="0 0 1200 900" fill="none" preserveAspectRatio="xMidYMid meet">
                        {/* Vertical line from top down to Card 01 */}
                        <path
                            d="M 200 0 L 200 150"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        {/* Horizontal line from Card 01 to Card 02 */}
                        <path
                            d="M 200 150 L 800 150"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        {/* Vertical line down from Card 02 */}
                        <path
                            d="M 800 150 L 800 300"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        {/* Horizontal line from right to left */}
                        <path
                            d="M 800 300 L 200 300"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        {/* Vertical line down to Card 03 */}
                        <path
                            d="M 200 300 L 200 500"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        {/* Horizontal line from Card 03 to Card 04 */}
                        <path
                            d="M 200 500 L 800 500"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        {/* Vertical line down from Card 04 */}
                        <path
                            d="M 800 500 L 800 650"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-32 md:gap-x-12 relative z-10">

                    {/* Card 01 - White */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-[200px] flex flex-col justify-between md:-mt-12"
                    >
                        <span className="text-4xl font-medium text-primary/40 font-poppins">01</span>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-dark mb-3 font-poppins">Authenticity</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                We're passionate about introducing you to the heart of Moroccan culture, going beyond the tourist traps.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 02 - Image (Expert Knowledge) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative rounded-2xl p-6 shadow-lg overflow-hidden h-[200px] flex flex-col justify-between group text-white md:mt-6"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(/images/hero-marrakech.jpg)' }}
                        ></div>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>

                        <span className="relative z-10 text-4xl font-medium text-white/50 font-poppins">02</span>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 text-white font-poppins">Expert Knowledge</h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                                Our guides and planners are deeply familiar with Morocco, ensuring an enriching and seamless journey.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 03 - White */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-[200px] flex flex-col justify-between md:-mt-6"
                    >
                        <span className="text-4xl font-medium text-primary/40 font-poppins">03</span>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-dark mb-3 font-poppins">Personalized Service</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Each traveler is unique, and we work tirelessly to customize trips to fit your specific preferences and style.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 04 - White */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-[200px] flex flex-col justify-between md:mt-12"
                    >
                        <span className="text-4xl font-medium text-primary/40 font-poppins">04</span>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-dark mb-3 font-poppins">Sustainable Tourism</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                We support responsible travel that respects local communities and preserves Morocco's natural beauty.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
