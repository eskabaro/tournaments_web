import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import { THEME, THEMES } from '@shared/const/theme'
import Footer from './components/footer'
import Header from './components/header'
import s from './RootLayout.module.css'

export interface RootLayoutProps extends PropsWithChildren {
    main: ReactNode
    modals: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children, main, modals }) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body>
                <ThemeProvider themes={[...THEMES]} defaultTheme={THEME.light} enableSystem>
                    <div className={s.wrapper}>
                        <Header />
                        <main className={s.main}>{main}</main>
                        <Footer />
                    </div>
                    {modals}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
