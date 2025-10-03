"use client";

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

export function FinalCTA() {
  const [showContactForm, setShowContactForm] = useState(false);

  const openWhatsApp = () => {
    const message = `Halo TSP Digital! Saya tertarik dengan paket SED Website. Bisa konsultasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const addons = [
    { label: 'Halaman Tambahan', price: 'Rp 100rb', unit: '/ halaman' },
    { label: 'Galeri/Portfolio Dinamis', price: 'Rp 150rb' },
    { label: 'WhatsApp CTA', price: 'Gratis', note: '(sudah termasuk)' },
    { label: 'Google Analytics Setup', price: 'Rp 150rb' },
    { label: 'Logo Design', price: 'Rp 300rb' },
    { label: 'Social Media Kit (5 aset)', price: 'Rp 350rb' },
    { label: 'Business Email (1 akun/tahun)', price: 'Rp 200rb' },
    { label: 'E-commerce Ringan', price: 'Rp 400rb', note: '(catalog + checkout link/WA)' },
    { label: 'Online Booking Sederhana', price: 'Rp 300rb' },
    { label: 'Multibahasa (2 bahasa)', price: 'Rp 300rb' },
    { label: 'Support Prioritas 7 hari', price: 'Rp 150rb' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0C0C0C] via-[#1a1a1a] to-[#0C0C0C] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,87,255,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl leading-none mb-6">
            <span className="text-white">SAATNYA GO DIGITAL</span>
            <br />
            <span className="text-[#0057FF]">— Tanpa Ribet, Tanpa Diskon Palsu.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
            Solusi digitalisasi transparan, terjangkau, dan profesional untuk UMKM & startup Indonesia.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Base Website */}
          <Card className="bg-gradient-to-br from-[#FF5C00]/10 to-[#FF5C00]/5 border-[#FF5C00]/30 p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl text-white mb-2">💻 Base Website</h3>
              <h4 className="text-xl text-[#FF5C00] mb-3">SED Base Website</h4>
              <div className="text-3xl text-white mb-1">Rp 500.000</div>
              <p className="text-gray-400 text-sm">sekali bayar</p>
            </div>
            
            <div className="space-y-2">
              {[
                'Company Profile (1 halaman)',
                'Domain .my.id + Hosting 1 tahun',
                'SSL Certificate',
                'Responsive Design',
                'Basic SEO',
                'Contact Form + Google Maps'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#00FF88] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Add-ons */}
          <Card className="bg-gradient-to-br from-[#0057FF]/10 to-[#0057FF]/5 border-[#0057FF]/30 p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl text-white mb-2">➕ Add-ons Opsional</h3>
              <p className="text-gray-300 text-sm">(Pilih Sesuai Kebutuhanmu)</p>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {addons.map((addon, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-800/30 p-2 rounded">
                  <div>
                    <div className="text-white text-xs">{addon.label}</div>
                    {addon.note && (
                      <div className="text-gray-400 text-xs">{addon.note}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-semibold ${addon.price === 'Gratis' ? 'text-[#00FF88]' : 'text-[#0057FF]'}`}>
                      {addon.price}
                    </div>
                    {addon.unit && (
                      <div className="text-gray-400 text-xs">{addon.unit}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Why Choose SED */}
        <div className="mt-16">
          <h3 className="text-4xl text-white text-center mb-12">
            🚀 Kenapa Pilih <span className="text-[#FF5C00]">SED</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '⚡', title: 'Proses Efisien', desc: 'cepat online, tanpa ribet.' },
              { emoji: '🎨', title: 'Desain Profesional', desc: 'modern, clean, sesuai brand.' },
              { emoji: '🛡️', title: 'Harga Jelas', desc: 'transparan, tanpa markup tersembunyi.' },
              { emoji: '🔧', title: 'Bantuan Selama Proyek', desc: 'support hingga selesai.' }
            ].map((trust, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700/50 p-6 text-center">
                <div className="text-4xl mb-3">{trust.emoji}</div>
                <h4 className="text-white text-lg mb-2">{trust.title}</h4>
                <p className="text-gray-400 text-sm">{trust.desc}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16" id="contact-section">
          <h3 className="text-4xl text-white mb-8">📞 Aksi</h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => setShowContactForm(true)}
              size="lg" 
              className="bg-[#FF5C00] hover:bg-[#e54e00] text-white px-12 py-6 text-2xl rounded-xl shadow-lg shadow-[#FF5C00]/30 transition-all duration-300 hover:scale-105"
            >
              👉 Pesan Sekarang – Mulai Rp 500rb
            </Button>
            
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-2">atau</p>
              <Button 
                onClick={openWhatsApp}
                variant="outline" 
                size="lg"
                className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white px-8 py-4 text-lg rounded-xl"
              >
                💬 Konsultasi Gratis di WhatsApp
              </Button>
            </div>
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