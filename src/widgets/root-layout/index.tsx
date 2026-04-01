import { Geist, Geist_Mono } from 'next/font/google'
import type { FC, PropsWithChildren } from 'react'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className='min-h-full flex flex-col'>{children}</body>
        </html>
    )
}

export default RootLayout
