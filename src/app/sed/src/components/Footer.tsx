import { Card } from './ui/card';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-4xl text-white mb-4">
                🌐 Tentang Kami
              </h3>
              <h4 className="text-2xl text-[#0057FF] mb-4">
                TSP Digital Agency
              </h4>
              <p className="text-gray-300 text-lg max-w-md">
                Membantu UMKM & Startup Indonesia Go Digital dengan solusi website modular, profesional, dan scalable.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0057FF]" />
                <span className="text-gray-300">📧 tspdigital.id@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0057FF]" />
                <span className="text-gray-300">📱 +62 851-2119-0261</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#0057FF]" />
                <span className="text-gray-300">📍 Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl text-white mb-6">Layanan Kami:</h4>
            <ul className="space-y-3">
              {[
                'SED (Entry-level Website)',
                'Enterprise Solutions (Custom Dev)',
                'Logo & Branding Kit',
                'SEO Optimization',
                'Website Maintenance'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#0057FF] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl text-white mb-6">Quick Links:</h4>
            <ul className="space-y-3">
              {[
                'Tentang Kami',
                'Portfolio',
                'Blog',
                'FAQ',
                'Kontak',
                'Kebijakan Privasi'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#0057FF] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media & Newsletter */}
        <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl text-white mb-4">Follow Kami</h4>
              <p className="text-gray-300 mb-6">
                → Tips & update terbaru seputar digitalisasi UMKM
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { icon: Youtube, href: '#', color: 'hover:text-red-400' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-400' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-colors`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl text-white mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                → Subscribe untuk promo & insight bisnis
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#0057FF] focus:outline-none"
                />
                <button className="bg-[#0057FF] hover:bg-[#0046cc] text-white px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <div className="text-gray-400">
            © 2025 TSP Digital Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}