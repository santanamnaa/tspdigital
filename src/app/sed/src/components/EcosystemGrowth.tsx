import { Card } from './ui/card';
import { ArrowRight, Globe, ShoppingCart, Building, Layers, TrendingUp } from 'lucide-react';

export function EcosystemGrowth() {
  const ecosystemSteps = [
    {
      step: '01',
      title: 'SED by TSP Digital',
      subtitle: 'Starting Point',
      price: 'Rp 500rb',
      description: 'Website company profile profesional untuk memulai digitalisasi bisnis Anda',
      features: ['Company Profile', 'Contact Info', 'Portfolio/Gallery', 'Basic SEO'],
      icon: Globe,
      color: 'text-[#FF5C00]',
      bgColor: 'bg-[#FF5C00]/10',
      borderColor: 'border-[#FF5C00]/30'
    },
    {
      step: '02',
      title: 'Professional Packages - TSP Digital',
      subtitle: 'Growing Business',
      price: 'Rp 5-10jt',
      description: 'Solusi sistem menengah untuk bisnis berkembang dengan workflow digital',
      features: ['HR & Attendance System', 'Project Tracking', 'Dashboard Analytics', 'Custom Modules'],
      icon: Layers,
      color: 'text-[#0057FF]',
      bgColor: 'bg-[#0057FF]/10',
      borderColor: 'border-[#0057FF]/30'
    },
    {
      step: '03',
      title: 'Enterprise Solution - TSP Digital',
      subtitle: 'Custom Development',
      price: 'Custom',
      description: 'Solusi enterprise dengan custom development sesuai kebutuhan spesifik bisnis',
      features: ['Custom Development', 'API Integration', 'Cloud Infrastructure', 'Dedicated Support'],
      icon: TrendingUp,
      color: 'text-[#00FF88]',
      bgColor: 'bg-[#00FF88]/10',
      borderColor: 'border-[#00FF88]/30'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Ekosistem </span>
            <span className="text-[#0057FF]">TSP Digital Agency</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Solusi bertahap untuk membantu bisnis Anda tumbuh secara digital. 
            Kami menyediakan berbagai pilihan solusi dari yang sederhana hingga lengkap.
          </p>
        </div>
        
        {/* Growth Path Visualization */}
        <div className="relative mb-16">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF5C00] via-[#0057FF] to-[#00FF88] opacity-30"></div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {ecosystemSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`${step.bgColor} ${step.borderColor} border-2 p-6 h-full hover:scale-105 transition-all duration-300`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${step.borderColor}`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className={`text-sm ${step.color} mb-2`}>{step.step}</div>
                    <h3 className="text-2xl text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.subtitle}</p>
                    <div className={`inline-block ${step.color} mt-2 px-3 py-1 rounded-lg bg-gray-800/50`}>
                      {step.price}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-6">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Arrow for desktop */}
                {index < ecosystemSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-[#0057FF] rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Success Story */}
        <Card className="bg-gradient-to-r from-[#FF5C00]/10 via-[#0057FF]/10 to-[#00FF88]/10 border-[#0057FF]/30 p-8">
          <div className="text-center">
            <h3 className="text-4xl text-white mb-6">
              🚀 <span className="text-[#FF5C00]">Journey</span> Pertumbuhan <span className="text-[#00FF88]">Digital</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Lihat bagaimana klien kami berkembang dari tahap awal hingga solusi enterprise lengkap. 
              Setiap langkah membawa bisnis mereka ke level yang lebih tinggi.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Restoran Modern',
                  step: 'Step 1 → 2',
                  before: 'Website company profile sederhana',
                  after: 'Sistem manajemen pesanan & inventory',
                  growth: '+150% efisiensi operasional',
                  color: 'text-[#FF5C00]'
                },
                {
                  name: 'Klinik Kecantikan',
                  step: 'Step 2 → 3',
                  before: 'Sistem booking & customer management',
                  after: 'Platform enterprise dengan AI analytics',
                  growth: '+300% customer retention',
                  color: 'text-[#0057FF]'
                },
                {
                  name: 'E-commerce Fashion',
                  step: 'Step 1 → 3',
                  before: 'Portfolio online sederhana',
                  after: 'Marketplace terintegrasi dengan ERP',
                  growth: '+500% revenue growth',
                  color: 'text-[#00FF88]'
                }
              ].map((story, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg text-white">{story.name}</h4>
                    <span className={`text-xs ${story.color} bg-gray-800/50 px-2 py-1 rounded`}>
                      {story.step}
                    </span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FF5C00] mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">{story.before}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#0057FF]" />
                      <span className="text-gray-300 font-medium">{story.after}</span>
                    </div>
                    <div className={`${story.color} mt-3 font-semibold bg-gray-800/30 px-3 py-2 rounded-lg`}>
                      {story.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-[#FF5C00]/5 to-[#00FF88]/5 rounded-xl border border-[#0057FF]/20">
              <h4 className="text-2xl text-white mb-3">💡 Mengapa Memilih Journey Bertahap?</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF5C00]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#FF5C00] font-bold">1</span>
                  </div>
                  <span className="text-gray-300">Investasi sesuai kemampuan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0057FF]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#0057FF] font-bold">2</span>
                  </div>
                  <span className="text-gray-300">Skalabilitas yang terukur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00FF88]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#00FF88] font-bold">3</span>
                  </div>
                  <span className="text-gray-300">ROI yang maksimal</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}