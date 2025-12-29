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

export default function ActivityDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    // Logic to find activity or GROUP of activities
    const experiences = siteData.activities.experiences;

    // 1. Check if ID matches a Type (e.g., "quad")
    const groupedItems = experiences.filter(item => item.type === id);
    const isGroup = groupedItems.length > 0;

    // 2. Check if ID matches a Specific Item
    const specificItem = experiences.find(item => item.id === id);

    if (!isGroup && !specificItem) {
        return notFound();
    }

    const item = isGroup ? groupedItems[0] : specificItem;

    // Prepare data
    const title = isGroup
        ? `${item?.type} Adventures`
        : (item?.type || 'Activity'); // Specific items might need a name map if name is missing

    // If specific item lacks name, we construct it. siteData activities don't have 'name' field in experiences array shown previously, just type/location/price.
    // We should probably Map type to a nice name.

    const displayTitle = (isGroup ? title : `${item?.type} in ${item?.location}`).toUpperCase();

    const description = isGroup
        ? `Make the most of your time in Marrakech with our premium ${item?.type} experiences. Whether you prefer the morning breeze or the golden sunset light, we have the perfect adventure for you. Ride through the palm groves or the Agafay desert with professional guides.`
        : `Enjoy a thrilling ${item?.type} experience in ${item?.location}. This activity offers a unique way to explore the landscape.`;

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

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="activity"
            title={displayTitle}
            description={description}
            image="/images/hero-marrakech.jpg" // Default or grouped image
            price={price}
            duration="2_hours"
            location={isGroup ? 'Various Locations' : item?.location}
            subItems={subItems}
            included={['Professional Guide', 'Safety Equipment', 'Tea Break']}
            excluded={['Tips', 'Personal Expenses']}
        />
    );
}
