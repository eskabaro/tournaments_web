'use client'
import type { ComponentPropsWithoutRef, ComponentType, JSX, MouseEventHandler, ReactNode } from 'react'
import { type IconsType } from '@shared/const/icons'
import classnames from '@shared/utils/classnames'
import Icon from '../icon'
import Spinner from '../spinner'
import s from './Button.module.css'

type ButtonElementType = 'a' | 'button' | 'div'
type ButtonSizesType = 'large' | 'small'
type ButtonVariantsType = 'primary' | 'secondary' | 'transparent' | 'border' | 'square'
type AdditionalButtonPropsType<T extends ButtonElementType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type Props<T extends ButtonElementType | ComponentType<any>> = {
    as?: T
    size?: ButtonSizesType
    variant?: ButtonVariantsType
    icon?: IconsType
    children?: ReactNode
    full?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    loading?: boolean
    disabled?: boolean
    reverse?: boolean
} & AdditionalButtonPropsType<T>

const buttonSizes: Record<ButtonSizesType, string> = {
    large: s.large,
    small: s.small
}

const buttonVariants: Record<ButtonVariantsType, string> = {
    primary: s.primary,
    secondary: s.secondary,
    transparent: s.transparent,
    border: s.border,
    square: s.square
}

const Button = <T extends ButtonElementType | ComponentType<any> = 'button'>({ as, size = 'large', variant = 'primary', children, full, disabled, loading, onClick, icon, reverse, className, ...restProps }: Props<T>) => {
    const Component = as || 'button'

    return (
        <Component onClick={onClick} disabled={loading || disabled} className={classnames(s.main, buttonSizes[size], buttonVariants[variant], full && s.full, reverse && 'reverse', className)} {...restProps}>
            {icon && !loading && <Icon name={icon} />}
            {loading && <Spinner />}
            {children}
        </Component>
    )
}

export default Button
