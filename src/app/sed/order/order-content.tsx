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