import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Feeter from './components/footer'
import { DataProvider } from './shared/dataContext'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <DataProvider> 
        {children}
      </DataProvider>
      <Feeter/>
      </body>

    </html>
  )
}
