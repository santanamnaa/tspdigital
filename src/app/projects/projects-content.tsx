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

export default function ProjectsContent() {
  const navItems = [
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
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

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
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo width={100} height={100} showText={false} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Evidence of Execution.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Talk is cheap. Here is our work.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>AI-Powered Aerial Inspection System</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>Client:</strong> National Research and Innovation Agency (BRIN)
                  <br />
                  Developed a computer vision system using YOLOv8 and OpenCV to detect aircraft body damage from drone footage, enhancing inspection speed and accuracy.
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>Real-Time Project Management Platform</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>Client:</strong> PT. Gunung Amal Solutions Internasional
                  <br />
                  Built a full-stack system to streamline task assignments, progress tracking, and team collaboration, leveraging Node.js and cloud database integration.
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>Predictive Heart Disease Model</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>Type:</strong> R&D Case Study
                  <br />
                  Designed and developed a heart disease prediction application using a Random Forest machine learning model and interactive visualizations with Streamlit.
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>Decentralized Identity Platform</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>Type:</strong> R&D Case Study
                  <br />
                  Engineered a secure identity management platform using Motoko Backend and Vanilla JS, allowing users to generate unique ID addresses for seamless integration.
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>AI-Powered Pothole Detector</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>Client:</strong> Binus University (PKM-KC Nominee)
                  <br />
                  Developed and fine-tuned a pothole detection system that generates automated PDF reports for infrastructure maintenance.
                </GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <Icon />
                </div>
              </div>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>Nationwide Blood Bank Application (&quot;Hemo&quot;)</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  <strong>Type:</strong> R&D Case Study
                  <br />
                  Built a web-based platform to connect blood donors with those in need, featuring real-time requests and inventory management.
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