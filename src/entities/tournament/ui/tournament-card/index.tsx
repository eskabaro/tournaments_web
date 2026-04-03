import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { ROUTES } from '@shared/const/routes'
import Text from '@shared/ui/text'
import type { ITournament } from '@entities/tournament'
import s from './TournamentCard.module.scss'

const TournamentCard: FC<ITournament> = ({ id, title, image, isJoined }) => {
    return (
        <Link href={ROUTES.tournament(id)}>
            <article className={s.card}>
                <Image src={image} width={400} height={225} className={s.image} alt={title} />
                <div className={s.body}>
                    <Text as='h3' size='sm' weight='semibold' className={s.title}>
                        {title}
                    </Text>
                    {isJoined && <span className={s.badge}>Joined</span>}
                </div>
            </article>
        </Link>
    )
}

export default TournamentCard
