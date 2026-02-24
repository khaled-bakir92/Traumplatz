import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PromoBanner } from "@/components/promo-banner";
import { PartnersSection } from "@/components/partners-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { TrustBadges } from "@/components/trust-badges";
import { ServicesSection } from "@/components/services-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { ReviewsSection } from "@/components/reviews-section";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <ServiceAreaSection />
        <ReviewsSection />
        <PromoBanner />
        <PartnersSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
