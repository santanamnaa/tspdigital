"use client";

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

export function FinalCTA() {
  const [showContactForm, setShowContactForm] = useState(false);

  const openWhatsApp = () => {
    const message = `Halo TSP Digital! Saya tertarik dengan paket SED Base Website. Bisa konsultasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6">
            <img 
              src="/logo/sed/sed logo.png" 
              alt="SED Logo" 
              width={80} 
              height={80}
              className="object-contain"
            />
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-6">Ayo <span className="text-[#0057FF]">Mulai!</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jadikan bisnismu lebih profesional dengan website modern hanya Rp 500rb
          </p>
        </div>
        
        <Card className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl text-white mb-4">SED Base Website</h3>
              <p className="text-2xl text-[#0057FF] mb-4">Rp 500.000</p>
              <p className="text-gray-300 mb-6">
                Website company profile profesional untuk memulai digitalisasi bisnis Anda.
              </p>
              <div className="space-y-3">
                {[
                  'Company Profile',
                  'Contact Info',
                  'Portfolio/Gallery',
                  'Basic SEO',
                  'Contact Form',
                  'Google Maps',
                  'WhatsApp Integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#00FF88]" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                size="lg"
                className="w-full bg-[#FF5C00] hover:bg-[#e54e00] text-white text-lg py-6"
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </Card>
        
        <div className="text-center mb-12">
          <h3 className="text-3xl text-white mb-6">Fitur Tambah (Add-ons)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Halaman Tambahan', price: 'Rp 100rb', unit: '/ halaman' },
              { label: 'Galeri/Portfolio Dinamis', price: 'Rp 150rb' },
              { label: 'Google Analytics Setup', price: 'Rp 150rb' },
              { label: 'Logo Design', price: 'Rp 300rb' },
              { label: 'Social Media Kit', price: 'Rp 350rb' },
              { label: 'Business Email', price: 'Rp 200rb', note: '/tahun' }
            ].map((addon, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-900/40 to-gray-800/40 border-gray-700/50 p-6">
                <h4 className="text-xl text-white mb-2">{addon.label}</h4>
                <p className="text-[#0057FF] text-lg font-bold">{addon.price}</p>
                {addon.unit && <p className="text-gray-400 text-sm">{addon.unit}</p>}
                {addon.note && <p className="text-gray-400 text-sm">{addon.note}</p>}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}