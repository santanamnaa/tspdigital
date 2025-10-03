import { Card } from './ui/card';
import { DollarSign, Palette, Zap, Users, Shield, BarChart } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: DollarSign,
      title: 'Harga Transparan',
      subtitle: 'Jelas & Terjangkau',
      description: 'Tidak ada biaya tersembunyi. Semua sudah disepakati di awal.',
      features: ['Paket all-in-one', 'Tanpa biaya tersembunyi', 'Pembayaran sekali', 'Garansi dengan syarat & ketentuan'],
      color: 'text-[#00FF88]',
      gradient: 'from-[#00FF88]/10 to-[#00FF88]/5'
    },
    {
      icon: Palette,
      title: 'Desain Profesional',
      subtitle: 'Modern & Terkini',
      description: 'Desain disesuaikan dengan brand Anda menggunakan template terbaik.',
      features: ['Desain disesuaikan brand', 'Layout modern', 'UI/UX fokus', 'Terlihat profesional'],
      color: 'text-[#0057FF]',
      gradient: 'from-[#0057FF]/10 to-[#0057FF]/5'
    },
    {
      icon: Zap,
      title: 'Proses Efisien',
      subtitle: 'Waktu Tepat',
      description: 'Proyek ditargetkan selesai dalam waktu sesuai kesepakatan (subjektif kompleksitas).',
      features: ['Target waktu sesuai kesepakatan', 'Proses revisi selama proyek', 'Setup cepat', 'Support selama proyek'],
      color: 'text-[#FF5C00]',
      gradient: 'from-[#FF5C00]/10 to-[#FF5C00]/5'
    }
  ];

  const additionalBenefits = [
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Tim dengan pengalaman dalam pembuatan website'
    },
    {
      icon: Shield,
      title: 'Dukungan & Bantuan',
      description: 'Dukungan bantuan teknis (tergantung syarat & ketentuan)'
    },
    {
      icon: BarChart,
      title: 'SEO Siap',
      description: 'Website dirancang dengan prinsip optimasi mesin pencari'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Mengapa Pilih </span>
            <span className="text-[#0057FF]">SED?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            3 alasan utama kenapa pengusaha memilih solusi kami
          </p>
        </div>
        
        {/* Main Value Props */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${value.gradient} border-gray-700/50 p-8 hover:border-[#0057FF]/50 transition-all duration-300 hover:scale-105`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className={`w-10 h-10 ${value.color}`} />
                </div>
                <h3 className="text-3xl text-white mb-2">{value.title}</h3>
                <p className={`text-lg ${value.color}`}>{value.subtitle}</p>
              </div>
              
              <p className="text-gray-300 text-center mb-6">{value.description}</p>
              
              <div className="space-y-3">
                {value.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${value.color.replace('text-', 'bg-')}`}></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {additionalBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/30 border-gray-700/50 p-6 text-center hover:border-[#0057FF]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#0057FF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-[#0057FF]" />
              </div>
              <h4 className="text-xl text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Comparison Table */}
        <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700/50 p-8">
          <h3 className="text-3xl text-center text-white mb-8">Perbandingan Solusi</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-400">Fitur</th>
                  <th className="text-center py-4 px-6 text-[#0057FF]">SED</th>
                  <th className="text-center py-4 px-6 text-gray-400">Freelancer</th>
                  <th className="text-center py-4 px-6 text-gray-400">Agency</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  ['Harga', 'Rp 500rb', 'Rp 2-5jt', 'Rp 10-50jt'],
                  ['Waktu Pengerjaan', 'Tergantung*', '2-4 minggu', '1-3 bulan'],
                  ['Dukungan', 'Terbatas*', 'Terbatas', 'Berbayar'],
                  ['Revisi', 'Selama proyek*', 'Terbatas', 'Berbayar'],
                  ['SEO Siap', '✅', '❓', '✅']
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4 px-6 text-white">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-[#00FF88]">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-gray-400">{row[2]}</td>
                    <td className="py-4 px-6 text-center text-gray-400">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-center text-sm mt-4">*Subjektif berdasarkan kompleksitas proyek dan ketersediaan materi dari klien</p>
        </Card>
      </div>
    </section>
  );
}