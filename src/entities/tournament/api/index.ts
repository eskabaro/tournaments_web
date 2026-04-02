import { cache } from 'react'
import { HttpClient } from '@shared/configs'
import type { ITournament } from '..'

class TournamentApi extends HttpClient {
    getTournaments = cache((): Promise<Array<ITournament>> => {
        return this.get('/tournaments', {
            next: { tags: ['tournaments'] }
        })
    })

    getTournamentById = cache((id: string): Promise<ITournament> => {
        return this.get(`/tournaments/${id}`, {
            next: { tags: [`tournament-${id}`] }
        })
    })
}

export const tournamentApi = new TournamentApi()
