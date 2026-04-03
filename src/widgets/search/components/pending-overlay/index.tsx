'use client'
import type { FC, PropsWithChildren } from 'react'
import { useSearchStore } from '@shared/state/useSearchStore'
import classnames from '@shared/utils/classnames'
import s from './PendingOverlay.module.css'

const PendingOverlay: FC<PropsWithChildren> = ({ children }) => {
    const isPending = useSearchStore((state) => state.isPending)

    return <div className={classnames(s.main, isPending && s.pending)}>{children}</div>
}

export default PendingOverlay
