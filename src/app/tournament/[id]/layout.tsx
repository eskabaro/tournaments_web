import { cacheLife, cacheTag } from 'next/cache'
import { Fragment, type FC, type PropsWithChildren } from 'react'
import { TOURNAMENT_CACHE, tournamentApi } from '@entities/tournament'
import ModalTournament from '@widgets/modal-tournament'
import Home from '@screens/home'

const TournamentsList: FC = async () => {
    'use cache'
    cacheLife(TOURNAMENT_CACHE.profiles.list)
    cacheTag(TOURNAMENT_CACHE.tags.list)

    const data = await tournamentApi.getTournaments()

    return <Home data={data} />
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <TournamentsList />
            <ModalTournament type='replace'>{children}</ModalTournament>
        </Fragment>
    )
}

export default Layout
