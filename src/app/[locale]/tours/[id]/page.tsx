'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getSiteData } from '@/data/siteData';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

interface PageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default function TourDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const item = getSiteData(locale).tours.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    // formatting price
    let price: number | string = 0;
    if (item.pricing && item.pricing[0]) {
        const p = item.pricing[0] as any;
        price = p.totalPrice || p.pricePerPerson || 0;
    }

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="tour"
            title={item.name}
            description={item.desc}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={price}
            duration={item.duration}
            location="Marrakech Region"
            included={item.included}
            excluded={item.excluded}
            subItems={[]}
            gallery={item.gallery || []}
            pricing={item.pricing || []}
            maxPeople={item.maxPeople}
        />
    );
}
