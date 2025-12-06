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

import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "@/components/ui/glowing-stars";
import { Logo } from "@/components/ui/logo";
import { useLanguage } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/ui/language-toggle";

export default function ProjectsContent() {
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
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo width={100} height={100} showText={false} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t("projectsPage.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t("projectsPage.hero.description")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{t("projectsPage.items.aerial.title")}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>{t("projectsPage.client")}:</strong> {t("projectsPage.items.aerial.client")}
                  <br />
                  {t("projectsPage.items.aerial.description")}
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{t("projectsPage.items.management.title")}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>{t("projectsPage.client")}:</strong> {t("projectsPage.items.management.client")}
                  <br />
                  {t("projectsPage.items.management.description")}
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{t("projectsPage.items.heart.title")}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>{t("projectsPage.type")}:</strong> {t("projectsPage.rdCaseStudy")}
                  <br />
                  {t("projectsPage.items.heart.description")}
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{t("projectsPage.items.identity.title")}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>{t("projectsPage.type")}:</strong> {t("projectsPage.rdCaseStudy")}
                  <br />
                  {t("projectsPage.items.identity.description")}
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{t("projectsPage.items.pothole.title")}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>{t("projectsPage.client")}:</strong> {t("projectsPage.items.pothole.client")}
                  <br />
                  {t("projectsPage.items.pothole.description")}
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{t("projectsPage.items.bloodBank.title")}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>{t("projectsPage.type")}:</strong> {t("projectsPage.rdCaseStudy")}
                  <br />
                  {t("projectsPage.items.bloodBank.description")}
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </section>
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