"use client";
import React, { useState } from "react";
import { ArrowRight, Phone, Star, Briefcase, BookOpen, Users, Calendar, Mail, Award, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function PersonalDemoContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = `Halo! Saya tertarik dengan layanan konsultasi pajak dari Bu Ayu Sari. ${message}`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(encodedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { name: "Konsultasi Pajak", price: "Rp300.000", desc: "Konsultasi pajak perusahaan dan pribadi, solusi tepat untuk kewajiban pajak Anda", icon: "📋" },
    { name: "Pengurusan NPWP", price: "Rp150.000", desc: "Pengurusan NPWP perorangan & perusahaan secara legal dan cepat", icon: "🆔" },
    { name: "Laporan Pajak", price: "Rp250.000", desc: "Pembuatan laporan pajak tahunan sesuai peraturan terbaru", icon: "📊" },
    { name: "E-Filing Pajak", price: "Rp200.000", desc: "Pengurusan e-filing pajak online dengan sistem terbaru", icon: "💻" },
    { name: "Pajak Usaha Mikro", price: "Rp180.000", desc: "Pembukuan & laporan pajak UMKM sesuai regulasi terbaru", icon: "🏪" },
    { name: "Pajak Properti", price: "Rp350.000", desc: "Konsultasi pajak properti, tanah, dan pajak bumi bangunan", icon: "🏠" }
  ];

  const testimonials = [
    {
      name: "PT Maju Jaya",
      role: "Owner UMKM",
      content: "Sejak kerja sama dengan Bu Ayu, urusan pajak jadi lebih mudah dan terorganisir. Tidak perlu takut salah lagi!",
      rating: 5
    },
    {
      name: "Bapak Suharto",
      role: "Pegawai Swasta",
      content: "Konsultasi pajaknya sangat membantu, tidak bingung lagi saat lapor pajak tahunan. Penjelasan sangat jelas!",
      rating: 5
    },
    {
      name: "Ibu Dewi",
      role: "Pengusaha Online",
      content: "Pembukuan pajak jadi rapi berkat bantuan Bu Ayu. Layanannya sangat profesional dan bisa diandalkan.",
      rating: 5
    }
  ];

  const processSteps = [
    { step: 1, title: "Konsultasi Awal", desc: "Diskusi kebutuhan pajak Anda secara detail" },
    { step: 2, title: "Pengumpulan Dokumen", desc: "Kumpulkan dokumen pendukung untuk proses" },
    { step: 3, title: "Proses Administrasi", desc: "Pengurusan semua administrasi pajak" },
    { step: 4, title: "Laporan & Selesai", desc: "Laporan pajak diserahkan dan selesai" }
  ];

  const qualifications = [
    { title: "Sertifikat Konsultan Pajak", desc: "Terdaftar di DJP dengan nomor terverifikasi" },
    { title: "Pengalaman 10+ Tahun", desc: "Lebih dari satu dekade membantu klien" },
    { title: "Klien 500+ Perusahaan", desc: "Berpengalaman menangani berbagai bidang usaha" },
    { title: "Update Regulasi", desc: "Selalu mengikuti perubahan peraturan pajak" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-900/10 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-green-100 dark:border-green-900/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">AS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Ayu Sari</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Konsultan Pajak Profesional</p>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsAppClick("Ingin konsultasi pajak, silakan lihat informasi di website")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-md">
            <Phone className="w-4 h-4" />
            Konsultasi
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100/50 to-green-50 dark:from-green-900/10 dark:to-green-900/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Bantu bisnis Anda urus pajak dengan <span className="text-green-600">tenang & aman</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Konsultasi pajak profesional langsung dari konsultan berpengalaman lebih dari 10 tahun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleWhatsAppClick("Ingin konsultasi pajak, silakan lihat informasi di website")}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg">
                  Konsultasi Gratis
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => document.getElementById('process-section')?.scrollIntoView({behavior: 'smooth'})}
                  className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-gray-800 px-6 py-4 rounded-lg font-medium transition-colors">
                  Lihat Proses
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">👨‍💼</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile-section" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-green-100 dark:border-green-900/30 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-6xl font-bold">
                AS
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">Ayu Sari, S.E., M.Si.</h3>
                <p className="text-xl text-green-600 dark:text-green-400 mb-5">Konsultan Pajak Terdaftar | 10+ Tahun Pengalaman</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  Saya membantu UMKM dan perorangan dalam pengurusan pajak secara legal, akurat, dan efisien. 
                  Dengan pengalaman lebih dari 10 tahun, saya siap membantu Anda mengelola kewajiban pajak dengan benar dan optimal.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center md:items-start">
                    <Briefcase className="w-6 h-6 text-green-500 mb-1" />
                    <span className="text-gray-900 dark:text-white font-medium">500+ Klien</span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <BookOpen className="w-6 h-6 text-green-500 mb-1" />
                    <span className="text-gray-900 dark:text-white font-medium">Sertifikat</span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Users className="w-6 h-6 text-green-500 mb-1" />
                    <span className="text-gray-900 dark:text-white font-medium">UMKM Spesialis</span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Clock className="w-6 h-6 text-green-500 mb-1" />
                    <span className="text-gray-900 dark:text-white font-medium">10+ Tahun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Kualifikasi & Keahlian</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Profesional dengan pengalaman dan kredensial yang terverifikasi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-green-100 dark:border-green-900/30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-5 h-5 text-green-500" />
                </div>
                <h4 className="font-bold text-center mb-2 text-gray-900 dark:text-white">{qual.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">{qual.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process-section" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Proses Kerja Saya</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proses konsultasi pajak yang transparan dan mudah dipahami
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Layanan yang Tersedia</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan pajak Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-green-100 dark:border-green-900/30 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white">{service.name}</h4>
                      <span className="font-bold text-green-600 dark:text-green-400">{service.price}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleWhatsAppClick(`Ingin menggunakan layanan ${service.name}`)}
                  className="w-full bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/50 text-green-700 dark:text-green-300 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Booking Konsultasi
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Apa Kata Klien Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pengalaman klien dengan layanan konsultasi pajak profesional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-green-100 dark:border-green-900/30 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-green-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Konsultasi Gratis</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hubungi saya untuk konsultasi awal gratis dan diskusi kebutuhan pajak Anda
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-green-100 dark:border-green-900/30 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">WhatsApp</p>
                  <p className="text-gray-600 dark:text-gray-400">+62 851 2119 0261</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Respon cepat dalam 1 jam (jam kerja)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">ayu.sari.konsultanpajak@example.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => handleWhatsAppClick("Ingin konsultasi gratis tentang pajak")}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-md">
                <Phone className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Mulai Konsultasi Pajak Hari Ini</h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Jangan tunda lagi urusan pajak Anda. Konsultasi profesional siap membantu Anda dengan pendekatan solutif dan aman.
          </p>
          <button 
            onClick={() => handleWhatsAppClick("Ingin konsultasi pajak hari ini")}
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto transition-colors shadow-lg">
            <Phone className="w-5 h-5" />
            Chat via WhatsApp Sekarang
          </button>
          <p className="text-green-200 text-sm mt-4">
            *Ini contoh tampilan portofolio, bukan layanan asli
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-green-100 dark:border-green-900/30 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Ayu Sari</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Konsultan Pajak</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Bantu bisnis Anda urus pajak dengan tenang & aman
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Layanan</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Konsultasi Pajak</li>
                <li>Pengurusan NPWP</li>
                <li>Laporan Pajak</li>
                <li>UMKM Spesialis</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Jam Kerja</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Senin - Jumat</li>
                <li>09:00 - 17:00 WIB</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Kontak</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>WhatsApp: +62 851 2119 0261</li>
                <li>Email: ayu.sari.konsultanpajak@example.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 Ayu Sari Konsultan Pajak. Contoh Demo - Tidak untuk tujuan komersial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}