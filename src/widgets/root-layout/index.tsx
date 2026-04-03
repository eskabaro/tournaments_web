import { ThemeProvider } from 'next-themes'
import { Suspense, type FC, type PropsWithChildren, type ReactNode } from 'react'
import { THEME, THEMES } from '@shared/const/theme'
import AlertProvider from '@shared/ui/alert'
import Search, { PendingOverlay } from '@widgets/search'
import Footer from './components/footer'
import Header from './components/header'
import s from './RootLayout.module.css'

export interface RootLayoutProps extends PropsWithChildren {
    modal: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children, modal }) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body>
                <ThemeProvider themes={[...THEMES]} defaultTheme={THEME.light} enableSystem>
                    <div className={s.wrapper}>
                        <Header />
                        <main className={s.main}>
                            <Suspense>
                                <Search />
                            </Suspense>
                            <PendingOverlay>{children}</PendingOverlay>
                        </main>
                        <Footer />
                    </div>
                    {modal}
                    <AlertProvider />
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
