export default function sitemap() {
  const baseUrl = 'https://scamvanguard.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ];
}