import { Metadata } from 'next';
import SEDContent from './sed-content';

export const metadata: Metadata = {
  title: 'Strategi Era Digital - Website UMKM Rp500rb | TSP Digital',
  description: 'Paket website starter untuk UMKM hanya Rp500rb! Sudah termasuk domain, hosting, dan template profesional. Solusi digital terjangkau untuk bisnis Anda.',
};

export default function SEDPage() {
  return <SEDContent />;
}