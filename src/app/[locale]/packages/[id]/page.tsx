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

export default function PackageDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const item = siteData.packages.find(p => p.id === id);

    if (!item) {
        return notFound();
    }

    const description = `The ultimate experience: ${item.name}. This package combines our best activities into a seamless adventure. Enjoy ${item.included.join(', ')} all in one go.`;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="package"
            title={item.name}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={item.price}
            duration="4_hours"
            location={item.location}
            included={item.included}
            excluded={[]}
            subItems={[]}
            gallery={item.gallery || []}
        />
    );
}
