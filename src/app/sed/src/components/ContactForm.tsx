"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'SED Website Package'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Nama harus diisi';
    if (!formData.email.trim()) return 'Email harus diisi';
    if (!formData.email.includes('@')) return 'Format email tidak valid';
    if (!formData.message.trim()) return 'Pesan harus diisi';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_123";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_123";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_123";

      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        service: formData.service,
        time: new Date().toLocaleString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }, publicKey);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          service: 'SED Website Package'
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Gagal mengirim pesan. Silakan hubungi kami langsung di WhatsApp.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setErrorMessage('Gagal mengirim pesan. Silakan hubungi kami langsung di WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = `Halo TSP Digital! Saya tertarik dengan paket SED Website. Bisa konsultasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="bg-gray-900/50 border-gray-700/50 p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl text-white mb-4">📝 Pesan Sekarang</h3>
        <p className="text-gray-300">Isi form di bawah ini atau hubungi kami langsung di WhatsApp</p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mb-6 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-green-400">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6 flex items-center gap-3">
          <X className="w-5 h-5 text-red-400" />
          <span className="text-red-400">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-2">Nama Lengkap *</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Email *</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="contoh@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white text-sm mb-2">Perusahaan/Usaha (Opsional)</label>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="bg-gray-800 border-gray-600 text-white"
            placeholder="Nama perusahaan atau jenis usaha"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-2">Pesan *</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
            placeholder="Ceritakan kebutuhan website Anda..."
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FF5C00] hover:bg-[#e54e00] text-white px-8 py-3 flex-1"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </Button>
          
          <Button
            type="button"
            onClick={openWhatsApp}
            variant="outline"
            className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white px-8 py-3 flex-1"
          >
            💬 WhatsApp
          </Button>
        </div>
      </form>
    </Card>
  );
}
