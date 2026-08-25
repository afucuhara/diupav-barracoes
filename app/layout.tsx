import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({ variable: '--font-barlow', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const barlowCondensed = Barlow_Condensed({ variable: '--font-barlow-condensed', subsets: ['latin'], weight: ['500', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.diupav.com.br'),
  title: 'DiuPav Barracões | Estruturas Pré-Moldadas e Metálicas',
  description: 'Barracões pré-moldados, estruturas metálicas, fechamentos, mezaninos, pisos, portas, treliças e soluções sob encomenda em Contenda, Lapa e região.',
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'DiuPav Barracões | Estruturas Pré-Moldadas e Metálicas',
    description: 'Soluções sob encomenda para construir com resistência, qualidade e confiança.',
    url: 'https://www.diupav.com.br',
    siteName: 'DiuPav Barracões',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'DiuPav Barracões — estruturas pré-moldadas e metálicas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DiuPav Barracões | Estruturas Pré-Moldadas e Metálicas',
    description: 'Soluções sob encomenda para construir com resistência, qualidade e confiança.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${barlow.variable} ${barlowCondensed.variable}`}>{children}</body></html>;
}
