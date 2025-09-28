import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString();

  return [
    { url: 'https://tspdigital.agency', lastModified: lastMod },
    { url: 'https://tspdigital.agency/about', lastModified: lastMod },
    { url: 'https://tspdigital.agency/services', lastModified: lastMod },
    { url: 'https://tspdigital.agency/pricing', lastModified: lastMod },
    { url: 'https://tspdigital.agency/projects', lastModified: lastMod },
    { url: 'https://tspdigital.agency/contact', lastModified: lastMod },
    // SED routes
    { url: 'https://tspdigital.agency/sed', lastModified: lastMod },
    { url: 'https://tspdigital.agency/sed/pricing', lastModified: lastMod },
    { url: 'https://tspdigital.agency/sed/order', lastModified: lastMod },
  ];
}
