import { create } from 'zustand'

interface SearchPendingState {
    isPending: boolean
    setIsPending: (isPending: boolean) => void
}

export const useSearchStore = create<SearchPendingState>()((set) => ({
    isPending: false,
    setIsPending: (isPending) => set({ isPending })
}))
