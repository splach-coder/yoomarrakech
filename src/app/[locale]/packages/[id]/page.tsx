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

export default function PackageDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const item = getSiteData(locale).packages.find(p => p.id === id);

    if (!item) {
        return notFound();
    }

    const description = item.desc;

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
