import type { FC } from 'react'
import Text from '@shared/ui/text'
import { ThemeSwitcher } from '@features/theme'
import s from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Text as='h1'>Tournaments</Text>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header
