import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { ROUTES } from '@shared/const/routes'
import Text from '@shared/ui/text'
import type { ITournament } from '@entities/tournament'
import s from './TournamentCard.module.css'

const TournamentCard: FC<ITournament> = ({ id, title, image, description, isJoined }) => {
    return (
        <article className={s.card}>
            <Image src={image} width={400} height={225} className={s.image} alt={title} />
            <div className={s.body}>
                <Link className={s.typography} href={ROUTES.tournament(id)}>
                    <Text as='h3' size='lg' weight='semibold' className={s.text}>
                        {title}
                    </Text>
                    <Text size='sm' weight='semibold' title={description} className={s.text}>
                        {description}
                    </Text>
                </Link>
                <span className={s.badge}>{isJoined ? 'Joined' : 'Not joined'}</span>
            </div>
        </article>
    )
}

export default TournamentCard
