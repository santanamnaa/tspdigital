import { Metadata } from 'next';
import SEDOrderContent from './order-content';

export const metadata: Metadata = {
  title: 'Pesan Landing Page 500K - Strategi Era Digital | TSP Digital', 
  description: 'Pesan landing page UMKM profesional sekarang! Proses mudah, hasil cepat dalam 3 hari. Konsultasi gratis via WhatsApp.',
};

export default function SEDOrderPage() {
  return <SEDOrderContent />;
}