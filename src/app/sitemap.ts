import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString();

  return [
    { url: 'https://tspdigital.agency', lastModified: lastMod },
    { url: 'https://tspdigital.agency/about', lastModified: lastMod },
    { url: 'https://tspdigital.agency/services', lastModified: lastMod },
    { url: 'https://tspdigital.agency/projects', lastModified: lastMod },
    { url: 'https://tspdigital.agency/contact', lastModified: lastMod },
  ];
}
