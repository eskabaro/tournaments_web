import type { FC, PropsWithChildren } from 'react'
import Button from '@shared/ui/button'
import classnames from '@shared/utils/classnames'
import s from './Header.module.css'

interface Props extends PropsWithChildren {
    close?: () => void
    style?: string
}

const Header: FC<Props> = ({ close, style, children }) => {
    return (
        <div className={classnames(s.main, style)}>
            {children}
            {close && <Button onClick={close} icon='x-mark' variant='square' />}
        </div>
    )
}

export default Header
