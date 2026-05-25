import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Generador de Códigos QR Rápido y Gratis',
  description: 'Genera códigos QR de alta calidad al instante. Escribe una URL o texto y descarga tu código QR en formato PNG fácilmente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
