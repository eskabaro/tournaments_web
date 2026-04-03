'use client'
import type { FC, MouseEvent, ComponentProps } from 'react'
import { useEffect, useRef } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Modal.module.css'
import Body from './ui/body'
import Footer from './ui/footer'
import Header from './ui/header'

interface Props extends ComponentProps<'div'> {
    close?: () => void
    size?: 'small' | 'medium' | 'large'
}

const Modal: FC<Props> = ({ close, size = 'small', className, children }) => {
    const ref = useRef<HTMLDialogElement>(null)

    const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
        const dialog = ref.current
        if (!dialog || e.target !== dialog) return

        const rect = dialog.getBoundingClientRect()
        const clickedInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

        if (!clickedInside) {
            dialog.close()
        }
    }

    useEffect(() => {
        const dialog = ref.current
        if (!dialog || dialog.open) return

        dialog.showModal()
    }, [])

    return (
        <dialog ref={ref} onClose={close} onClick={handleBackdropClick} className={classnames(s.dialog, s[size])}>
            <div className={classnames(s.main, className)}>{children}</div>
        </dialog>
    )
}

export default Object.assign(Modal, {
    Header,
    Body,
    Footer
})
