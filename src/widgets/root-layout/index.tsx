import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren } from 'react'
import { THEME, THEMES } from '@shared/const/theme'
import Footer from './components/footer'
import Header from './components/header'
import s from './RootLayout.module.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body>
                <div className={s.wrapper}>
                    <ThemeProvider themes={[...THEMES]} defaultTheme={THEME.light}>
                        <Header />
                        <main className={s.main}>{children}</main>
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    )
}

export default RootLayout
