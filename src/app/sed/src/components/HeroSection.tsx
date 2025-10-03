"use client";

import { Button } from './ui/button';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

export function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = `Halo TSP Digital! Saya tertarik dengan paket SED Website 500rb. Bisa konsultasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 bg-[#0C0C00]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Promo Badge */}
        <div className="inline-block bg-[#0057FF] text-white px-6 py-3 rounded-lg uppercase tracking-wider">
          🚀 Promo Terbatas
        </div>
        
        {/* Main Headline */}
        <h1 className="font-intro-rust text-7xl lg:text-9xl leading-none tracking-tight">
          <span className="text-white">WEBSITE</span>
          <br />
          <span className="text-[#FF5C00]">500RBAN</span>
          <br />
          <span className="text-white">AJA!</span>
        </h1>
        
        {/* Subtitle */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-2xl text-gray-300">
            Termasuk Domain, Hosting & SSL Certificate
          </p>
          <p className="text-lg text-gray-400">
            Digitalisasi yang lebih profesional dan terjangkau untuk bisnismu.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="pt-8 space-y-4">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-[#FF5C00] hover:bg-[#e54e00] text-white px-12 py-6 text-xl rounded-xl shadow-lg shadow-[#FF5C00]/30 transition-all duration-300 hover:scale-105"
          >
            Mulai Sekarang! 🔥
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setShowContactForm(!showContactForm)}
              variant="outline"
              size="lg"
              className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white px-8 py-4 text-lg rounded-xl"
            >
              📝 Isi Form Pesan
            </Button>
            
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 text-lg rounded-xl"
            >
              💬 WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Powered by */}
        <div className="text-gray-500 text-sm">
          Powered by TSP Digital Agency
        </div>
        
        {/* Trust Indicators */}
        <div className="flex justify-center gap-8 pt-8 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse"></div>
            <span>Setup Cepat</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse"></div>
            <span>Garansi dengan Syarat</span>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl text-white">Pesan Sekarang</h3>
                <Button
                  onClick={() => setShowContactForm(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}