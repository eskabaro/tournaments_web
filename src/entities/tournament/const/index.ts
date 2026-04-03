export const TOURNAMENT_CACHE = {
    profiles: {
        list: 'tournaments',
        detail: 'tournament'
    },
    tags: {
        list: 'tournaments',
        detail: (id: string) => `tournament-${id}`
    }
} as const
