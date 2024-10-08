import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portofolio Asep',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}