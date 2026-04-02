'use client'

import { useRouter } from 'next/navigation'
import type { FC, PropsWithChildren } from 'react'
import s from './Modal.module.css'
import Body from './ui/body'
import Footer from './ui/footer'
import Header from './ui/header'

const Modal: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter()

    return (
        <div onClick={router.back} className={s.wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={s.main}>
                {children}
            </div>
        </div>
    )
}

export default Object.assign(Modal, {
    Header,
    Body,
    Footer
})
