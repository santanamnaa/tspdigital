import { useState } from 'react';
import { Card } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = { question: string; answer: string };

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Apa yang termasuk dalam harga Rp 500rb (SED Base)?',
      answer:
        'SED Base mencakup 1 halaman company profile, domain .my.id (1 tahun), hosting basic (1 tahun), SSL certificate, responsive design, Basic SEO, Contact Form, dan Google Maps. Semua transparan—tanpa biaya tersembunyi.'
    },
    {
      question: 'Berapa lama waktu pengerjaan website?',
      answer:
        'Target waktu disepakati di awal dan bergantung pada kompleksitas serta kelengkapan materi dari klien. Umumnya beberapa hari kerja setelah semua bahan diterima.'
    },
    {
      question: 'Apakah ada revisi jika hasil tidak sesuai?',
      answer:
        'Revisi dilakukan selama proyek berlangsung sesuai kesepakatan awal dengan batas revisi yang wajar (mis. 1x revisi teks/gambar untuk Base). Add-ons tertentu dapat menambah ruang revisi.'
    },
    {
      question: 'Bagaimana dengan bantuan setelah selesai?',
      answer:
        'Termasuk bantuan teknis dasar pasca-launch dalam periode terbatas. Untuk kebutuhan lanjutan, tersedia add-on Maintenance/Support Prioritas.'
    },
    {
      question: 'Apakah website bisa diakses di semua perangkat?',
      answer:
        'Ya. Kami menggunakan pendekatan responsive agar tampil baik di desktop, tablet, dan mobile.'
    },
    {
      question: 'Apakah saya bisa kustomisasi sesuai kebutuhan bisnis saya?',
      answer:
        'Bisa. Model SED adalah Base + Add-ons. Kamu tinggal pilih fitur tambahan (mis. galeri dinamis, analytics, logo, multibahasa, dsb.).'
    },
    {
      question: 'Apa saja yang perlu disiapkan untuk memulai?',
      answer:
        'Siapkan: (1) Nama domain yang diinginkan, (2) Logo/nama bisnis, (3) Konten/teks, (4) Foto produk/usaha, (5) Contoh referensi desain (opsional).'
    },
    {
      question: 'Apakah ada biaya perpanjangan domain dan hosting setelah tahun pertama?',
      answer:
        'Ya, perpanjangan mengikuti harga pasar/vendor pada tahun berikutnya. Kami memberi pemberitahuan sebelum masa berlaku habis.'
    },
    {
      question: 'Bisakah website dikembangkan menjadi toko online?',
      answer:
        'Bisa. Website dapat ditingkatkan menjadi e-commerce ringan (katalog + checkout link/WhatsApp) atau integrasi lebih lanjut sesuai kebutuhan sebagai add-on.'
    },
    {
      question: 'Apakah website sudah dioptimasi untuk mesin pencari?',
      answer:
        'Termasuk Basic SEO (struktur semantik, metadata dasar, kecepatan dasar). Hasil ranking tetap dipengaruhi faktor eksternal; layanan SEO lanjutan bisa ditambahkan sebagai add-on.'
    },
    {
      question: 'Apakah bisa menambah add-ons setelah pemesanan?',
      answer:
        'Bisa. Kamu dapat menambahkan add-ons kapan saja; kami bantu estimasi & penjadwalan implementasinya.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6">
            <img
              src="/logo/sed/sed logo.png"
              alt="Logo SED"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-6">
            Pertanyaan <span className="text-[#0057FF]">Umum</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Temukan jawaban terkait layanan SED Website — model Base + Add-ons yang transparan dan fleksibel.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <Card
                key={index}
                className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700/50 overflow-hidden"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-xl font-medium text-white">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#0057FF]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#0057FF]" />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-2 border-t border-gray-700/50"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
