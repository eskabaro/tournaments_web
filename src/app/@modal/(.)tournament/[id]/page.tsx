import type { FC } from 'react'
import { getSafeTournament } from '@entities/tournament/actions'
import { Content, NotFound } from '@widgets/modal-tournament'

interface Props {
    params: Promise<{ id: string }>
}

const Modal: FC<Props> = async ({ params }) => {
    const { id } = await params
    const data = await getSafeTournament(id)

    if (!data) return <NotFound type='back' />

    return <Content tournament={data} type='back' />
}

export default Modal
