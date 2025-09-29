"use client";
import React, { useState } from "react";
import { Check, ArrowRight, Zap, TrendingUp, Crown, Smartphone, Globe, ShoppingCart, CreditCard, Mail } from "lucide-react";
import Image from "next/image";

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
      price: "500.000",
      originalPrice: "750.000",
      period: "sekali bayar",
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
        "2x revisi gratis",
        "Basic SEO setup"
      ],
      popular: true,
      color: "gray"
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
        "Copywriting 3 halaman",
        "Social media integration"
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
        "Maintenance 3 bulan",
        "Google Ads setup"
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
              <Image 
                src="/logo/sed/logo_sed.svg" 
                alt="SED Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-gray-900 dark:text-white">SED</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/sed" className="text-gray-600 dark:text-gray-300 hover:text-[#363636] transition-colors text-sm font-medium">
                Home
              </a>
              <a href="/sed/pricing" className="text-[#363636] text-sm font-medium">
                Paket
              </a>
              <a href="/sed/order" className="text-gray-600 dark:text-gray-300 hover:text-[#363636] transition-colors text-sm font-medium">
                Pesan
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-700"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-700"></div>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a href="/sed" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Home</a>
              <a href="/sed/pricing" className="block py-2 text-[#363636] text-sm">Paket</a>
              <a href="/sed/order" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Pesan</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
            Pilih paket
            <br />
            <span className="font-medium text-[#363636]">yang tepat</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light">
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
                    ? 'border-[#363636]/20 dark:border-[#363636]/80 ring-1 ring-[#363636]/20' 
                    : 'border-gray-100 dark:border-gray-800'
                } ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#363636] text-white px-4 py-1 rounded-full text-xs font-medium">
                      Terpopuler
                    </span>
                  </div>
                )}
                
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.color === 'gray' ? 'bg-[#363636]/5 dark:bg-[#363636]/20 text-[#363636]' :
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
                    <span className="text-sm text-gray-500 dark:text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#363636]/5 dark:bg-[#363636]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#363636]" />
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
                      ? 'bg-[#363636] hover:bg-[#4a4a4a] text-white'
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
            <div className="w-16 h-px bg-[#363636] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Halaman Extra", price: "150K", desc: "Tambah halaman About, Services, Blog", icon: <Globe className="h-5 w-5" /> },
              { name: "Domain Premium", price: "250K", desc: "Upgrade ke .com atau .id", icon: <Globe className="h-5 w-5" /> },
              { name: "Copywriting", price: "300K", desc: "Penulisan konten profesional", icon: <Mail className="h-5 w-5" /> },
              { name: "Logo Design", price: "250K", desc: "Desain logo custom", icon: <Mail className="h-5 w-5" /> },
              { name: "QRIS Payment", price: "200K", desc: "Terima pembayaran digital", icon: <CreditCard className="h-5 w-5" /> },
              { name: "Maintenance", price: "100K/bln", desc: "Pemeliharaan dan update rutin", icon: <Smartphone className="h-5 w-5" /> }
            ].map((addon, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  index % 2 === 0 ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500' : 'bg-purple-50 dark:bg-purple-900/20 text-purple-500'
                }`}>
                  {addon.icon}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{addon.name}</h3>
                    <span className="font-medium text-[#363636]">Rp{addon.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{addon.desc}</p>
                </div>
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
            <div className="w-16 h-px bg-[#363636] mx-auto"></div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-gray-900 dark:text-white">
            Siap tingkatkan bisnis Anda?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 font-light">
            Dapatkan website profesional yang membantu Anda mendapatkan lebih banyak pelanggan.
          </p>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <button
              onClick={() => handleWhatsAppClick("Konsultasi Gratis Website UMKM")}
              className="w-full bg-[#363636] hover:bg-[#4a4a4a] text-white py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-3 mb-6"
            >
              Konsultasi Gratis Sekarang
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Respon cepat dalam 2 jam (jam kerja)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image 
              src="/logo/sed/logo_sed.svg" 
              alt="SED Logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
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