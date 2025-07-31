import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
      { url: 'https://tspdigital.agency', lastModified: new Date() },
  { url: 'https://tspdigital.agency/about', lastModified: new Date() },
  { url: 'https://tspdigital.agency/services', lastModified: new Date() },
  { url: 'https://tspdigital.agency/projects', lastModified: new Date() },
  { url: 'https://tspdigital.agency/contact', lastModified: new Date() },
  ]
} 