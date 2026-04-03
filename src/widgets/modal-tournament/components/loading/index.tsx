import { Fragment, type FC } from 'react'
import Modal from '@shared/ui/modal'
import Skeleton from '@shared/ui/skeleton'
import { useModalClose } from '../../hooks/useModalClose'
import type { ModalPropsWithType } from '../../types'
import s from './Loading.module.css'

const Loading: FC<ModalPropsWithType> = ({ type }) => {
    const handleClose = useModalClose(type)

    return (
        <Fragment>
            <Modal.Header close={handleClose}>
                <Skeleton width={200} height={32} />
            </Modal.Header>
            <Modal.Body className={s.body}>
                <Skeleton className={s.image} />
                <div className={s.text}>
                    <Skeleton width='100%' height={16} />
                    <Skeleton width='75%' height={16} />
                    <Skeleton width='50%' height={16} />
                </div>
            </Modal.Body>
            <Modal.Footer className={s.footer}>
                <Skeleton width='100%' height={46} />
            </Modal.Footer>
        </Fragment>
    )
}

export default Loading
