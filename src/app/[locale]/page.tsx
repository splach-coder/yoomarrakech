import { siteData } from '@/data/siteData';
import { AnimatedHero } from '@/components/AnimatedHero';
import { ReviewsSlider } from '@/components/ReviewsSlider';
import { AboutPreview } from '@/components/AboutPreview';
import { PopularDestinations } from '@/components/PopularDestinations';
import { WhyTravelWithUs } from '@/components/WhyTravelWithUs';
import { GallerySection } from '@/components/GallerySection';
import { FaqSection } from '@/components/FaqSection';
import { CTASection } from '@/components/CTASection';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await import(`../../../messages/${locale}.json`);

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Immersive Hero with Parallax */}
      <AnimatedHero
        title={t.HomePage.heroTitle}
        subtitle={t.HomePage.heroSubtitle}
        ctaText={t.HomePage.cta}
        lang={locale}
      />

      {/* 2.5 Popular Destinations */}
      <PopularDestinations locale={locale} />

      {/* 2.7 Why Travel With Us */}
      <WhyTravelWithUs />

      {/* 3. About Preview */}
      <AboutPreview locale={locale} />

      {/* 3.5 Gallery Section */}
      <GallerySection locale={locale} />

      {/* 3.7 FAQ Section */}
      <FaqSection locale={locale} />

      {/* 4. Swiper Reviews Section */}
      <ReviewsSlider reviews={siteData.reviews.items} />

      <CTASection />
    </main>
  );
}