import type { FC } from 'react'
import s from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={s.header}>
            <span>Tournaments</span>
        </header>
    )
}

export default Header
