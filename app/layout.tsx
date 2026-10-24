import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const instrument = Instrument_Serif({ subsets: ['latin'], variable: '--font-instrument', weight: '400' })

export const metadata: Metadata = {
  title: 'YOUR BRAND — Liquidity, Structure, Discipline',
  description: 'A clearer framework for studying liquidity, market structure, and price reaction.',
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#17161B', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${instrument.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
