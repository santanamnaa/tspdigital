"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Cover } from "@/components/ui/cover";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "@/components/ui/glowing-stars";
import TimelineDemo from "@/components/ui/timeline-demo";
import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";
import AnimatedTooltipDemo from "@/components/ui/animated-tooltip-demo";
import { Footer } from "@/components/ui/footer";
import { Logo } from "@/components/ui/logo";
import { useLanguage } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/ui/language-toggle";

export default function HomeContent() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: t("nav.home"),
      link: "/",
    },
    {
      name: t("nav.about"),
      link: "/about",
    },
    {
      name: t("nav.services"),
      link: "/services",
    },
    {
      name: t("nav.projects"),
      link: "/projects",
    },
    {
      name: t("nav.contact"),
      link: "/contact",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <NavbarButton href="/contact" variant="primary">{t("nav.start")}</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <LanguageToggle className="w-full" />
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                {t("nav.start")}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-2">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo width={120} height={120} showText={false} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-b from-gray-900 via-gray-500 to-gray-200 bg-clip-text text-transparent block mb-2">
              {t("hero.title1")}
            </span>
            <span className="block mt-4">
              {t("hero.title2")} <Cover>{t("hero.title3")}</Cover>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t("hero.description")}
          </p>
          {/* <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
            Go
          </button> */}
        </div>
      </section>

      {/* Social Proof Section
      <section className="py-60 px-4 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-black dark:text-white max-w-4xl text-center">
              Trusted in High-Stakes Environments.
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center">
              Our clients rely on us when the stakes are highest. We deliver results where reliability, security, and innovation are non-negotiable.
            </p>
          </div>
          <div className="mt-20 w-full flex justify-center items-center">
            <AnimatedTooltipDemo />
          </div>
        </div>
      </section> */}

      {/* Services Teaser Section */}
      <section className="py-60 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-black dark:text-white max-w-4xl">
              {t("services.title")}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-12">
              {t("services.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-lg border-2 border-[#0A84FF]/10 shadow-2xl shadow-[#0A84FF]/20">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
              />
              <div className="relative z-10 text-center py">
                <h3 className="text-xl font-semibold mb-3">{t("services.strategy.title")}</h3>
                <p className="text-muted-foreground">{t("services.strategy.description")}</p>
              </div>
            </div>
            <div className="relative p-6 rounded-lg border-2 border-[#0A84FF]/10 shadow-2xl shadow-[#0A84FF]/20">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
              />
              <div className="relative z-10 text-center py">
                <h3 className="text-xl font-semibold mb-3">{t("services.development.title")}</h3>
                <p className="text-muted-foreground">{t("services.development.description")}</p>
              </div>
            </div>
            <div className="relative p-6 rounded-lg border-2 border-[#0A84FF]/10 shadow-2xl shadow-[#0A84FF]/20">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
              />
              <div className="relative z-10 text-center py">
                <h3 className="text-xl font-semibold mb-3">{t("services.ai.title")}</h3>
                <p className="text-muted-foreground">{t("services.ai.description")}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            {/* <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              Explore Our Services
            </button> */}
          </div>
        </div>
      </section>

      {/* Engagement Protocol Timeline */}
      <section className="py-20 px-4">
        <TimelineDemo />
      </section>

      {/* Strategic Portfolio Section */}
      <section className="py-20 px-4">
        <AppleCardsCarouselDemo />
      </section>

      {/* Featured Project Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto relative">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={100}
            inactiveZone={0.01}
          />
          <div className="relative z-10">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-black dark:text-white max-w-4xl text-center mx-auto">
              {t("projects.title")}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-12 text-center mx-auto">
              {t("projects.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>{t("projects.aerial.title")}</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                  <GlowingStarsDescription>
                    {t("projects.aerial.description")}
                  </GlowingStarsDescription>
                  <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                    <Icon />
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
              <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>{t("projects.management.title")}</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                  <GlowingStarsDescription>
                    {t("projects.management.description")}
                  </GlowingStarsDescription>
                  <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                    <Icon />
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
              <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>{t("projects.heart.title")}</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                  <GlowingStarsDescription>
                    {t("projects.heart.description")}
                  </GlowingStarsDescription>
                  <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                    <Icon />
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
            </div>
            {/* <div className="text-center mt-12">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
                View All Projects
              </button>
            </div> */}
          </div>
        </div>
      </section>

      <div className="py-20"></div>
      {/* Footer */}
      <Footer />

      {/* Empty space after footer */}
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}; 