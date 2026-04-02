'use client'
import type { ComponentPropsWithoutRef, ComponentType, JSX, ReactNode } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Text.module.css'

type TextElementType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'div'
type TextSizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
type TextWeightsType = 'regular' | 'medium' | 'semibold' | 'bold'
type TextColorsType = 'primary' | 'secondary' | 'placeholder' | 'disabled' | 'accent'
type AdditionalTextPropsType<T extends TextElementType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type Props<T extends TextElementType | ComponentType<any>> = {
    as?: T
    size?: TextSizesType
    weight?: TextWeightsType
    color?: TextColorsType
    children?: ReactNode
    truncate?: boolean
} & AdditionalTextPropsType<T>

const textSizes: Record<TextSizesType, string> = {
    xs: s.xs,
    sm: s.sm,
    md: s.md,
    lg: s.lg,
    xl: s.xl,
    '2xl': s['size-2xl'],
    '3xl': s['size-3xl']
}

const textWeights: Record<TextWeightsType, string> = {
    regular: s.regular,
    medium: s.medium,
    semibold: s.semibold,
    bold: s.bold
}

const textColors: Record<TextColorsType, string> = {
    primary: s.primary,
    secondary: s.secondary,
    placeholder: s.placeholder,
    disabled: s.disabled,
    accent: s.accent
}

const Text = <T extends TextElementType | ComponentType<any> = 'p'>({ as, size = 'md', weight = 'regular', color = 'primary', children, truncate, className, ...restProps }: Props<T>) => {
    const Component = as || 'p'

    return (
        <Component className={classnames(s.main, textSizes[size], textWeights[weight], textColors[color], truncate && s.truncate, className)} {...restProps}>
            {children}
        </Component>
    )
}

export default Text
