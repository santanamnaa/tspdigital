"use client";
import React, { useState } from "react";
import { ArrowRight, Phone, Star, ShoppingCart, Clock, MapPin, Heart, Award, Leaf } from "lucide-react";
import Image from "next/image";

export default function FNBDemoContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = `Halo! Saya tertarik dengan Roti Hangat Bakery. ${message}`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(encodedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { name: "Roti Tawar Premium", price: "Rp18.000", desc: "Roti lembut dengan bahan pilihan terbaik, bebas pengawet", icon: "🍞" },
    { name: "Roti Sobek", price: "Rp22.000", desc: "Roti empuk untuk sarapan keluarga, tekstur lembut", icon: "🧈" },
    { name: "Donat Glazed", price: "Rp15.000", desc: "Donat lembut dengan gula halus premium", icon: "🍩" },
    { name: "Croissant", price: "Rp20.000", desc: "Croissant lembut dengan mentega terbaik, lapisan gurih", icon: "🥐" },
    { name: "Pie Buah", price: "Rp25.000", desc: "Pie dengan filling buah asli, renyah dan manis", icon: "🥧" },
    { name: "Roti Bakar Mix", price: "Rp18.000", desc: "Roti bakar dengan selai premium dan susu kental", icon: "🧈" }
  ];

  const testimonials = [
    {
      name: "Ibu Sari",
      role: "Pelanggan Setia",
      content: "Roti sangat lembut dan fresh. Anak-anak suka, pasti pesan lagi!",
      rating: 5
    },
    {
      name: "Pak Joko",
      role: "Karyawan Kantor",
      content: "Pesan via WA praktis, roti langsung diantar pagi-pagi. Rotinya enak!",
      rating: 5
    },
    {
      name: "Mbak Rina",
      role: "Ibu Rumah Tangga",
      content: "Selalu jadi pilihan untuk sarapan keluarga. Bahan-bahannya terpercaya.",
      rating: 5
    }
  ];

  const galleryImages = [
    { id: 1, alt: "Roti tawar premium" },
    { id: 2, alt: "Donat glazed" },
    { id: 3, alt: "Croissant gurih" },
    { id: 4, alt: "Pie buah segar" },
    { id: 5, alt: "Roti sobek hangat" },
    { id: 6, alt: "Roti bakar mix" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/10 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-amber-100 dark:border-amber-900/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Roti Hangat Bakery</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Roti Fresh Setiap Pagi</p>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsAppClick("Ingin pesan roti, silakan lihat menu di website")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-md">
            <Phone className="w-4 h-4" />
            Pesan via WA
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100/50 to-amber-50 dark:from-amber-900/10 dark:to-amber-900/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Nikmati <span className="text-amber-600">roti segar</span> setiap pagi
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Pesan online & siap antar langsung dari oven kami ke meja Anda. Dibuat dari bahan pilihan terbaik tanpa pengawet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleWhatsAppClick("Ingin pesan roti, silakan lihat menu di website")}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg">
                  Pesan via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => document.getElementById('menu-section')?.scrollIntoView({behavior: 'smooth'})}
                  className="border border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-gray-800 px-6 py-4 rounded-lg font-medium transition-colors">
                  Lihat Menu
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">🍞</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
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
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-amber-100 dark:border-amber-900/30">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Bahan Alami</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Roti dibuat dari bahan pilihan terbaik tanpa bahan pengawet
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-amber-100 dark:border-amber-900/30">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Fresh Daily</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Dibuat setiap pagi jam 05:00 untuk kualitas terbaik
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-amber-100 dark:border-amber-900/30">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Kualitas Terbaik</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Proses produksi terjaga untuk hasil maksimal setiap hari
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Location */}
      <section className="py-8 px-4 bg-amber-100 dark:bg-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Buka setiap hari: 06:00 - 18:00 WIB</span>
            </div>
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Jl. Merdeka No. 123, Kota Jaya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Pilihan Roti Spesial Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Setiap roti dibuat dengan cinta dan perhatian terhadap detail untuk memberikan pengalaman rasa terbaik
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-amber-100 dark:border-amber-900/30 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                      <span className="font-bold text-amber-600 dark:text-amber-400">{item.price}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleWhatsAppClick(`Ingin pesan ${item.name}`)}
                  className="w-full bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/30 dark:hover:bg-amber-800/50 text-amber-700 dark:text-amber-300 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-amber-50 dark:bg-amber-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Galeri Roti Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lihat hasil kerja kami dan nikmati kelezatan setiap produk yang kami buat
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl">{index % 2 === 0 ? "🍞" : "🥐"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Apa Kata Pelanggan</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pengalaman pelanggan dengan produk kami yang lezat dan berkualitas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-amber-100 dark:border-amber-900/30 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
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
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Ingin Pesan Roti Hari Ini?</h3>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami via WhatsApp untuk pesanan roti segar langsung dari oven, langsung antar ke tempat Anda
          </p>
          <button 
            onClick={() => handleWhatsAppClick("Ingin pesan roti hari ini")}
            className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto transition-colors shadow-lg">
            <Phone className="w-5 h-5" />
            Chat via WhatsApp Sekarang
          </button>
          <p className="text-amber-200 text-sm mt-4">
            *Ini contoh tampilan portofolio, bukan bisnis asli
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-amber-100 dark:border-amber-900/30 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Roti Hangat Bakery</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Roti segar setiap pagi langsung dari oven kami ke meja Anda
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Jam Operasional</h5>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Senin - Minggu</li>
                <li>06:00 - 18:00 WIB</li>
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
              © 2025 Roti Hangat Bakery. Contoh Demo - Tidak untuk tujuan komersial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}