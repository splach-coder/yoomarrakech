'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

// Separate GIcon component
const GIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

interface ReviewsSliderProps {
    reviews: Review[];
}

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ reviews }) => {
    return (
        <section className="py-8 overflow-hidden bg-neutral-50/50">
            <div className="container mx-auto px-4">
                {/* Header with Google Logo Theme */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <GIcon className="w-8 h-8" />
                        <span className="text-2xl font-medium text-gray-600">Reviews</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-neutral-dark mb-6">
                        Traveler Stories
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold text-neutral-dark">5.0</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                                ))}
                            </div>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">Based on 150+ reviews</span>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: '!bg-neutral-dark !opacity-100',
                        bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-50'
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1.5, centeredSlides: true },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full !pb-16 px-4"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="h-full py-4">
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                                {/* Header: Author Info */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-neutral-dark">{review.author}</p>
                                            <p className="text-xs text-gray-400">{review.date}</p>
                                        </div>
                                    </div>
                                    <GIcon className="w-6 h-6 opacity-80" />
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <div className="flex-grow">
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                        "{review.comment}"
                                    </p>
                                </div>

                                {/* Read More Link (Decoration) */}
                                <div className="mt-4 pt-4 border-t border-gray-50">
                                    <span className="text-xs font-medium text-gray-400">Posted on Google</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
