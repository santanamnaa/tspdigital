import { Metadata } from 'next';
import SEDContent from './sed-content';

export const metadata: Metadata = {
  title: 'Landing Page Profesional, Selesai 3 Hari. Fixed Price Rp500.000. | Strategi Era Digital',
  description: 'Solusi cepat untuk UKM & profesional yang ingin tampil online dengan budget minim. Landing page profesional selesai dalam 3 hari.',
};

export default function SEDPage() {
  return <SEDContent />;
}