import { useEffect, useRef } from 'react'

export const useDebounce = (callback: () => void, delay: number, deps: Array<unknown>) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        timeoutRef.current = setTimeout(callback, delay)

        return () => {
            if (!timeoutRef.current) return
            clearTimeout(timeoutRef.current)
        }
    }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
