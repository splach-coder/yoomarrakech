'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { siteData } from '@/data/siteData';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

interface PageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default function TourDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const item = siteData.tours.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    // formatting price
    let price: number | string = 0;
    if (item.pricing && item.pricing[0]) {
        const p = item.pricing[0] as any;
        price = p.totalPrice || p.pricePerPerson || 0;
    }

    // Static descriptions if not in DB (siteData seems sparse)
    const description = `Experience the magic of ${item.name}. This curated tour takes you through the most iconic locations, offering a blend of history, culture, and breathtaking scenery. Our professional guides ensure you don't miss any hidden gems.`;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="tour"
            title={item.name}
            description={description}
            image="/images/hero-marrakech.jpg"
            price={price}
            duration={item.duration}
            location="Marrakech Region"
            included={['Hotel Pickup', 'Transport A/C', 'Local Guide']}
            excluded={['Lunch', 'Entrance Fees', 'Tips']}
            subItems={[]}
        />
    );
}
