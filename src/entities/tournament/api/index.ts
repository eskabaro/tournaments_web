import { cache } from 'react'
import { HttpClient } from '@shared/configs'
import type { ITournament } from '..'
import { TOURNAMENT_CACHE } from '../const'

class TournamentApi extends HttpClient {
    getTournaments = cache((query?: string): Promise<Array<ITournament>> => {
        const params = query ? `?q=${encodeURIComponent(query)}` : ''
        return this.get(`/tournaments${params}`, {
            next: { tags: [TOURNAMENT_CACHE.tags.list] }
        })
    })

    getTournamentById = cache((id: string): Promise<ITournament> => {
        return this.get(`/tournaments/${id}`, {
            next: { tags: [TOURNAMENT_CACHE.tags.detail(id)] }
        })
    })

    joinTournament(id: string, isJoined: boolean): Promise<ITournament> {
        return this.patch(`/tournaments/${id}`, { isJoined })
    }
}

export const tournamentApi = new TournamentApi()
