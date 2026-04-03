import { cacheLife, cacheTag } from 'next/cache'
import { connection } from 'next/server'
import type { FC } from 'react'
import { Suspense } from 'react'
import { TOURNAMENT_CACHE, tournamentApi } from '@entities/tournament'
import PageLoader from '@widgets/page-loader'
import Home from '@screens/home'

interface Props {
    searchParams: Promise<{ q?: string }>
}

const Tournaments: FC<{ query?: string }> = async ({ query }) => {
    'use cache'
    cacheLife(TOURNAMENT_CACHE.profiles.list)
    cacheTag(TOURNAMENT_CACHE.tags.list)

    const data = await tournamentApi.getTournaments(query)

    return <Home data={data} />
}

const TournamentsWithSearch: FC<Props> = async ({ searchParams }) => {
    await connection()
    const { q } = await searchParams

    return <Tournaments query={q} />
}

const MainPage: FC<Props> = ({ searchParams }) => {
    return (
        <Suspense fallback={<PageLoader />}>
            <TournamentsWithSearch searchParams={searchParams} />
        </Suspense>
    )
}

export default MainPage
