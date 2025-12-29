import { ServicesListing } from '@/components/ServicesListing';

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return <ServicesListing locale={locale} />;
}
