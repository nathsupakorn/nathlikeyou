import './globals.css'

import type { Metadata } from 'next'
import React from 'react'
import { Providers } from './providers'
import AppNavBar from './components/navbar/appNavBar'

export const metadata: Metadata = {
  title: 'Nathlikyou',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        <Providers>
          <AppNavBar />
          {children}
        </Providers>
      </body>
    </html >
  )
}


