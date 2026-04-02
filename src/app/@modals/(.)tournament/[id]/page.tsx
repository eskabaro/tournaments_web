import type { FC } from 'react'
import { Content } from '@widgets/modal-tournament'

interface Props {
    params: Promise<{ id: string }>
}

const ModalTournamentRoute: FC<Props> = async ({ params }) => {
    const {} = await params

    return <Content type='back' />
}
export default ModalTournamentRoute
