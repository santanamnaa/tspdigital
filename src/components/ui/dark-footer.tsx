"use client";
import React from "react";
import { IconBrandLinkedin, IconBrandGithub, IconBrandTwitter, IconMail, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";


interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
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
  { name: "LinkedIn", href: "https://linkedin.com/in/tspdigital", icon: IconBrandLinkedin },
  { name: "GitHub", href: "https://github.com/tspdigital", icon: IconBrandGithub },
  { name: "Twitter", href: "https://x.com/tspdigital_id", icon: IconBrandTwitter },
];

const contactInfo = [
  { icon: IconMail, text: "info@tspdigital.id", href: "mailto:info@tspdigital.id" },
  { icon: IconPhone, text: "+62 851-2119-0261", href: "tel:+6285121190261" },
  { icon: IconBrandWhatsapp, text: "+62 851-2119-0261", href: "https://wa.me/6285121190261" },
  //   { icon: IconMapPin, text: "Jakarta, Indonesia", href: "#" },
];

export function DarkFooter() {
  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10">
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="relative p-6 rounded-lg border border-white/20 bg-black/50 backdrop-blur-sm text-center sm:text-left">
              <GlowingEffect
                spread={20}
                glow={true}
                disabled={false}
                proximity={32}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  TSP Digital
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  We don&apos;t build apps. We build unfair advantages through strategic technology solutions that give you a decisive edge.
                </p>
                {/* Contact info */}
                <div className="space-y-3 flex flex-col items-center sm:items-start">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
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
            <div key={sectionIndex} className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
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
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} TSP Digital.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center md:justify-end w-full md:w-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2 rounded-lg border border-white/20 bg-black/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <GlowingEffect
                    spread={15}
                    glow={true}
                    disabled={false}
                    proximity={24}
                    inactiveZone={0.01}
                  />
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 