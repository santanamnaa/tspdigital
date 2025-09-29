"use client";
import React, { useState } from "react";
import { Check, ArrowRight, Clock, FileText, Users, Smartphone, Star, ChevronDown, Minus } from "lucide-react";
import Image from "next/image";

export default function SEDContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Halo! Saya tertarik dengan ${packageName} dari Strategi Era Digital. Bisa minta informasi lebih detail?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative w-full bg-white dark:bg-gray-950">
      {/* Simplified Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo/sed/logo_sed.svg" 
                alt="SED Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-gray-900 dark:text-white">SED</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/sed" className="text-[#363636] text-sm font-medium">
                Home
              </a>
              <a href="/sed/pricing" className="text-gray-600 dark:text-gray-300 hover:text-[#363636] transition-colors text-sm font-medium">
                Paket
              </a>
              <a href="/sed/order" className="text-gray-600 dark:text-gray-300 hover:text-[#363636] transition-colors text-sm font-medium">
                Pesan
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></div>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a href="/sed" className="block py-2 text-[#363636] text-sm">Home</a>
              <a href="/sed/pricing" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Paket</a>
              <a href="/sed/order" className="block py-2 text-gray-600 dark:text-gray-300 text-sm">Pesan</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 dark:text-white">
            Landing Page Profesional, Selesai 3 Hari. Fixed Price Rp500.000.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Solusi cepat untuk UKM & profesional yang ingin tampil online dengan budget minim.
          </p>
          <button 
            onClick={() => handleWhatsAppClick("Landing Page 500K Offer")}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 mx-auto">
            Chat Kami di WhatsApp
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Section 1 – Masalah & Solusi */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 dark:text-white">
                Belum punya website?
                <br />
                Susah dipercaya pelanggan?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5"></div>
                  <p className="text-gray-600 dark:text-gray-400">Calon pelanggan tidak percaya karena tidak ada kehadiran online</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5"></div>
                  <p className="text-gray-600 dark:text-gray-400">Kehilangan peluang karena tidak muncul di pencarian online</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5"></div>
                  <p className="text-gray-600 dark:text-gray-400">Bisnis terlihat tidak profesional dibanding kompetitor</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Solusi:</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Landing page simple tapi powerful, 100% mobile-ready. Tampilan profesional yang membuat pelanggan percaya dan mudah ditemukan di Google.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Mobile-friendly design</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-2">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Optimized for Google search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – Value Proposition (USP) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-16 text-gray-900 dark:text-white">
            Kenapa Harus Pilih Kami?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Selesai ≤ 3 hari</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Proses cepat dan efisien tanpa mengorbankan kualitas
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Harga transparan: Rp500rb</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tidak ada biaya tersembunyi, semua sudah termasuk
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Gratis 2 revisi + basic SEO</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hasil sesuai harapan dan mudah ditemukan di Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Demo / Portfolio */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900 dark:text-white">
              Contoh Landing Page
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lihat contoh landing page untuk berbagai jenis bisnis
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <h3 className="font-medium mb-2 text-gray-900 dark:text-white">F&B Template</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Desain modern untuk restoran dan bisnis makanan
                </p>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
                  Lihat Demo
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Jasa Lokal</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Tampil profesional untuk bisnis jasa di daerah Anda
                </p>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
                  Lihat Demo
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Personal Brand</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Tunjukkan expertise Anda dengan landing page profesional
                </p>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
                  Lihat Demo
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 – Testimoni / Bukti Sosial */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900 dark:text-white">
              Apa Kata Mereka
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Testimoni dari pelanggan yang sudah menggunakan jasa kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Cepat, murah, hasil rapi—langsung dapat order via WA."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">- Budi Santoso, Resto Padang</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Akhirnya bisa tampil online, pelanggan lebih percaya sekarang."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">- Siti Rahayu, Jasa Salon</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Harga terjangkau tapi hasil profesional, sangat worth it!"
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">- Andi Pratama, Bengkel Motor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 – Pricing Table Sederhana */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900 dark:text-white">
              Pilihan Paket
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dapatkan landing page profesional sesuai kebutuhan bisnis Anda
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">500K Plan</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-medium text-gray-900 dark:text-white">Rp 500.000</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">sekali bayar</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Paket dasar untuk memulai kehadiran online bisnis Anda
                </p>
                <button 
                  onClick={() => handleWhatsAppClick("500K Plan")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                  Pilih Paket Ini
                </button>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Yang Anda Dapatkan:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">1 landing page profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Domain .my.id gratis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Hosting 1 tahun</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Template responsif</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">WhatsApp button</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Gratis 2 revisi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Basic SEO setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Optional upsell */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Upsell Tersedia:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <p className="font-medium text-gray-900 dark:text-white">Domain .com/.id</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rp200rb/tahun</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <p className="font-medium text-gray-900 dark:text-white">Hosting Premium</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rp150rb/tahun</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <p className="font-medium text-gray-900 dark:text-white">Kampanye Landing Page</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rp300rb</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 – FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900 dark:text-white">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Apakah ada biaya tersembunyi?",
                answer: "Tidak, fixed 500rb untuk paket dasar. Hanya ada biaya tambahan jika Anda memilih upsell seperti domain premium atau hosting."
              },
              {
                question: "Kalau butuh revisi tambahan?",
                answer: "Anda dapat 2 revisi gratis. Untuk revisi tambahan, biayanya Rp100rb/revisi."
              },
              {
                question: "Berapa lama landing page selesai?",
                answer: "Rata-rata 2-3 hari kerja setelah konten dari Anda lengkap."
              },
              {
                question: "Bisakah saya edit sendiri nanti?",
                answer: "Kami memberikan akses ke platform yang mudah digunakan, namun untuk perubahan signifikan sebaiknya konsultasi dengan kami."
              },
              {
                question: "Apakah landing page mobile-friendly?",
                answer: "Ya, semua template kami 100% responsif dan mobile-friendly."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronDown className="w-5 h-5 rotate-180" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/logo/sed/logo_sed.svg" 
                  alt="SED Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-semibold text-gray-900 dark:text-white">SED</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Solusi digital untuk UMKM Indonesia
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="/sed" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#363636]">Landing Page</a></li>
                <li><a href="/sed/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#363636]">Paket Lengkap</a></li>
                <li><a href="/sed/order" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#363636]">Konsultasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Kontak</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">WhatsApp: +62 851 2119 0261</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Email: info@tspdigital.agency</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Jam Kerja</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">Senin - Jumat</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">09:00 - 17:00 WIB</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Powered by TSP Digital – Solusi Digital untuk UMKM Indonesia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}