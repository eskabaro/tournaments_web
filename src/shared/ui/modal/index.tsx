'use client'
import type { FC, MouseEvent, ComponentProps } from 'react'
import { useEffect, useRef } from 'react'
import classnames from '@shared/utils/classnames'
import { lockScroll, unlockScroll } from '@shared/utils/modal'
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
        if (!ref.current || e.target !== dialog) return

        const rect = ref.current.getBoundingClientRect()
        const clickedInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

        if (!clickedInside) ref.current.close()
    }

    useEffect(() => {
        if (!ref.current) return
        if (!ref.current.open) ref.current.showModal()

        lockScroll()
        return () => unlockScroll()
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
