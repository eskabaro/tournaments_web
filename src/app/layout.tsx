import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import RootLayout from '@widgets/root-layout'
import '@shared/styles/globals.css'

export const metadata: Metadata = {
    title: 'Tournaments',
    description: 'Some tournaments descriptions'
}

const Layout: FC<PropsWithChildren> = ({ children }) => <RootLayout>{children}</RootLayout>
export default Layout
