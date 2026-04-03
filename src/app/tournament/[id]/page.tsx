import { cacheLife, cacheTag } from 'next/cache'
import { type FC } from 'react'
import { TOURNAMENT_CACHE, tournamentApi } from '@entities/tournament'
import { Content } from '@widgets/modal-tournament'

interface Props {
    params: Promise<{ id: string }>
}

const TournamentPage: FC<Props> = async ({ params }) => {
    'use cache'
    const { id } = await params
    cacheLife(TOURNAMENT_CACHE.profiles.detail)
    cacheTag(TOURNAMENT_CACHE.tags.detail(id))

    const tournament = await tournamentApi.getTournamentById(id)

    return <Content type='replace' tournament={tournament} />
}

export default TournamentPage
