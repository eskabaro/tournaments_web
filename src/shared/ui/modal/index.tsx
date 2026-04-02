'use client'
import type { FC, PropsWithChildren, MouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Modal.module.css'
import Body from './ui/body'
import Footer from './ui/footer'
import Header from './ui/header'

interface Props extends PropsWithChildren {
    close?: () => void
    style?: string
    size?: 'small' | 'medium' | 'large'
}

const Modal: FC<Props> = ({ close, size = 'small', style, children }) => {
    const ref = useRef<HTMLDialogElement>(null)

    const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
        if (e.target !== ref.current) return
        ref.current?.close()
    }

    useEffect(() => {
        const dialog = ref.current
        if (!dialog || dialog.open) return

        dialog.showModal()
    }, [])

    return (
        <dialog ref={ref} onClose={close} onClick={handleBackdropClick} className={classnames(s.dialog, s[size])}>
            <div className={classnames(s.main, style)}>{children}</div>
        </dialog>
    )
}

export default Object.assign(Modal, {
    Header,
    Body,
    Footer
})
