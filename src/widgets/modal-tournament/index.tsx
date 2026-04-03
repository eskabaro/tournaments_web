'use client'
import type { FC, PropsWithChildren } from 'react'
import Modal from '@shared/ui/modal'
import Content from './components/content'
import Loading from './components/loading'
import NotFound from './components/not-found'
import { useModalClose } from './hooks/useModalClose'
import s from './ModalTournament.module.css'
import type { ModalPropsWithType } from './types'

interface Props extends PropsWithChildren, ModalPropsWithType {}

const ModalTournament: FC<Props> = ({ type, children }) => {
    const handleClose = useModalClose(type)

    return (
        <Modal className={s.main} close={handleClose} size='medium'>
            {children}
        </Modal>
    )
}

export { Content, Loading, NotFound }
export default ModalTournament
