import CTASection from "@/components/CTA";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MainHeadder } from "@/components/MainHeader";

export default async function Home() {

  return (

    <div className="w-full flex flex-col items-center bg-secondaryLight dark:bg-primaryDark min-h-screen h-full">
      <MainHeadder />
      <HeroSection />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}