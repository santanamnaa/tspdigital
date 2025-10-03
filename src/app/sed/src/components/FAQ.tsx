import { useState } from 'react';
import { Card } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apa yang termasuk dalam paket Rp 500rb?',
      answer: 'Paket Rp 500rb mencakup domain .com selama 1 tahun, hosting, SSL certificate, desain disesuaikan brand, dan bonus logo design + social media kit. Semua sudah disepakati di awal tanpa biaya tersembunyi.'
    },
    {
      question: 'Berapa lama waktu pengerjaan website?',
      answer: 'Target waktu pengerjaan disesuaikan dengan kesepakatan awal, tergantung kompleksitas proyek dan ketersediaan materi dari klien. Umumnya dalam rentang beberapa hari kerja setelah semua bahan diterima.'
    },
    {
      question: 'Apakah ada revisi jika hasil tidak sesuai?',
      answer: 'Proses revisi akan dilakukan selama proyek berlangsung sesuai dengan kesepakatan awal dan ketersediaan materi dari klien. Setiap proyek memiliki batas revisi yang masuk akal.'
    },
    {
      question: 'Bagaimana dengan bantuan setelah selesai?',
      answer: 'Kami menyediakan bantuan teknis selama periode tertentu sesuai dengan paket yang dipilih, dengan syarat dan ketentuan berlaku. Bantuan meliputi permasalahan teknis dasar.'
    },
    {
      question: 'Apakah website bisa diakses di semua perangkat?',
      answer: 'Ya, semua website yang kami buat dirancang dengan pendekatan responsive, sehingga dapat diakses dengan baik di berbagai perangkat (desktop, tablet, dan mobile).'
    },
    {
      question: 'Apa saja yang perlu disiapkan untuk memulai?',
      answer: 'Anda cukup siapkan: (1) Nama domain yang diinginkan, (2) Logo atau nama bisnis, (3) Konten/teks untuk website, (4) Foto-foto produk/bisnis, (5) Contoh tampilan yang Anda suka (opsional).'
    },
    {
      question: 'Apakah ada biaya perpanjangan domain dan hosting setelah tahun pertama?',
      answer: 'Domain dan hosting berlaku selama 1 tahun pertama. Untuk perpanjangan tahun berikutnya, biaya disesuaikan dengan harga pasar saat itu, dengan pemberitahuan sebelumnya kepada klien.'
    },
    {
      question: 'Bisakah website dikembangkan menjadi toko online?',
      answer: 'Ya, website dapat dikembangkan lebih lanjut menjadi toko online atau fitur e-commerce, tergantung kebutuhan dan kesepakatan lebih lanjut.'
    },
    {
      question: 'Apakah website sudah dioptimasi untuk mesin pencari?',
      answer: 'Website dirancang dengan prinsip-prinsip dasar optimasi mesin pencari seperti struktur yang terorganisir, kecepatan akses, dan komponen teknis lainnya. Hasil pencarian tetap bergantung pada algoritma mesin pencari.'
    },
    {
      question: 'Apakah bisa upgrade ke paket lain setelah pemesanan?',
      answer: 'Ya, Anda bisa upgrade ke paket lain dengan syarat dan ketentuan tertentu. Kami akan membantu proses migrasi sesuai kebutuhan bisnis Anda.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6">
            <span className="text-white">Frequently </span>
            <span className="text-[#0057FF]">Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Pertanyaan yang sering ditanyakan oleh calon klien kami
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
              >
                <h3 className="text-xl text-white pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#0057FF]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        {/* Still Have Questions */}
        <Card className="mt-12 bg-gradient-to-r from-[#0057FF]/10 to-[#FF5C00]/10 border-[#0057FF]/30 p-8 text-center">
          <h3 className="text-3xl text-white mb-4">Masih Ada Pertanyaan?</h3>
          <p className="text-gray-300 mb-6">
            Tim customer service kami siap membantu Anda selama jam kerja
          </p>
        
          
          <div className="flex justify-center">
            <a 
              href="https://wa.me/6285121190261?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20SED%20Base.%20Bisa%20info%20lebih%20detail%20tentang%20fitur-fitur%20yang%20tersedia%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-lg transition-colors text-lg font-semibold"
            >
              <span className="mr-3 text-2xl">💬</span>
              Chat WhatsApp
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}