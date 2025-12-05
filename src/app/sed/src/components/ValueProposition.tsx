import { Card } from './ui/card';
import { DollarSign, Palette, Zap, Users, Shield, BarChart, Check } from 'lucide-react';

export function ValueProposition() {
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
          <h2 className="text-5xl lg:text-6xl text-white mb-6">Kenapa <span className="text-[#0057FF]">Pilih SED?</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solusi digitalisasi bisnis terbaik dengan harga terjangkau dan kualitas premium
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8">
            <div className="w-14 h-14 bg-[#00FF88]/10 rounded-lg flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-[#00FF88]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Harga Transparan</h3>
            <p className="text-gray-400 mb-4">Jelas & Terjangkau</p>
            <p className="text-gray-300 mb-4">Tidak ada biaya tersembunyi. Semua sudah disepakati di awal.</p>
            <ul className="space-y-2">
              {['Paket all-in-one', 'Tanpa biaya tersembunyi', 'Pembayaran sekali', 'Garansi dengan syarat & ketentuan'].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <Check className="w-4 h-4 text-[#00FF88] mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8">
            <div className="w-14 h-14 bg-[#0057FF]/10 rounded-lg flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-[#0057FF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Desain Profesional</h3>
            <p className="text-gray-400 mb-4">Modern & Terkini</p>
            <p className="text-gray-300 mb-4">Desain disesuaikan dengan brand Anda menggunakan template terbaik.</p>
            <ul className="space-y-2">
              {['Desain disesuaikan brand', 'Layout modern', 'UI/UX fokus', 'Terlihat profesional'].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <Check className="w-4 h-4 text-[#0057FF] mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8">
            <div className="w-14 h-14 bg-[#FF5C00]/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-[#FF5C00]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Proses Efisien</h3>
            <p className="text-gray-400 mb-4">Waktu Tepat</p>
            <p className="text-gray-300 mb-4">Proyek ditargetkan selesai dalam waktu sesuai kesepakatan (subjektif kompleksitas).</p>
            <ul className="space-y-2">
              {['Target waktu sesuai kesepakatan', 'Proses revisi selama proyek', 'Setup cepat', 'Support selama proyek'].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <Check className="w-4 h-4 text-[#FF5C00] mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}