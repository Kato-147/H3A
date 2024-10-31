import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { Major } from "@/components/layout/sections/major";

export const metadata = {
  title: "H3A EDUCATION",
  description: "Tư vấn du học Hàn Quốc",
  openGraph: {
    type: "website",
    url: "https://h3a.onrender.com/",
    title: "H3A Education",
    description: "Tư vấn du học Hàn Quốc",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "H3A Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://h3a.onrender.com/",
    title: "H3A Education",
    description: "Tư vấn du học Hàn Quốc",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
    
      <HeroSection />

      {/* slide show nhà tài trợ */}
      {/* <SponsorsSection />  */}
      <BenefitsSection />

      {/* gimcheon */}
      <FeaturesSection />

      {/* dịch vụ */}
      <ServicesSection />

      {/* Ngành học */}
      <Major />

      {/* Học bổng */}
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}

      {/* Phí dịch vụ */}
      {/* <PricingSection />
      <ContactSection />
      <FAQSection /> */}
      <FooterSection />
    </>
  );
}
