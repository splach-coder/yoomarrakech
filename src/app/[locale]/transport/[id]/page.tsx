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

export default function TransportDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const item = getSiteData(locale).transport.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    const description = item.description;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="transport"
            title={item.name}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={item.price || 0}
            duration="Flexible"
            location="Marrakech"
            included={item.included}
            excluded={item.excluded}
            subItems={[]}
            gallery={[]}
        />
    );
}
