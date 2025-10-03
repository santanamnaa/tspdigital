import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, Star, Zap } from 'lucide-react';

export const sedOffering = {
  base: {
    title: 'SED Base — Website Company Profile (1 halaman)',
    price: 500000, // IDR
    includes: [
      'Company Profile',
      'Contact Info',
      'Responsive Design',
      'Basic SEO',
      'Contact Form',
      'Google Maps',
      'Integrasi WhatsApp CTA'
    ],
    notes: ['2x revisi teks/gambar', 'Domain, hosting, SSL 1 tahun']
  },
  addons: [
    { key: 'extra_page', label: 'Halaman Tambahan', price: 100000, unit: 'per_page' },
    { key: 'gallery', label: 'Galeri/Portfolio Dinamis', price: 150000 },
    { key: 'analytics', label: 'Google Analytics & Search Console', price: 150000 },
    { key: 'copywriting', label: 'Copywriting Ringkas (≤300 kata)', price: 200000 },
    { key: 'logo', label: 'Logo Sederhana', price: 300000 },
    { key: 'social_kit', label: 'Social Media Kit (5 aset)', price: 350000 },
    { key: 'biz_email', label: 'Business Email (1 akun/tahun)', price: 200000, recurring: true },
    { key: 'lite_ecom', label: 'E-commerce Ringan (catalog + checkout link/WA)', price: 400000 },
    { key: 'booking', label: 'Online Booking Sederhana', price: 300000 },
    { key: 'i18n', label: 'Multibahasa (2 bahasa)', price: 300000 },
    { key: 'priority_support', label: 'Support Prioritas (7 hari)', price: 150000 }
  ]
};

export function PricingStructure() {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${price / 1000000}jt`;
    } else if (price >= 1000) {
      return `${price / 1000}rb`;
    } else {
      return price.toString();
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">SED Base </span>
            <span className="text-[#0057FF]">+ Add-ons</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mulai dengan paket dasar, lalu tambahkan fitur sesuai kebutuhan bisnis Anda.
          </p>
        </div>
        
        {/* Base Package */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="relative bg-gradient-to-br from-[#FF5C00]/10 to-[#FF5C00]/5 border-[#FF5C00]/30 p-8">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#FF5C00] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">Paket Dasar</span>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl text-white mb-2">{sedOffering.base.title}</h3>
              
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl text-[#FF5C00]">Rp {formatPrice(sedOffering.base.price)}</span>
                  <div className="text-left">
                    <div className="text-gray-400 line-through text-lg">Rp 1.5jt</div>
                    <div className="text-xs text-gray-500">sekali bayar</div>
                  </div>
                </div>
                <div className="inline-block bg-[#00FF88] text-black px-3 py-1 rounded-lg text-sm font-semibold">
                  Hemat 67%
                </div>
              </div>
              
              <p className="text-gray-300">Website company profile profesional untuk memulai digitalisasi bisnis Anda</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {sedOffering.base.includes.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <p className="text-gray-500 text-sm mb-2">Termasuk:</p>
                {sedOffering.base.notes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF5C00] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">{note}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-[#FF5C00] hover:bg-[#e54e00] text-white transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Pilih Paket Dasar
            </Button>
          </Card>
        </div>
        
        {/* Add-ons Section */}
        <div className="mb-16">
          <h3 className="text-4xl text-white text-center mb-12">
            <span className="text-[#0057FF]">Tambahkan</span> Fitur Sesuai Kebutuhan
          </h3>
          
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sedOffering.addons.map((addon, index) => (
                <div key={addon.key} className="text-center p-3 hover:bg-gray-800/30 rounded-lg transition-all duration-300">
                  <h4 className="text-sm text-white mb-1">{addon.label}</h4>
                  <div className="text-lg text-[#0057FF] mb-1">
                    {addon.price === 0 ? (
                      <span className="text-[#00FF88]">GRATIS</span>
                    ) : (
                      `Rp ${formatPrice(addon.price)}`
                    )}
                  </div>
                  {addon.unit && (
                    <span className="text-xs text-gray-400">{addon.unit}</span>
                  )}
                  {addon.recurring && (
                    <span className="text-xs text-gray-400">/tahun</span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Guarantee Section */}
        <Card className="bg-gradient-to-r from-[#FF5C00]/10 via-[#0057FF]/10 to-[#00FF88]/10 border-[#0057FF]/30 p-8 text-center">
          <h3 className="text-4xl text-white mb-6">💎 Keunggulan SED</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Paket dasar yang terjangkau dengan fleksibilitas penuh untuk menyesuaikan dengan kebutuhan bisnis Anda.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Harga Terjangkau',
                description: 'Mulai dari Rp 500rb dengan fitur lengkap',
                icon: '💰',
                color: 'text-[#FF5C00]'
              },
              {
                title: 'Fleksibilitas Tinggi',
                description: 'Tambahkan fitur sesuai kebutuhan bisnis',
                icon: '🔧',
                color: 'text-[#0057FF]'
              },
              {
                title: 'Support Berkualitas',
                description: 'Bantuan teknis dan revisi sesuai kebutuhan',
                icon: '🎯',
                color: 'text-[#00FF88]'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className={`text-xl ${feature.color} mb-2`}>{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-[#FF5C00]/5 to-[#00FF88]/5 rounded-xl border border-[#0057FF]/20">
            <h4 className="text-2xl text-white mb-3">🎯 Mengapa Memilih SED Base + Add-ons?</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FF5C00]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FF5C00] font-bold">✓</span>
                </div>
                <span className="text-gray-300">Investasi sesuai budget</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0057FF]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#0057FF] font-bold">✓</span>
                </div>
                <span className="text-gray-300">Upgrade sewaktu-waktu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00FF88]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#00FF88] font-bold">✓</span>
                </div>
                <span className="text-gray-300">Tidak ada fitur yang tidak terpakai</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FF5C00]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FF5C00] font-bold">✓</span>
                </div>
                <span className="text-gray-300">ROI maksimal dari investasi</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}