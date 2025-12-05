import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-3xl text-white mb-6">Tentang Kami</h3>
          
          <div className="max-w-3xl mx-auto">
            <h4 className="text-2xl text-[#0057FF] mb-4">SED by TSP Digital</h4>
            <p className="text-gray-300 text-lg mb-6">
              Solusi website profesional dan terjangkau untuk UMKM & startup Indonesia.
              Kami fokus membantu bisnis go digital dengan layanan modular, cepat, dan transparan.
            </p>
            
            <div className="flex flex-col items-center gap-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#0057FF]" />
                <span>📧 tspdigital.id@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0057FF]" />
                <span>📱 +62 851-2119-0261</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800">
          <div className="text-gray-400">
            © 2025 TSP Digital Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}