import type { Metadata } from 'next'
import './globals.css'
import { LenisScroll } from '@/components/LenisScroll'

export const metadata: Metadata = {
  title: 'Avishek Biswas - Portfolio',
  description: 'Full-Stack Developer | AI Enthusiast | Open Source Contributor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <LenisScroll />
        {children}
      </body>
    </html>
  )
}
