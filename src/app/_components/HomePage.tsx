import { NextPage } from "next";
import { FeaturesSection } from "./FeaturesSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { TestimonialSection } from "./TestimonialSection";
import { ContactSection } from "./ContactSection";

export const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
