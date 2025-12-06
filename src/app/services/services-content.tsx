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

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { useLanguage } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/ui/language-toggle";

export default function ServicesContent() {
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
            {t("servicesPage.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t("servicesPage.hero.description")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
              title={t("servicesPage.items.strategy.title")}
              description={t("servicesPage.items.strategy.description")}
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
              title={t("servicesPage.items.development.title")}
              description={t("servicesPage.items.development.description")}
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
              title={t("servicesPage.items.ai.title")}
              description={t("servicesPage.items.ai.description")}
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
              title={t("servicesPage.items.custom.title")}
              description={t("servicesPage.items.custom.description")}
            />

            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
              title={t("servicesPage.items.support.title")}
              description={t("servicesPage.items.support.description")}
            />
          </ul>
        </div>
      </section>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}; 