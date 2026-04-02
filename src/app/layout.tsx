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
    main: ReactNode
    modals: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, main, modals }) => (
    <RootLayout main={main} modals={modals}>
        {children}
    </RootLayout>
)
export default Layout
