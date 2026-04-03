'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { startTransition, type FC } from 'react'
import { useEffect, useState } from 'react'
import { useDebounce } from '@shared/hooks/useDebounce'
import { useSearchStore } from '@shared/state/useSearchStore'
import Button from '@shared/ui/button'
import Input from '@shared/ui/input'
import classnames from '@shared/utils/classnames'
import Loading from './components/loading'
import PendingOverlay from './components/pending-overlay'
import s from './Search.module.css'

const Search: FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [query, setQuery] = useState(searchParams?.get('q') ?? '')
    const isPending = useSearchStore((state) => state.isPending)
    const setIsPending = useSearchStore((state) => state.setIsPending)

    useDebounce(
        () => {
            const params = new URLSearchParams()
            if (query.trim()) params.set('q', query.trim())
            const qs = params.toString()
            setIsPending(true)
            startTransition(() => {
                router.push(qs ? `/?${qs}` : '/')
            })
        },
        400,
        [query]
    )

    useEffect(() => {
        setIsPending(false)
    }, [searchParams, setIsPending])

    return (
        <section className={s.main}>
            <Input value={query} onChange={(e) => setQuery(e.target.value)} iconClassName={classnames(isPending && s.spin)} variant='small' icon={isPending ? 'loading' : 'search'} placeholder='Search...' />
            <Button onClick={() => setQuery('')} variant='square' icon='x-mark' aria-label='Clear search' title='Clear search' />
        </section>
    )
}

export { PendingOverlay, Loading }
export default Search
