import { useEffect, useRef } from 'react'

export const useDebounce = (callback: () => void, delay: number, deps: Array<unknown>) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const callbackRef = useRef(callback)
    const isFirstRender = useRef(true)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)

        return () => clearTimeout(timeoutRef.current!)
    }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
