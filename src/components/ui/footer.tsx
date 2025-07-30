"use client";
import React from "react";
import { IconBrandLinkedin, IconBrandGithub, IconBrandTwitter, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  darkMode?: boolean;
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "Strategy & Blueprint", href: "/services" },
      { name: "Full-Stack Development", href: "/services" },
      { name: "AI & ML Integration", href: "/services" },
      { name: "Data Analytics", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Approach", href: "/about" },
      { name: "Case Studies", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/transformasi-strategi-progresif-digital-tsp-digital-8599aa377/", icon: IconBrandLinkedin },
  { name: "GitHub", href: "https://github.com/tspdigital", icon: IconBrandGithub },
  { name: "Twitter", href: "https://x.com/tspdigital_id", icon: IconBrandTwitter },
];

const contactInfo = [
  { icon: IconMail, text: "tspdigital.id@gmail.com", href: "mailto:tspdigital.id@gmail.com" },
  { icon: IconPhone, text: "+62 851-2119-0261", href: "tel:+6285121190261" },
//   { icon: IconMapPin, text: "Jakarta, Indonesia", href: "#" },
];

export function Footer({ darkMode = false }: FooterProps) {
  return (
    <footer className={cn(
      "relative w-full border-t",
      darkMode 
        ? "bg-black text-white border-white/10" 
        : "bg-card border-border"
    )}>
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className={cn(
              "relative p-6 rounded-lg border backdrop-blur-sm",
              darkMode 
                ? "border-white/20 bg-black/50" 
                : "border-border/50 bg-card/50"
            )}>
              <GlowingEffect
                spread={20}
                glow={true}
                disabled={false}
                proximity={32}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <div className="mb-4">
                  <Logo width={48} height={48} showText={false} />
                </div>
                <h3 className={cn(
                  "text-2xl font-bold mb-4",
                  darkMode 
                    ? "bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" 
                    : "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                )}>
                  T.S.P. Digital
                </h3>
                <p className={cn(
                  "text-sm mb-6 leading-relaxed",
                  darkMode ? "text-gray-300" : "text-muted-foreground"
                )}>
                  We don't build apps. We build unfair advantages through strategic technology solutions that give you a decisive edge.
                </p>
                
                {/* Contact info */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className={cn(
                        "flex items-center gap-3 text-sm transition-colors group",
                        darkMode 
                          ? "text-gray-300 hover:text-white" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <contact.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h4 className={cn(
                "font-semibold",
                darkMode ? "text-white" : "text-foreground"
              )}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm transition-colors hover:translate-x-1 inline-block",
                        darkMode 
                          ? "text-gray-300 hover:text-white" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className={cn(
          "border-t pt-8",
          darkMode ? "border-white/10" : "border-border/50"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className={cn(
              "text-sm",
              darkMode ? "text-gray-300" : "text-muted-foreground"
            )}>
              © {new Date().getFullYear()} T.S.P. Digital. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative p-2 rounded-lg border transition-all duration-300 group",
                    darkMode 
                      ? "border-white/20 bg-black/50 hover:bg-white/10" 
                      : "border-border/50 bg-card/50 hover:bg-accent/50"
                  )}
                >
                  <GlowingEffect
                    spread={15}
                    glow={true}
                    disabled={false}
                    proximity={24}
                    inactiveZone={0.01}
                  />
                  <social.icon className={cn(
                    "h-5 w-5 transition-all duration-300 relative z-10 group-hover:scale-110",
                    darkMode 
                      ? "text-gray-300 group-hover:text-white" 
                      : "text-muted-foreground group-hover:text-foreground"
                  )} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 