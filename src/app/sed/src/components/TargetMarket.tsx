import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee, Scissors, ShoppingBag, Users } from 'lucide-react';

export function TargetMarket() {
  const targets = [
    {
      icon: Coffee,
      title: 'F&B Business',
      description: 'Cafe, restaurant, katering, minuman',
      examples: ['Menu online', 'Sistem informasi', 'Gallery makanan', 'Info kontak & lokasi'],
      image: 'https://images.unsplash.com/photo-1594402918464-2d7bb2e97292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBjYWZlfGVufDF8fHx8MTc1OTQwNDY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: Scissors,
      title: 'Beauty & Salon',
      description: 'Salon, barbershop, spa, klinik kecantikan',
      examples: ['Informasi layanan', 'Portfolio treatment', 'Daftar harga', 'Testimoni pelanggan'],
      image: 'https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc1OTM0NjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-pink-500/20 to-purple-500/20'
    },
    {
      icon: ShoppingBag,
      title: 'Fashion & Retail',
      description: 'Butik, online shop, aksesoris',
      examples: ['Katalog produk', 'Sistem informasi', 'Tabel ukuran', 'Integrasi WhatsApp'],
      image: 'https://images.unsplash.com/photo-1759299983432-e0097fad9b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBzaG9wfGVufDF8fHx8MTc1OTQwNDY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Users,
      title: 'Jasa & Service',
      description: 'Konsultan, freelancer, agency',
      examples: ['Portfolio layanan', 'Testimoni klien', 'Form kontak', 'Tentang perusahaan'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NDA0Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Apakah Ini </span>
            <span className="text-[#0057FF]">Untuk Bisnismu?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solusi digital untuk UMKM Indonesia yang ingin tampil profesional online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((target, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${target.gradient} border-gray-700/50 overflow-hidden hover:scale-105 transition-all duration-300 hover:border-[#0057FF]/50`}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={target.image}
                  alt={target.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <target.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl text-white mb-2">{target.title}</h3>
                  <p className="text-gray-300">{target.description}</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Fitur Tersedia:</p>
                  <ul className="space-y-1">
                    {target.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0057FF] rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-to-r from-[#0057FF]/10 to-[#FF5C00]/10 border-[#0057FF]/30 p-8">
            <h3 className="text-3xl text-white mb-4">Bisnis Lain Juga Bisa!</h3>
            <p className="text-xl text-gray-300 mb-6">
              Apapun bisnisnya, ada solusinya dari TSP Digital Agency
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Photography', 'Event Organizer', 'Travel Agent', 'Fitness Trainer',
                'Music Teacher', 'Pet Shop', 'Laundry', 'Auto Repair'
              ].map((business, index) => (
                <span 
                  key={index}
                  className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-lg text-sm"
                >
                  {business}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}