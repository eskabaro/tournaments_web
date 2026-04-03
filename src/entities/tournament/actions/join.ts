'use server'
import { revalidateTag } from 'next/cache'
import { tournamentApi } from '../api'
import { TOURNAMENT_CACHE } from '../const'

export const join = async (id: string, isJoined: boolean) => {
    try {
        await tournamentApi.joinTournament(id, isJoined)

        revalidateTag(TOURNAMENT_CACHE.tags.detail(id), TOURNAMENT_CACHE.profiles.detail)
        revalidateTag(TOURNAMENT_CACHE.tags.list, TOURNAMENT_CACHE.profiles.list)

        return { success: true as const }
    } catch {
        return { success: false as const, message: 'Failed to join tournament' }
    }
}
