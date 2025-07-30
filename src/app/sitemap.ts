import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tspdigital.com', lastModified: new Date() },
    { url: 'https://tspdigital.com/about', lastModified: new Date() },
    { url: 'https://tspdigital.com/services', lastModified: new Date() },
    { url: 'https://tspdigital.com/projects', lastModified: new Date() },
    { url: 'https://tspdigital.com/contact', lastModified: new Date() },
  ]
} 