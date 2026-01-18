"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import PortfolioSection from "@/components/portfolio-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ShaderShowcase() {
  return (
    <div className="bg-[#0a0a0a]">
      <Header />
      <section className="relative min-h-screen">
        <ShaderBackground>
          <HeroContent />
        </ShaderBackground>
      </section>
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </div>
  )
}
