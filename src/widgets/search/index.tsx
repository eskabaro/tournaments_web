'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import type { FC } from 'react'
import { useState } from 'react'
import { useDebounce } from '@shared/hooks/useDebounce'
import Button from '@shared/ui/button'
import Input from '@shared/ui/input'
import s from './Search.module.css'

const Search: FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [query, setQuery] = useState(searchParams?.get('q') ?? '')

    useDebounce(
        () => {
            const params = new URLSearchParams()
            if (query.trim()) params.set('q', query.trim())
            const qs = params.toString()
            router.push(qs ? `/?${qs}` : '/')
        },
        400,
        [query]
    )

    return (
        <section className={s.main}>
            <Input value={query} onChange={(e) => setQuery(e.target.value)} variant='small' icon='search' placeholder='Search...' />
            <Button onClick={() => setQuery('')} variant='square' icon='x-mark' aria-label='Clear search' />
        </section>
    )
}

export default Search
