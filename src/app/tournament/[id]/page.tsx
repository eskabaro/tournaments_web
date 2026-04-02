import { type FC } from 'react'
import { Content } from '@widgets/modal-tournament'

interface Props {
    params: Promise<{ id: string }>
}

const TournamentPage: FC<Props> = async ({ params }) => {
    const {} = await params

    return <Content type='replace' />
}

export default TournamentPage
