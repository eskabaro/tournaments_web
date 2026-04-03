'use client'
import { Fragment, type FC } from 'react'
import Modal from '@shared/ui/modal'
import Text from '@shared/ui/text'
import { useModalClose } from '../../hooks/useModalClose'
import type { ModalPropsWithType } from '../../types'
import s from './NotFound.module.css'

const NotFound: FC<ModalPropsWithType> = ({ type }) => {
    const handleClose = useModalClose(type)

    return (
        <Fragment>
            <Modal.Header close={handleClose}>
                <Text as='h2' size='2xl'>
                    Not found
                </Text>
            </Modal.Header>
            <Modal.Body className={s.body}>
                <Text as='p' size='md' color='secondary'>
                    The tournament you are looking for does not exist or has been removed.
                </Text>
            </Modal.Body>
        </Fragment>
    )
}

export default NotFound
