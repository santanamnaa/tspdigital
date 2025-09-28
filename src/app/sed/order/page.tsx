import { Metadata } from 'next';
import SEDOrderContent from './order-content';

export const metadata: Metadata = {
  title: 'Pesan Website UMKM - Order Strategi Era Digital | TSP Digital', 
  description: 'Pesan website UMKM profesional sekarang! Proses mudah, hasil cepat. Hubungi kami via WhatsApp untuk konsultasi gratis.',
};

export default function SEDOrderPage() {
  return <SEDOrderContent />;
}