import type { ComponentProps, FC } from 'react'
import Button from '@shared/ui/button'
import classnames from '@shared/utils/classnames'
import s from './Header.module.css'

interface Props extends ComponentProps<'div'> {
    close?: () => void
}

const Header: FC<Props> = ({ close, className, children }) => {
    return (
        <div className={classnames(s.main, className)}>
            {children}
            {close && <Button onClick={close} icon='x-mark' variant='square' />}
        </div>
    )
}

export default Header
