import { cacheLife, cacheTag } from 'next/cache'
import type { FC } from 'react'
import { TOURNAMENT_CACHE, tournamentApi } from '@entities/tournament'
import { Content } from '@widgets/modal-tournament'

interface Props {
    params: Promise<{ id: string }>
}

const ModalTournamentRoute: FC<Props> = async ({ params }) => {
    'use cache'
    const { id } = await params
    cacheLife(TOURNAMENT_CACHE.profiles.detail)
    cacheTag(TOURNAMENT_CACHE.tags.detail(id))

    const tournament = await tournamentApi.getTournamentById(id)

    return <Content type='back' tournament={tournament} />
}
export default ModalTournamentRoute
