'use client'
import type { FC } from 'react'
import type { ColorsType } from '@shared/const/colors'
import classnames from '@shared/utils/classnames'
import Icon from '../icon'
import s from './Spinner.module.css'

export interface SpinnerPropsType {
    size?: '12' | '16' | '20' | '24' | '48'
    color?: ColorsType
}

const Spinner: FC<SpinnerPropsType> = ({ size = '16', color }) => {
    return (
        <div className={classnames(s.main, s[`size${size}`])}>
            <Icon color={color} name='loading' />
        </div>
    )
}

export default Spinner
