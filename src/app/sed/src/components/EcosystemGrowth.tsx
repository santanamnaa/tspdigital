import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Building,
  Layers,
  TrendingUp,
  Check
} from 'lucide-react';

type Step = {
  step: string;
  title: ReactNode;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string;      // e.g. "text-[#FF5C00]"
  bgColor: string;    // e.g. "bg-[#FF5C00]/10"
  borderColor: string;// e.g. "border-[#FF5C00]/30"
};

export function EcosystemGrowth() {
  const ecosystemSteps: Step[] = [
    {
      step: '01',
      title: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img
              src="/logo/sed/sed logo.png"
              alt="SED Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span>SED by TSP Digital</span>
        </div>
      ),
      subtitle: 'Starting Point',
      price: 'Rp 500rb',
      description:
        'Website company profile profesional untuk memulai digitalisasi bisnis Anda',
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
      description:
        'Solusi sistem menengah untuk bisnis berkembang dengan workflow digital',
      features: ['HR & Attendance System', 'Project Tracking', 'Dashboard Analytics', 'Custom Modules'],
      icon: Layers,
      color: 'text-[#0057FF]',
      bgColor: 'bg-[#0057FF]/10',
      borderColor: 'border-[#0057FF]/30'
    },
    {
      step: '03',
      title: 'Enterprise Solution - TSP Digital',
      subtitle: 'Established Business',
      price: 'Rp 10jt++',
      description:
        'Platform custom untuk kebutuhan bisnis skala besar & integration',
      features: ['Custom Development', 'Full Integration', 'Dedicated Support', 'Training & Documentation'],
      icon: Building,
      color: 'text-[#00FF88]',
      bgColor: 'bg-[#00FF88]/10',
      borderColor: 'border-[#00FF88]/30'
    }
  ];



  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Ekosistem </span>
            <span className="text-[#0057FF]">TSP Digital</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solusi untuk setiap tahap pertumbuhan bisnis Anda
          </p>
        </div>

        {/* TSP Digital Agency Solutions (vertical timeline) */}
        <div className="mb-16">
          <h3 className="text-3xl text-center text-white mb-8">TSP Digital Agency</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF5C00] via-[#0057FF] to-[#00FF88]" />
            <div className="space-y-12 pl-16">
              {ecosystemSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#0057FF] flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>

                  <Card className={`${step.bgColor} ${step.borderColor} border`}>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${step.bgColor}`}>
                          <step.icon className={`w-8 h-8 ${step.color}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                          <p className="text-[#0057FF] mb-3">{step.subtitle}</p>
                          <p className="text-xl text-[#FF5C00] font-bold mb-4">{step.price}</p>
                          <p className="text-gray-300 mb-6">{step.description}</p>

                          <ul className="space-y-2">
                            {step.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <Check className="w-5 h-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Journey strip (horizontal) */}
        <div className="hidden lg:block my-16">
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF5C00] via-[#0057FF] to-[#00FF88] opacity-30" />
            <div className="grid lg:grid-cols-3 gap-8">
              {ecosystemSteps.map((step, index) => (
                <div key={`grid-${index}`} className="relative">
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
                          {/* convert text-… to bg-… safely */}
                          <div className="w-2 h-2 rounded-full bg-[#00FF88]" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {index < ecosystemSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-[#0057FF] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
