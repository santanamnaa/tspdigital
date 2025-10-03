import { Card } from './ui/card';
import { Check, Globe, Shield, Palette, Smartphone, Zap, Users, BarChart3 } from 'lucide-react';

export function PackageDetails() {
  const features = [
    {
      icon: Globe,
      title: 'Domain .com',
      description: 'Domain profesional untuk 1 tahun',
      color: 'text-[#0057FF]'
    },
    {
      icon: Shield,
      title: 'SSL Certificate',
      description: 'Keamanan website terjamin dengan SSL',
      color: 'text-[#00FF88]'
    },
    {
      icon: Zap,
      title: 'Hosting Premium',
      description: 'Server dengan uptime tinggi',
      color: 'text-[#FF5C00]'
    },
    {
      icon: Palette,
      title: 'Desain Custom',
      description: 'Desain unik sesuai brand bisnis Anda',
      color: 'text-[#0057FF]'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Tampil optimal di semua perangkat',
      color: 'text-[#00FF88]'
    },
    {
      icon: BarChart3,
      title: 'SEO Ready',
      description: 'Optimasi dasar untuk mesin pencari',
      color: 'text-[#FF5C00]'
    },
    {
      icon: Users,
      title: 'Bantuan Teknis',
      description: 'Tim bantuan siap membantu sesuai jam kerja',
      color: 'text-[#0057FF]'
    },
    {
      icon: Zap,
      title: 'Loading Cepat',
      description: 'Website dirancang untuk kecepatan akses',
      color: 'text-[#00FF88]'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5C00] text-white px-6 py-3 rounded-lg mb-6">
            <span className="text-lg uppercase tracking-wide">Paket 500rb</span>
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Apa Aja Yang </span>
            <span className="text-[#0057FF]">Kamu Dapat?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Semua ini kamu dapat dengan harga yang sangat terjangkau
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-6 hover:border-[#0057FF]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bonus Section */}
        <Card className="bg-gradient-to-r from-[#0057FF]/10 to-[#FF5C00]/10 border-[#0057FF]/30 p-8">
          <div className="text-center mb-8">
            <h3 className="text-4xl text-[#FF5C00] mb-4">🎁 BONUS EKSKLUSIF</h3>
            <p className="text-xl text-gray-300">Khusus untuk pelanggan terpilih!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Logo Design',
                description: 'Logo untuk brand Anda',
                value: 'Nilai tambahan'
              },
              {
                title: 'Social Media Kit',
                description: 'Template post untuk media sosial',
                value: 'Nilai tambahan'
              },
              {
                title: 'Business Email',
                description: 'Email profesional @namabisnis.com',
                value: 'Nilai tambahan'
              }
            ].map((bonus, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 rounded-xl">
                <Check className="w-8 h-8 text-[#00FF88] mx-auto mb-3" />
                <h4 className="text-xl text-white mb-2">{bonus.title}</h4>
                <p className="text-gray-400 mb-3">{bonus.description}</p>
                <span className="inline-block bg-[#FF5C00] text-white px-3 py-1 rounded-lg text-sm">
                  {bonus.value}
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-block bg-gradient-to-r from-[#FF5C00] to-[#0057FF] p-1 rounded-2xl">
              <div className="bg-[#0C0C0C] px-8 py-4 rounded-xl">
                <p className="text-2xl">
                  <span className="text-white">Nilai Tambahan: </span>
                  <span className="text-[#FF5C00] ml-4">Paket terjangkau dengan fitur komplit!</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}