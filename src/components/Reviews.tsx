'use client';

import React from 'react';
import { Card } from './ui/Card';

interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

interface ReviewsProps {
    reviews: Review[];
    title?: string;
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews, title = "What our guests say" }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-neutral-dark">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.slice(0, 3).map((review) => (
                        <Card key={review.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-neutral-dark">{review.author}</h4>
                                    <div className="flex text-yellow-400 text-xs">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                                        ))}
                                    </div>
                                </div>
                                <span className="ml-auto text-xs text-gray-400">{review.date}</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                "{review.comment}"
                            </p>
                            <div className="mt-4 flex items-center text-xs text-gray-400">
                                <img src="/google-logo.png" alt="Google" className="w-4 h-4 mr-1 opacity-50 grayscale" onError={(e) => e.currentTarget.style.display = 'none'} />
                                <span>Posted on Google</span>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <a href="#" className="text-primary font-medium hover:underline">View all reviews on Google Maps &rarr;</a>
                </div>
            </div>
        </section>
    );
};
