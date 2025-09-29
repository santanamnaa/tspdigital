import { Metadata } from 'next';
import SEDContent from './sed-content';

export const metadata: Metadata = {
  title: 'Landing Page Profesional 500K - Strategi Era Digital | TSP Digital',
  description: 'Landing Page profesional selesai dalam 3 hari hanya dengan Rp500.000. Solusi cepat untuk UKM & profesional yang ingin tampil online dengan budget minim.',
};

export default function SEDPage() {
  return <SEDContent />;
}