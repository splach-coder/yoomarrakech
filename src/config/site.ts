export const siteConfig = {
    name: 'Yoo Marrakech',
    description:
        'Yoo Marrakech - Discover Marrakech with private tours, desert activities, and transport services. Explore the city, Atlas Mountains, Agafay desert, and more.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoomarrakech.com',

    defaultLocale: 'en',
    locales: ['en', 'fr'],

    // SEO / Social
    ogImage: '/images/og-yoo-marrakech-v2.png',
    twitterHandle: '@yoomarrakech',
    creator: 'Yoo Marrakech'
};

export type SiteConfig = typeof siteConfig;

