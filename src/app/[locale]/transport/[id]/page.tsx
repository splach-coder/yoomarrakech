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

export default function TransportDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const item = siteData.transport.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    const description = `Enjoy a comfortable and safe journey with our ${item.name}. Our professional drivers ensure punctuality and comfort for all your travel needs in and around Marrakech.`;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="transport"
            title={item.name}
            description={description}
            image="/images/hero-marrakech.jpg"
            price={item.price || 0}
            duration="Flexible"
            location="Marrakech"
            included={['Professional Driver', 'A/C Vehicle', 'Fuel', 'Insurance']}
            excluded={['Tips', 'Extra Stops']}
            subItems={[]}
        />
    );
}
