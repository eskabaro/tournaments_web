import type { FC, PropsWithChildren } from 'react'
import { Suspense } from 'react'
import Search from './components/search'
import s from './HomeLayout.module.css'

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={s.main}>
            <Suspense>
                <Search />
            </Suspense>
            {children}
        </div>
    )
}

export default HomeLayout
