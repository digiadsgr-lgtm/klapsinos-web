import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Klapsinos Cardiology',
    short_name: 'Klapsinos',
    description: 'Dr. Nikos Klapsinos - Cardiology Clinic & First Aid Center',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A3D62',
    theme_color: '#0A3D62',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  };
}
