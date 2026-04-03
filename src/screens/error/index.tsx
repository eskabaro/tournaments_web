'use client'
import type { FC } from 'react'
import s from './ErrorPage.module.css'

export interface ErrorProps {
    error: Error
    reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
    return (
        <div className={s.main}>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}

export default Error
