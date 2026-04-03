'use client'
import { forwardRef, type ComponentProps } from 'react'
import type { IconsType } from '@shared/const/icons'
import classnames from '@shared/utils/classnames'
import Icon from '../icon'
import s from './Input.module.css'

type InputVariantSize = 'large' | 'small'
interface Props extends ComponentProps<'input'> {
    icon?: IconsType
    variant?: InputVariantSize
    iconClassName?: string
}

const inputSizes: Record<InputVariantSize, string> = {
    large: s.large,
    small: s.small
}

const iconSizes: Record<InputVariantSize, { className: string; size: number }> = {
    large: { className: s['icon-large'], size: 20 },
    small: { className: s['icon-small'], size: 16 }
}

const Input = forwardRef<HTMLInputElement, Props>(({ icon, variant = 'large', iconClassName, className, ...rest }, ref) => {
    const iconProps = iconSizes[variant]

    return (
        <div className={s.wrapper}>
            {icon && <Icon name={icon} className={classnames(iconProps.className, iconClassName)} width={iconProps.size} height={iconProps.size} />}
            <input ref={ref} className={classnames(s.input, inputSizes[variant], icon && s['with-icon'], className)} {...rest} />
        </div>
    )
})

Input.displayName = 'Input'
export default Input
