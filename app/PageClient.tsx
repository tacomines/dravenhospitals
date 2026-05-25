"use client";

import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection/WhyChooseUsSection";
import MeetOurExpertsSection from "@/components/sections/MeetOurExpertsSection/MeetOurExpertsSection";
import GallerySection from "@/components/sections/GallerySection/GallerySection";
import HappyClientsSection from "@/components/sections/HappyClientsSection/HappyClientsSection";
import CTASection from "@/components/sections/CTASection/CTASection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import Footer from "@/components/shared/Footer";
import FloatingButtons from "@/components/shared/FloatingButtons";

export default function PageClient() {
  return (
    <>
      <main>
        <HeroSection />

        <AboutUsSection />

        <ServicesSection />

        <WhyChooseUsSection />

        <MeetOurExpertsSection />

        <GallerySection />

        <HappyClientsSection />

        <CTASection />

        <ContactSection />
        
      </main>

      <FloatingButtons />
      <Footer />
    </>
  );
}