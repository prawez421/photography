import HeroSection from "@/components/home/HeroSection";
import RecentWork from "@/components/home/RecentWork";
import AboutPreview from "@/components/home/AboutPreview";
import CategoriesSection from "@/components/home/CategoriesSection";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#001018] text-white">
      <HeroSection />
      <RecentWork />
      <AboutPreview />
      <CategoriesSection />
      <ServicesSection />
      <Testimonials />
      <Newsletter />
      <HomeCTA />
    </main>
  );
}