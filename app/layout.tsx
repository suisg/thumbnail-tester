import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free YouTube Thumbnail Tester - Check Your video Thumbnails',
  description: 'Test & preview your youtube thumbnail! Free thumbnail tester and preview to optimize YouTube titles and thumbnails and attract more viewers. Check your video layout.',
  alternates: {
    canonical: 'https://www.thumbnailtester.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
