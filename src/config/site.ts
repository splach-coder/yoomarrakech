export const siteConfig = {
    name: 'Yoo Marrakech',
    description:
        'Discover Marrakech with private tours, desert activities, and transport services. Explore the city, Atlas Mountains, Agafay desert, and more.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoomarrakech.com',

    defaultLocale: 'en',
    locales: ['en', 'fr'],

    // SEO / Social
    ogImage: '/images/og-yoo-marrakech.jpg',
    twitterHandle: '@yoomarrakech',
    creator: 'Yoo Marrakech'
};

export type SiteConfig = typeof siteConfig;

