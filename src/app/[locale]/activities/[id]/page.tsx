'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getSiteData } from '@/data/siteData';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

interface PageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default function ActivityDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);
    const t = useTranslations('ListingPage');

    // Logic to find activity or GROUP of activities
    const experiences = getSiteData(locale).activities.experiences;

    // 1. Check if ID matches a Type (e.g., "quad")
    const groupedItems = experiences.filter(item => item.type === id);
    const isGroup = groupedItems.length > 0;

    // 2. Check if ID matches a Specific Item
    const specificItem = experiences.find(item => item.id === id);

    if (!isGroup && !specificItem) {
        return notFound();
    }

    const item = isGroup ? groupedItems[0] : specificItem;

    const displayTitle = (isGroup
        ? t('activityGroupTitle', { type: item?.type ?? '' })
        : `${item?.type} — ${item?.location}`).toUpperCase();

    const description = isGroup
        ? t('activityGroupDesc', { type: item?.type ?? '' })
        : (item?.desc || '');

    const subItems = isGroup ? groupedItems.map(g => ({
        id: g.id,
        type: g.type,
        location: g.location,
        price: g.price,
        duration: '2_hours'
    })) : [];

    const price = isGroup
        ? Math.min(...groupedItems.map(i => i.price))
        : (item?.price || 0);

    // Gather gallery images from grouped items or specific item
    const galleryImages = isGroup
        ? groupedItems.flatMap(g => g.gallery || []).concat(groupedItems.map(g => g.image).filter(Boolean))
        : (item?.gallery || []);

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="activity"
            title={displayTitle}
            description={description}
            image={item?.image || "/images/hero-marrakech.jpg"}
            price={price}
            duration="2_hours"
            location={isGroup ? 'Various Locations' : item?.location}
            subItems={subItems}
            included={item?.included}
            excluded={item?.excluded}
            gallery={galleryImages}
        />
    );
}
