"use client";
import React, { useState, useMemo, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Logo } from "@/components/ui/logo";

// Lazy load CanvasRevealEffect untuk performa yang lebih baik
const CanvasRevealEffect = lazy(() => import("@/components/ui/canvas-reveal-effect").then(module => ({ default: module.CanvasRevealEffect })));
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


export default function AboutPage() {
  const navItems = useMemo(() => [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ], []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="/contact" variant="primary">Start</NavbarButton>
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
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Start
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
      {/* Hero Section with Container Scroll Animation */}
      <div className="flex flex-col overflow-hidden">
                  <ContainerScroll
            titleComponent={
              <>
                <div className="flex justify-center mb-8">
                  <Logo width={120} height={120} showText={false} />
                </div>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  We Are Architects of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Digital Dominance.
                  </span>
                </h1>
              </>
            }
          >
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">T.S.P. Digital</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Strategic technology partner that weaponizes your data and automates your processes using AI and intelligent software.
              </p>
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* About Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            &ldquo;T.S.P. Digital was founded on a simple, brutal principle: in the modern economy, technology is not a tool—it is the entire battlefield. We exist to provide our clients with the strategic and technical firepower necessary to not just compete, but to dominate their market. We believe in proactive transformation, not reactive solutions. Our obsession is turning complex business problems into elegant, automated, and intelligent systems that deliver measurable results.&rdquo;
          </p>
        </div>
      </section>

      {/* Team Section with Canvas Reveal Effect */}
      <section className="py-12 md:py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
            The Core Command.
          </h2>
          <div className="py-8 md:py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6 md:gap-8 mx-auto px-4 md:px-8">
            <Card title="Santana Mena" subtitle="Lead Strategist & Principal Engineer" icon={<AceternityIcon />} bgColor="bg-[#080c39]">
              <Suspense fallback={<div className="w-full h-full bg-[#080c39] animate-pulse" />}>
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-[#080c39]"
                  colors={[
                    [8, 12, 57],   // #080c39 base
                    [16, 24, 114], // brighter version
                    [24, 36, 171], // even brighter for glow
                  ]}
                  dotSize={3}
                  opacities={[0.4, 0.6, 0.8, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-[#080c39]/30" />
              </Suspense>
            </Card>
            <Card title="Muhammad Haekal A. R." subtitle="Head of Research & AI" icon={<AceternityIcon />} bgColor="bg-[#943834]">
              <Suspense fallback={<div className="w-full h-full bg-[#943834] animate-pulse" />}>
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-[#943834]"
                  colors={[
                    [148, 56, 52],  // #943834 base
                    [185, 72, 68],  // brighter version
                    [222, 88, 84],  // even brighter for glow
                  ]}
                  dotSize={3}
                  opacities={[0.4, 0.6, 0.8, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-[#943834]/30" />
              </Suspense>
            </Card>
            <Card title="Rayhan Kafi Pratama" subtitle="Lead Systems Architect" icon={<AceternityIcon />} bgColor="bg-[#7d8baf]">
              <Suspense fallback={<div className="w-full h-full bg-[#7d8baf] animate-pulse" />}>
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-[#7d8baf]"
                  colors={[
                    [125, 139, 175], // #7d8baf base
                    [149, 163, 199], // brighter version
                    [173, 187, 223], // even brighter for glow
                  ]}
                  dotSize={3}
                  opacities={[0.4, 0.6, 0.8, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-[#7d8baf]/30" />
              </Suspense>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

const Card = React.memo(function Card({
  title,
  subtitle,
  icon,
  children,
  bgColor = "bg-white",
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  bgColor?: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto p-4 md:p-6 relative h-[280px] sm:h-[320px] md:h-[400px] relative ${bgColor}`}
    >
      <Icon className="absolute h-4 w-4 sm:h-6 sm:w-6 -top-2 sm:-top-3 -left-2 sm:-left-3 text-white" />
      <Icon className="absolute h-4 w-4 sm:h-6 sm:w-6 -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 text-white" />
      <Icon className="absolute h-4 w-4 sm:h-6 sm:w-6 -top-2 sm:-top-3 -right-2 sm:-right-3 text-white" />
      <Icon className="absolute h-4 w-4 sm:h-6 sm:w-6 -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 text-white" />

      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center mb-4">
          {icon}
        </div>
        <h2 className="text-white text-base sm:text-lg md:text-xl opacity-100 md:opacity-0 md:group-hover/canvas-card:opacity-100 relative z-10 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200 text-center leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white text-xs sm:text-sm md:text-base opacity-100 md:opacity-0 md:group-hover/canvas-card:opacity-100 relative z-10 mt-2 font-medium group-hover/canvas-card:-translate-y-2 transition duration-200 text-center leading-tight">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
});

const AceternityIcon = React.memo(function AceternityIcon() {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 sm:h-10 sm:w-10 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
});

const Icon = ({ className, ...rest }: { className?: string; [key: string]: unknown }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}; 