import Link from 'next/link'
import type { FC } from 'react'
import { ROUTES } from '@shared/const/routes'
import s from './NotFound.module.css'

const NotFound: FC = () => {
    return (
        <div className={s.main}>
            <h1>Page not found</h1>
            <Link href={ROUTES.home}>Go home</Link>
        </div>
    )
}

export default NotFound
