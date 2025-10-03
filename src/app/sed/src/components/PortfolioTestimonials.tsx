import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function PortfolioTestimonials() {
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  
  const portfolios = [
    {
      title: 'Warung Nusantara',
      category: 'F&B Restaurant',
      description: 'Website untuk restoran tradisional dengan menu online dan sistem informasi',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTk0MDQ3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'warungnusantara.com'
    },
    {
      title: 'Aurora Beauty Clinic',
      category: 'Beauty & Salon',
      description: 'Platform informasi untuk klinik kecantikan dengan portfolio treatment',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzU5NDA0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'aurorabeauty.id'
    },
    {
      title: 'Fashion Trend',
      category: 'Fashion Retail',
      description: 'Toko online fashion dengan katalog produk dan sistem informasi pelanggan',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzU5NDA0NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'fashiontrend.co.id'
    },
    {
      title: 'Tech Solutions',
      category: 'Service Business',
      description: 'Website company profile untuk perusahaan teknologi dengan portfolio',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWdlbmN5fGVufDF8fHx8MTc1OTQwNDcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'techsolutions.id'
    }
  ];

  const testimonials = [
    {
      name: 'Siti Aminah',
      business: 'Warung Nusantara',
      role: 'Pemilik Usaha',
      content: 'Website dari TSP Digital Agency membantu bisnis saya lebih dikenal pelanggan. Kini informasi menu dan kontak lebih mudah diakses, dan tampilan lebih profesional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTQwNDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Budi Santoso',
      business: 'Fashion Trend',
      role: 'Entrepreneur',
      content: 'Layanan dari TSP Digital Agency sangat memuaskan! Desain website elegan dan modern, proses pembuatan cepat, serta harga terjangkau. Cocok untuk UMKM seperti saya.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTk0MDQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Maya Sari',
      business: 'Aurora Beauty Clinic',
      role: 'Beauty Entrepreneur',
      content: 'Tim TSP Digital Agency sangat profesional dan responsif. Website membantu meningkatkan citra bisnis saya, dan kini lebih mudah ditemukan pelanggan potensial.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NTk0MDQ3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const nextPortfolio = () => {
    setCurrentPortfolio((prev) => (prev + 1) % portfolios.length);
  };

  const prevPortfolio = () => {
    setCurrentPortfolio((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  return (
    <section className="py-20 px-6 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Portfolio Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl mb-6">
              <span className="text-white">Portfolio </span>
              <span className="text-[#0057FF]">Website Kami</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contoh website yang telah kami bantu untuk berbagai jenis bisnis UMKM
            </p>
          </div>
          
          <div className="relative">
            {/* Portfolio Carousel */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-96">
                  <ImageWithFallback
                    src={portfolios[currentPortfolio].image}
                    alt={portfolios[currentPortfolio].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden"></div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block bg-[#0057FF] text-white px-4 py-2 rounded-lg text-sm mb-4">
                      {portfolios[currentPortfolio].category}
                    </span>
                    <h3 className="text-4xl text-white mb-4">{portfolios[currentPortfolio].title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{portfolios[currentPortfolio].description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-[#0057FF]">🌐 {portfolios[currentPortfolio].url}</span>
                      <Button variant="outline" size="sm" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white">
                        Lihat Website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPortfolio}
                  className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border border-gray-600"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPortfolio}
                  className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border border-gray-600"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
            
            {/* Portfolio Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {portfolios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPortfolio(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPortfolio ? 'bg-[#0057FF]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl mb-6">
              <span className="text-white">Kata </span>
              <span className="text-[#0057FF]">Klien Kami</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pengalaman pelanggan setelah menggunakan jasa dari TSP Digital Agency
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 hover:border-[#0057FF]/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#0057FF] mb-4" />
                  <p className="text-gray-300 text-lg leading-relaxed">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-[#0057FF] text-sm">{testimonial.business}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}