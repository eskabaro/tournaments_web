import { Fragment, type FC } from 'react'
import Modal from '@shared/ui/modal'
import Text from '@shared/ui/text'
import { useModalClose } from '../../hooks/useModalClose'
import type { ModalPropsWithType } from '../../types'
import s from './Content.module.css'

const Content: FC<ModalPropsWithType> = ({ type }) => {
    const handleClose = useModalClose(type)

    return (
        <Fragment>
            <Modal.Header close={handleClose}>
                <Text as='h1' size='2xl'>
                    Weekend tournament
                </Text>
            </Modal.Header>
            <Modal.Body>Body</Modal.Body>
            <Modal.Footer style={s.footer}>Footer</Modal.Footer>
        </Fragment>
    )
}

export default Content
