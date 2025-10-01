"use client";
import React, { useState } from "react";
import { ArrowRight, Phone, Star, Calendar, Scissors, Clock, MapPin, Award, Users, Heart } from "lucide-react";
import Image from "next/image";

export default function JasaDemoContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = `Halo! Saya tertarik dengan Suma Barber. ${message}`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(encodedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { name: "Potong Rambut", price: "Rp65.000", desc: "Potongan rapi sesuai keinginan, gunting presisi tinggi", icon: "✂️" },
    { name: "Cukur Jenggot", price: "Rp45.000", desc: "Cukur jenggot rapi dan bersih, perawatan kulit wajah", icon: "🪒" },
    { name: "Creambath", price: "Rp80.000", desc: "Perawatan rambut dan kulit kepala, regenerasi akar rambut", icon: "💆" },
    { name: "Styling", price: "Rp100.000", desc: "Styling rambut dengan produk premium, tahan lama", icon: "💇" },
    { name: "Hair Coloring", price: "Rp250.000", desc: "Pewarnaan rambut kualitas tinggi, hasil natural", icon: "🎨" },
    { name: "Package Complete", price: "Rp175.000", desc: "Potong + cukur + creambath, hemat dan lengkap", icon: "🎁" }
  ];

  const testimonials = [
    {
      name: "Bapak Andi",
      role: "Pegawai Swasta",
      content: "Potongan rapi, hasil memuaskan. Tukang cukurnya profesional banget! Suasana tempatnya juga nyaman.",
      rating: 5
    },
    {
      name: "Mas Rudi",
      role: "Wirausaha",
      content: "Booking online praktis, tidak perlu antri. Hasilnya top lah! Selalu dapat barbershop yang sesuai harapan.",
      rating: 5
    },
    {
      name: "Bang Jono",
      role: "Wiraswasta",
      content: "Tempatnya nyaman, harga bersaing banget. Barbershop langganan sekarang. Pasti balik lagi deh!",
      rating: 5
    }
  ];

  const galleryImages = [
    { id: 1, alt: "Potongan rapi" },
    { id: 2, alt: "Cukur jenggot" },
    { id: 3, alt: "Styling rambut" },
    { id: 4, alt: "Creambath treatment" },
    { id: 5, alt: "Hair coloring" },
    { id: 6, alt: "Package complete" }
  ];

  const barbers = [
    {
      name: "Kang Dedi",
      specialty: "Scissor Cutting",
      experience: "7 tahun"
    },
    {
      name: "Mas Joko",
      specialty: "Beard Grooming",
      experience: "5 tahun"
    },
    {
      name: "Bro Roni",
      specialty: "Hair Coloring",
      experience: "6 tahun"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-blue-100 dark:border-blue-900/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Suma Barber</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Barbershop Professional</p>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsAppClick("Ingin booking potong rambut, silakan lihat jadwal di website")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-md">
            <Phone className="w-4 h-4" />
            Booking WA
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100/50 to-blue-50 dark:from-blue-900/10 dark:to-blue-900/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Potongan <span className="text-blue-600">stylish</span>, harga ramah
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Booking online sekarang dan dapatkan hasil terbaik untuk tampilan rapi dan keren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleWhatsAppClick("Ingin booking potong rambut, silakan lihat jadwal di website")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg">
                  Booking via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({behavior: 'smooth'})}
                  className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-4 rounded-lg font-medium transition-colors">
                  Lihat Layanan
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">💇</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Kualitas Terbaik</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hasil potongan rapi dan profesional dari tukang cukur berpengalaman
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Pelayanan Ramah</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pelayanan yang ramah dan membuat pelanggan merasa nyaman
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Barbers Handal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Barbers berpengalaman yang mengikuti tren terbaru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Location */}
      <section className="py-8 px-4 bg-blue-100 dark:bg-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Buka setiap hari: 09:00 - 21:00 WIB</span>
            </div>
            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Jl. Merdeka No. 123, Kota Jaya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Barbers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Barbers Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tim profesional yang siap memberikan hasil terbaik untuk tampilan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {barbers.map((barber, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center mx-auto mb-4 text-3xl">
                  👨‍🦰
                </div>
                <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{barber.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{barber.specialty}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{barber.experience} pengalaman</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 px-4 bg-blue-50 dark:bg-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Layanan Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pilihan layanan lengkap untuk tampilan yang stylish dan rapi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white">{service.name}</h4>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{service.price}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleWhatsAppClick(`Ingin booking layanan ${service.name}`)}
                  className="w-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-700 dark:text-blue-300 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Booking Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Hasil Potongan Terbaru</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lihat contoh hasil kerja dari barbers kami yang profesional
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl">{index % 2 === 0 ? "💇" : "✂️"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Apa Kata Pelanggan Setia</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pengalaman pelanggan dengan layanan profesional kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-blue-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Booking Potong Rambut Hari Ini</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami via WhatsApp untuk booking potong rambut dengan hasil terbaik dan barbers profesional
          </p>
          <button 
            onClick={() => handleWhatsAppClick("Ingin booking potong rambut hari ini")}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto transition-colors shadow-lg">
            <Phone className="w-5 h-5" />
            Chat via WhatsApp Sekarang
          </button>
          <p className="text-blue-200 text-sm mt-4">
            *Ini contoh tampilan portofolio, bukan bisnis asli
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-100 dark:border-blue-900/30 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Suma Barber</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Barbershop profesional dengan hasil terbaik dan pelayanan ramah
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Jam Operasional</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Senin - Minggu</li>
                <li>09:00 - 21:00 WIB</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Lokasi</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Jl. Merdeka No. 123</li>
                <li>Kota Jaya</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Kontak</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>WhatsApp: +62 851 2119 0261</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 Suma Barber. Contoh Demo - Tidak untuk tujuan komersial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}