import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberAI - Cybersecurity AI Solutions',
  description: 'Advanced AI-powered cybersecurity solutions for modern enterprises',
  keywords: 'cybersecurity, AI, artificial intelligence, security, cyber defense',
  authors: [{ name: 'CyberAI Team' }],
  creator: 'CyberAI',
  publisher: 'CyberAI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cyberai.com',
    title: 'CyberAI - Cybersecurity AI Solutions',
    description: 'Advanced AI-powered cybersecurity solutions for modern enterprises',
    siteName: 'CyberAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberAI - Cybersecurity AI Solutions',
    description: 'Advanced AI-powered cybersecurity solutions for modern enterprises',
    creator: '@cyberai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Golden border glow effect */}
          <div className="viewport-glow"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}