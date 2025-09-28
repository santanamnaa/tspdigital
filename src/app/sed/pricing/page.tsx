import { Metadata } from 'next';
import SEDPricingContent from './pricing-content';

export const metadata: Metadata = {
  title: 'Harga Paket Website UMKM - Strategi Era Digital | TSP Digital',
  description: 'Lihat semua paket website UMKM mulai dari Rp500rb. Starter Pack, Growth Pack, dan Premium Pack untuk semua kebutuhan bisnis digital Anda.',
};

export default function SEDPricingPage() {
  return <SEDPricingContent />;
}