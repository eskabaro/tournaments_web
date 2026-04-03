'use server'
import { cacheLife, cacheTag, revalidateTag } from 'next/cache'
import { notFound } from 'next/navigation'
import { HttpError } from '@shared/configs'
import { tournamentApi } from '../api'
import { TOURNAMENT_CACHE } from '../const'

const getCachedTournament = async (id: string) => {
    'use cache'
    cacheLife(TOURNAMENT_CACHE.profiles.detail)
    cacheTag(TOURNAMENT_CACHE.tags.detail(id))

    return tournamentApi.getTournamentById(id)
}

export const getTournament = async (id: string) => {
    try {
        return await getCachedTournament(id)
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) notFound()
        throw error
    }
}

export const getSafeTournament = async (id: string) => {
    try {
        return await getCachedTournament(id)
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) return null
        throw error
    }
}

export const getTournaments = async (query?: string) => {
    'use cache'
    cacheLife(TOURNAMENT_CACHE.profiles.list)
    cacheTag(TOURNAMENT_CACHE.tags.list)

    return tournamentApi.getTournaments(query)
}

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
