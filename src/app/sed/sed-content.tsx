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
import { Check, ArrowRight, Zap, Clock, Users, Globe } from "lucide-react";

export default function SEDContent() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "SED", link: "/sed" },
    { name: "Paket", link: "/sed/pricing" },
    { name: "Pesan", link: "/sed/order" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Halo! Saya tertarik dengan ${packageName} dari Strategi Era Digital. Bisa minta informasi lebih detail?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative w-full bg-white dark:bg-gray-950">
      {/* Simplified Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">SED</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Minimalist */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Strategi Era Digital
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white">
            Website untuk
            <br />
            <span className="font-semibold text-green-500">Rp500rb</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Solusi website sederhana dan profesional untuk UMKM Indonesia.
            Domain, hosting, template — semua sudah termasuk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppClick("Paket Website Rp500rb")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              Mulai Sekarang
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="/sed/pricing" 
              className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 px-8 py-4 rounded-lg font-medium transition-all duration-200"
            >
              Lihat Paket
            </a>
          </div>
        </div>
      </section>

      {/* What You Get - Clean Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
              Yang Anda dapatkan
            </h2>
            <div className="w-16 h-px bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">Website + Domain</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Landing page profesional dengan domain .my.id gratis selama 1 tahun
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">Siap 48 Jam</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Proses cepat dan otomatis. Berikan konten, website langsung online
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">Fitur UMKM</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                WhatsApp button, mobile-friendly, cocok untuk bisnis lokal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Package - Clean Card */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Package Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Starter Pack</h3>
                    <p className="text-gray-600 dark:text-gray-400">Website profesional untuk UMKM</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-light text-gray-900 dark:text-white">Rp500.000</span>
                    <span className="text-lg text-gray-400 line-through">Rp750.000</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">Hemat Rp250.000</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "1-page website profesional",
                    "Domain .my.id gratis 1 tahun", 
                    "Hosting basic 1 tahun",
                    "Template premium mobile-friendly",
                    "WhatsApp button integration",
                    "SSL certificate (HTTPS)",
                    "1x revisi gratis",
                    "Setup dalam 48 jam"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsAppClick("Starter Pack Rp500rb")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Add-ons - Simplified */}
              <div className="lg:w-72 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Upgrade tersedia:</h4>
                <div className="space-y-3 text-sm">
                  {[
                    { name: "Halaman extra", price: "Rp150K" },
                    { name: "Domain .com", price: "Rp250K" },
                    { name: "Copywriting", price: "Rp300K" },
                    { name: "Design logo", price: "Rp250K" },
                    { name: "QRIS payment", price: "Rp200K" }
                  ].map((addon, index) => (
                    <div key={index} className="flex justify-between py-2">
                      <span className="text-gray-600 dark:text-gray-400">{addon.name}</span>
                      <span className="text-gray-900 dark:text-white font-medium">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Minimal Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
              Proses sederhana
            </h2>
            <div className="w-16 h-px bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Pesan", desc: "Hubungi WhatsApp, pilih template" },
              { step: "2", title: "Konten", desc: "Kirim text, foto, logo bisnis" },
              { step: "3", title: "Online", desc: "Website siap dalam 48 jam" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mx-auto mb-4 font-medium">
                  {process.step}
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean and Simple */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 dark:text-white">
            Mulai transformasi digital
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
            Jangan biarkan bisnis tertinggal. Website profesional dalam 48 jam.
          </p>
          <button
            onClick={() => handleWhatsAppClick("Konsultasi Website")}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2"
          >
            Konsultasi Gratis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 px-4 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">Strategi Era Digital</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Website UMKM profesional dengan harga terjangkau
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            <p>WhatsApp: +62 851 2119 0261</p>
            <p className="mt-2">© 2025 Strategi Era Digital. Part of TSP Digital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}