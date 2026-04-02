import { Fragment, type FC } from 'react'
import Modal from '@shared/ui/modal'
import { useModalClose } from '../../hooks/useModalClose'
import type { ModalPropsWithType } from '../../types'

const Loading: FC<ModalPropsWithType> = ({ type }) => {
    const handleClose = useModalClose(type)

    return (
        <Fragment>
            <Modal.Header close={handleClose}>
                <div className='h-7 w-48 animate-pulse rounded bg-amber-600' />
            </Modal.Header>
            <Modal.Body>
                <div className='h-4 w-full animate-pulse rounded bg-amber-600/50' />
                <div className='mt-2 h-4 w-2/3 animate-pulse rounded bg-amber-600/50' />
            </Modal.Body>
        </Fragment>
    )
}

export default Loading
