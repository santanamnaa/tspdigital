import { Card } from './ui/card';
import { X, Check, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6">
            <img 
              src="/logo/sed/sed logo.png" 
              alt="SED Logo" 
              width={80} 
              height={80}
              className="object-contain"
            />
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Cara Lama vs </span>
            <span className="text-[#0057FF]">Cara Baru</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sudah saatnya UMKM Indonesia meninggalkan cara lama yang ribet dan mahal
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Cara Lama */}
          <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-3xl text-red-400 mb-2">Cara Lama</h3>
              <p className="text-gray-400">Penuh Tantangan</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Harus cari developer freelance → komunikasi bisa terhambat',
                'Biaya tinggi untuk proyek satu halaman',
                'Domain & hosting perlu pengaturan sendiri',
                'Proses revisi bisa memakan waktu'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Arrow separator for desktop */}
          <div className="hidden lg:flex justify-center">
            <ArrowRight className="w-12 h-12 text-[#0057FF] animate-pulse" />
          </div>
          
          {/* Cara Baru */}
          <Card className="bg-gradient-to-br from-[#0057FF]/10 to-[#00FF88]/10 border-[#0057FF]/30 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#0057FF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#00FF88]" />
              </div>
              <h3 className="text-3xl text-[#0057FF] mb-2">Cara Baru SED</h3>
              <p className="text-gray-300">Solusi Praktis</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Paket terjangkau untuk website profesional',
                'Termasuk domain .my.id + hosting 1 tahun',
                'Integrasi WhatsApp untuk kemudahan komunikasi',
                'Proses revisi selama proyek berlangsung'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-[#0057FF] to-[#00FF88] p-1 rounded-2xl">
            <div className="bg-[#0C0C0C] px-8 py-4 rounded-xl">
              <p className="text-2xl">
                <span className="text-white">Potensi hemat biaya </span>
                <span className="text-[#FF5C00]">signifikan</span>
                <span className="text-white"> dibanding cara tradisional!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}