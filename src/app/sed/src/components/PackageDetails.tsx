import { Card } from './ui/card';
import { Check, Globe, Shield, Palette, Smartphone, Zap, Users, BarChart3 } from 'lucide-react';

export function PackageDetails() {
  const features = [
    {
      icon: Globe,
      title: 'Domain .my.id',
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
      title: 'Hosting Basic',
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
          <div className="w-24 h-24 mx-auto mb-6">
            <img 
              src="/logo/sed/sed logo.png" 
              alt="SED Logo" 
              width={96} 
              height={96}
              className="object-contain"
            />
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-6">Package <span className="text-[#0057FF]">Details</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dapatkan semua kebutuhan website profesional Anda dalam paket SED Base
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 border-gray-700/50 p-6 hover:transform hover:scale-105 transition-all duration-300"
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
      </div>
    </section>
  );
}