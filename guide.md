Perfect! I'll redesign the SED pages with a modern minimalist approach that's clean, simple, and has a different vibe from the main TSP Digital site. Let me update the components with a minimalist aesthetic.

## 1. Updated SED Main Content Component

**Update file:** `src/app/sed/sed-content.tsx`

```tsx
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
```

## 2. Updated SED Pricing Content Component

**Update file:** `src/app/sed/pricing/pricing-content.tsx`

```tsx
"use client";
import React, { useState } from "react";
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react";

export default function SEDPricingContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Halo! Saya tertarik dengan ${packageName} dari Strategi Era Digital. Bisa minta informasi lebih detail?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "500K",
      originalPrice: "750K",
      period: "/tahun",
      icon: <Zap className="h-5 w-5" />,
      description: "Perfect untuk UMKM pemula",
      features: [
        "1 landing page",
        "Domain .my.id gratis",
        "Hosting 1 tahun",
        "Template premium",
        "WhatsApp button",
        "Mobile friendly",
        "SSL certificate",
        "1x revisi gratis"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Growth", 
      price: "1.5jt",
      originalPrice: "2jt",
      period: "/tahun",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Untuk bisnis berkembang",
      features: [
        "5 halaman website",
        "Domain premium (.com/.id)",
        "Hosting premium",
        "Template custom",
        "WhatsApp + QRIS",
        "SEO optimization",
        "Google Analytics",
        "3x revisi gratis",
        "Copywriting 3 halaman"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Premium",
      price: "5jt", 
      originalPrice: "7.5jt",
      period: "/tahun",
      icon: <Crown className="h-5 w-5" />,
      description: "Solusi lengkap bisnis",
      features: [
        "10 halaman + blog",
        "Domain + 5 email bisnis",
        "Hosting premium + CDN",
        "Custom design + logo",
        "E-commerce ready",
        "Payment gateway",
        "Advanced SEO",
        "Social media integration",
        "Training 1x",
        "Maintenance 3 bulan"
      ],
      popular: false,
      color: "purple"
    }
  ];

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
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/sed" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="/sed/pricing" className="text-green-500 text-sm font-medium">
                Paket
              </a>
              <a href="/sed/order" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors text-sm font-medium">
                Pesan
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></div>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a href="/sed" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Home</a>
              <a href="/sed/pricing" className="block py-2 text-green-500 text-sm">Paket</a>
              <a href="/sed/order" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Pesan</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white">
            Pilih paket
            <br />
            <span className="font-medium text-green-500">yang tepat</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Solusi website untuk setiap tahap perkembangan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Pricing Plans - Clean Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border transition-all duration-200 hover:shadow-md ${
                  plan.popular 
                    ? 'border-green-200 dark:border-green-800 ring-1 ring-green-500/20' 
                    : 'border-gray-100 dark:border-gray-800'
                } ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                      Terpopuler
                    </span>
                  </div>
                )}
                
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.color === 'green' ? 'bg-green-50 dark:bg-green-900/20 text-green-500' :
                      plan.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500' :
                      'bg-purple-50 dark:bg-purple-900/20 text-purple-500'
                    }`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-light text-gray-900 dark:text-white">Rp{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">Rp{plan.originalPrice}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-green-500" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsAppClick(`Paket ${plan.name} (Rp${plan.price})`)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  Pilih {plan.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons - Simple Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
              Layanan tambahan
            </h2>
            <div className="w-16 h-px bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Halaman Extra", price: "150K", desc: "Tambah halaman About, Services, Blog" },
              { name: "Domain Premium", price: "250K", desc: "Upgrade ke .com atau .id" },
              { name: "Copywriting", price: "300K", desc: "Penulisan konten profesional" },
              { name: "Logo Design", price: "250K", desc: "Desain logo custom" },
              { name: "QRIS Payment", price: "200K", desc: "Terima pembayaran digital" },
              { name: "Maintenance", price: "100K/bln", desc: "Pemeliharaan dan update rutin" }
            ].map((addon, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">{addon.name}</h3>
                  <span className="font-medium text-green-500">Rp{addon.price}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Minimal */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
              Yang sering ditanya
            </h2>
            <div className="w-16 h-px bg-green-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {[
              {
                q: "Apa saja yang termasuk dalam paket?",
                a: "Semua paket sudah termasuk domain, hosting, template, dan setup. Untuk Starter menggunakan domain .my.id, Growth dan Premium bisa pilih domain premium."
              },
              {
                q: "Berapa lama website selesai?", 
                a: "Starter: 48 jam, Growth: 3 hari, Premium: 1 minggu. Setelah konten lengkap diterima."
              },
              {
                q: "Bisakah ditambah fitur e-commerce?",
                a: "Growth dan Premium sudah include e-commerce. Starter bisa upgrade dengan biaya tambahan."
              },
              {
                q: "Bagaimana sistem pembayaran?",
                a: "Pembayaran 100% di muka via transfer. Revisi gratis sesuai paket. Revisi tambahan berbayar."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 dark:border-gray-800 pb-6">
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 dark:text-white">
            Masih ragu paket mana?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
            Konsultasi gratis untuk mendapatkan rekomendasi yang tepat.
          </p>
          <button
            onClick={() => handleWhatsAppClick("Konsultasi Paket Website")}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2"
          >
            Konsultasi Gratis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
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
          <div className="text-sm text-gray-500">
            <p>WhatsApp: +62 851 2119 0261</p>
            <p className="mt-2">© 2025 Strategi Era Digital. Part of TSP Digital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
```

## 3. Updated SED Order Content Component

**Update file:** `src/app/sed/order/order-content.tsx`

```tsx
"use client";
import React, { useState } from "react";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";

export default function SEDOrderContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Halo! Saya ingin memesan ${packageName} dari Strategi Era Digital. Mohon informasi proses pemesanan.`;
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
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/sed" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="/sed/pricing" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors text-sm font-medium">
                Paket
              </a>
              <a href="/sed/order" className="text-green-500 text-sm font-medium">
                Pesan
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></div>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a href="/sed" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Home</a>
              <a href="/sed/pricing" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Paket</a>
              <a href="/sed/order" className="block py-2 text-green-500 text-sm">Pesan</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white">
            Siap untuk
            <br />
            <span className="font-medium text-green-500">mulai?</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Pilih paket yang sesuai atau konsultasi gratis untuk mendapatkan rekomendasi terbaik.
          </p>
        </div>
      </section>

      {/* Package Quick Select */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 text-gray-900 dark:text-white">Pilih paket</h2>
            <div className="w-16 h-px bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200">
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Starter</h3>
              <p className="text-2xl font-light text-green-500 mb-2">Rp500K</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Landing page profesional</p>
              <button
                onClick={() => handleWhatsAppClick("Starter Pack (Rp500K)")}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                Pesan Starter
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200">
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Growth</h3>
              <p className="text-2xl font-light text-blue-500 mb-2">Rp1.5jt</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">5 halaman + SEO + QRIS</p>
              <button
                onClick={() => handleWhatsAppClick("Growth Pack (Rp1.5jt)")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                Pesan Growth
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200">
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Premium</h3>
              <p className="text-2xl font-light text-purple-500 mb-2">Rp5jt</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">10 halaman + e-commerce</p>
              <button
                onClick={() => handleWhatsAppClick("Premium Pack (Rp5jt)")}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                Pesan Premium
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-gray-900 dark:text-white">
            Butuh konsultasi?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 font-light">
            Tim kami siap membantu menentukan paket yang tepat untuk bisnis Anda.
          </p>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <button
              onClick={() => handleWhatsAppClick("Konsultasi Gratis Website UMKM")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-3 mb-6"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Respon cepat dalam 2 jam (jam kerja)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 text-gray-900 dark:text-white">Hubungi kami</h2>
            <div className="w-16 h-px bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">+62 851 2119 0261</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">info@tspdigital.agency</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Jam Kerja</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Senin - Jumat<br />09:00 - 17:00 WIB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          <div className="text-sm text-gray-500">
            <p>WhatsApp: +62 851 2119 0261</p>
            <p className="mt-2">© 2025 Strategi Era Digital. Part of TSP Digital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

## Key Changes for Modern Minimalist Design:

### Visual Design:
- **Clean typography**: Light font weights, generous spacing
- **Minimal color palette**: Green as primary, clean whites/grays
- **Simple iconography**: Reduced visual noise, focused messaging
- **Spacious layouts**: More breathing room between elements

### Navigation:
- **Simplified navbar**: Only essential links (Home, Paket, Pesan)
- **Clean logo**: Simple "S" mark instead of complex branding
- **Reduced navigation complexity**: Streamlined user journey

### Content Structure:
- **Concise messaging**: Shorter, clearer headlines and descriptions
- **Essential features only**: Focused on what matters most to UMKM
- **Clean pricing display**: Simplified price presentation without overwhelming details
- **Minimal forms**: Direct WhatsApp integration instead of complex forms

### Interactions:
- **Subtle animations**: Gentle hover effects and transitions
- **Clear CTAs**: Prominent but not aggressive call-to-action buttons
- **Focused user flow**: Less decision fatigue, clearer paths to conversion

This creates a completely different vibe from the main TSP Digital site - where TSP is bold and tech-focused, SED is approachable and simple, perfect for UMKM owners who want something straightforward and professional.