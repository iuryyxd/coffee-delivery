import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Baloo_2 } from 'next/font/google'
import '../global.css'
import { Header } from '@/components/header'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo2',
})

export const metadata: Metadata = {
  title: 'Coffe Delivery',
  description: 'Coffe Delivery - Peça seu café favorito e receba em casa!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baloo2.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
