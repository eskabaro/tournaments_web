'use client'
import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { THEME } from '@shared/const/theme'
import Button from '@shared/ui/button'
import Icon from '@shared/ui/icon'
import classnames from '@shared/utils/classnames'
import s from './ThemeSwitcher.module.css'

const themeOrder = [THEME.light, THEME.dark, THEME.neon] as const

const ThemeSwitcher: FC = () => {
    const { setTheme, theme } = useTheme()

    const handleCycleTheme = () => {
        const currentIndex = themeOrder.indexOf(theme as (typeof themeOrder)[number])
        const nextIndex = (currentIndex + 1) % themeOrder.length
        setTheme(themeOrder[nextIndex])
    }

    return (
        <div className={s.wrapper}>
            <Button className={s.cycle} onClick={handleCycleTheme} variant='square' aria-label='Switch theme'>
                <Icon className={s.icon} name='sun' />
                <Icon className={s.icon} name='moon' />
                <Icon className={s.icon} name='zap' />
            </Button>
            <Button onClick={() => setTheme(THEME.system)} className={classnames(theme === THEME.system && s.active)} variant='square' icon='monitor' aria-label='Use system theme' />
        </div>
    )
}

export default ThemeSwitcher
