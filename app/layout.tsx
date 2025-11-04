import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}
