import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'
import RootLayout from '@widgets/root-layout'
import '@shared/styles/globals.css'

export const metadata: Metadata = {
    title: 'Tournaments',
    description: 'Some tournaments descriptions'
}

interface LayoutProps {
    children: ReactNode
    modal: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, modal }) => <RootLayout modal={modal}>{children}</RootLayout>
export default Layout
