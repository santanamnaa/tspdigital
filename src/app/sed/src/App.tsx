import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSolution } from './components/ProblemSolution';
import { PackageDetails } from './components/PackageDetails';
import { TargetMarket } from './components/TargetMarket';
import { ValueProposition } from './components/ValueProposition';
import { EcosystemGrowth } from './components/EcosystemGrowth';
import { PortfolioTestimonials } from './components/PortfolioTestimonials';
import { PricingStructure } from './components/PricingStructure';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <PackageDetails />
      <TargetMarket />
      <ValueProposition />
      <EcosystemGrowth />
      <PortfolioTestimonials />
      <PricingStructure />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}