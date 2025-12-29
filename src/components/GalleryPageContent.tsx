'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import { siteData } from '@/data/siteData';

// Dynamically generate gallery items from sitData tours
const allTourImages = siteData.tours.reduce((acc: any[], tour) => {
    // Add main image
    acc.push({
        id: `${tour.id}-main`,
        src: tour.image,
        category: 'Tour',
        title: tour.name,
        size: acc.length % 3 === 0 ? 'large' : acc.length % 3 === 1 ? 'medium' : 'small'
    });

    // Add gallery images if they exist
    if (tour.gallery && tour.gallery.length > 0) {
        tour.gallery.forEach((img, idx) => {
            acc.push({
                id: `${tour.id}-gal-${idx}`,
                src: img,
                category: 'Experience',
                title: `${tour.name} View`,
                size: (acc.length + idx) % 3 === 0 ? 'medium' : (acc.length + idx) % 3 === 1 ? 'small' : 'large'
            });
        });
    }
    return acc;
}, []);

// Limit to a reasonable number if needed, or just use all
const galleryImages = allTourImages.slice(0, 24);

export const GalleryPageContent = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-neutral-dark">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
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
                            Visual Journey
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
                            Captured <span className="text-primary-light">Moments</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Explore the vibrant colors, breathtaking landscapes, and authentic daily life of Morocco through our lens.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section Padding Adjust */}
            <div className="py-20">

                {/* Masonry-style Grid */}
                <div className="container mx-auto px-4">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="break-inside-avoid"
                            >
                                <div
                                    className="relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className={`relative w-full ${img.size === 'large' ? 'h-[500px]' :
                                        img.size === 'medium' ? 'h-[350px]' : 'h-[250px]'
                                        }`}>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${img.src})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                                                <ZoomIn className="w-8 h-8" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="text-white font-poppins font-bold text-xl">{img.title}</h3>
                                            <p className="text-white/80 text-sm capitalize">{img.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </motion.button>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden aspect-[16/9]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${selectedImage.src})` }}
                                ></div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-center">
                                    <h2 className="text-3xl font-bold font-poppins text-white mb-2">{selectedImage.title}</h2>
                                    <p className="text-white/80 text-lg capitalize">{selectedImage.category}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
