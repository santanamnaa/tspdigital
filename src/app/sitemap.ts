import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString();

  return [
    { url: 'https://tspdigital.id', lastModified: lastMod },
    { url: 'https://tspdigital.id/about', lastModified: lastMod },
    { url: 'https://tspdigital.id/services', lastModified: lastMod },
    { url: 'https://tspdigital.id/pricing', lastModified: lastMod },
    { url: 'https://tspdigital.id/projects', lastModified: lastMod },
    { url: 'https://tspdigital.id/contact', lastModified: lastMod },
    // SED routes
    { url: 'https://tspdigital.id/sed', lastModified: lastMod },
    { url: 'https://tspdigital.id/sed/pricing', lastModified: lastMod },
    { url: 'https://tspdigital.id/sed/order', lastModified: lastMod },
  ];
}
