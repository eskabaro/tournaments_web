import type { FC } from 'react'
import EmptyState from '@shared/ui/empty-state'
import type { ITournament } from '@entities/tournament'
import { TournamentCard } from '@entities/tournament'
import s from './Home.module.css'

interface Props {
    data: Array<ITournament>
}

const Home: FC<Props> = ({ data }) => {
    if (!data?.length) return <EmptyState />

    return (
        <ul className={s.grid} aria-label='Tournaments list'>
            {data.map((item) => (
                <li key={item.id}>
                    <TournamentCard {...item} />
                </li>
            ))}
        </ul>
    )
}

export default Home
