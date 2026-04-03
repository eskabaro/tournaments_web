import { type FC } from 'react'
import { getTournament } from '@entities/tournament'
import { Content } from '@widgets/modal-tournament'

interface Props {
    params: Promise<{ id: string }>
}

const Modal: FC<Props> = async ({ params }) => {
    const { id } = await params
    const data = await getTournament(id)

    return <Content tournament={data} type='replace' />
}

export default Modal
