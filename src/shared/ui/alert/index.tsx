'use client'
import type { FC } from 'react'
import Icon from '@shared/ui/icon'
import classnames from '@shared/utils/classnames'
import { useAlertStore } from '../../state/useAlertStore'
import Text from '../text'
import s from './Alert.module.css'

const AlertProvider: FC = () => {
    const popups = useAlertStore((state) => state.popups)

    if (popups.length === 0) return null

    return (
        <div className={s.container}>
            {popups.map((popup, index) => (
                <div key={index} className={classnames(s.popup, !popup.isOpen && s.hidden)}>
                    <span className={classnames(s.icon, s[popup.type])}>
                        <Icon name={popup.type === 'success' ? 'success' : 'error'} />
                    </span>
                    <Text as='span'>{popup.text}</Text>
                </div>
            ))}
        </div>
    )
}

export default AlertProvider
