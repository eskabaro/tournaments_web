import Image from 'next/image'
import { Fragment, type FC } from 'react'
import Modal from '@shared/ui/modal'
import Text from '@shared/ui/text'
import { JoinButton, type ITournament } from '@entities/tournament'
import { useModalClose } from '../../hooks/useModalClose'
import type { ModalPropsWithType } from '../../types'
import s from './Content.module.css'

interface Props extends ModalPropsWithType {
    tournament: ITournament
}

const Content: FC<Props> = ({ type, tournament }) => {
    const handleClose = useModalClose(type)

    return (
        <Fragment>
            <Modal.Header close={handleClose}>
                <Text as='h1' size='2xl'>
                    {tournament.title}
                </Text>
            </Modal.Header>
            <Modal.Body className={s.body}>
                <Image className={s.image} src={tournament.image} alt={tournament.title} width={600} height={338} />
                <Text as='p' size='md' className={s.description}>
                    {tournament.description}
                </Text>
            </Modal.Body>
            <Modal.Footer className={s.footer}>
                <JoinButton tournamentId={tournament.id} isJoined={tournament.isJoined} />
            </Modal.Footer>
        </Fragment>
    )
}

export default Content
