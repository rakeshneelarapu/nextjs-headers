import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { headers } from 'next/headers';
import TopContainer from './header';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const referer = headersList.get('referer');
  console.log("referer from layout", referer);
  return (
    <html lang="en">
      <body className={inter.className}>
        Referrer from Layout - {referer}
        <TopContainer/>
      </body>
    </html>
  )
}
