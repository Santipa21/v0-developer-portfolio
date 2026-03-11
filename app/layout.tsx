import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Santiago Patiño | Frontend Developer',
  description: 'Frontend Developer especializado en React, Next.js, TypeScript y desarrollo web moderno. Explora mis proyectos, habilidades y experiencia.',
  generator: 'Next.js',
  keywords: ['santiago patiño', 'frontend developer', 'portfolio', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Santiago Patiño' }],
  openGraph: {
    type: 'website',
    title: 'Santiago Patiño | Frontend Developer',
    description: 'Frontend Developer especializado en React, Next.js, TypeScript y desarrollo web moderno.',
    siteName: 'Santiago Patiño Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Patiño | Frontend Developer',
    description: 'Frontend Developer especializado en React, Next.js, TypeScript y desarrollo web moderno.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
