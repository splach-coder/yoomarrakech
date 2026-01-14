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
        lang={locale}
      />

      {/* 2.5 Popular Destinations */}
      <PopularDestinations locale={locale} dict={t.HomePage.PopularDestinations} />

      {/* 2.7 Why Travel With Us */}
      <WhyTravelWithUs dict={t.HomePage.WhyTravel} />

      {/* 3. About Preview */}
      <AboutPreview locale={locale} dict={t.HomePage.AboutPreview} />

      {/* 3.5 Gallery Section */}
      <GallerySection locale={locale} dict={t.HomePage.Gallery} />

      {/* 3.7 FAQ Section */}
      <FaqSection locale={locale} dict={t.HomePage.FAQ} />

      {/* 4. Swiper Reviews Section */}
      <ReviewsSlider reviews={siteData.reviews.items} />

      <CTASection locale={locale} dict={t.HomePage.CTA} />
    </main>
  );
}