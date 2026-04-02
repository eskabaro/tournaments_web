import Link from 'next/link'
import type { FC } from 'react'
import { ROUTES } from '@shared/const/routes'
import { tournamentApi } from '@entities/tournament'

const Home: FC = async () => {
    const data = await tournamentApi.getTournaments()

    return (
        <div>
            Home
            <div style={{ display: 'flex', gap: 12 }}>
                {data.map((item) => (
                    <Link key={item.id} href={ROUTES.tournament(item.id)}>
                        {item.game}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home
