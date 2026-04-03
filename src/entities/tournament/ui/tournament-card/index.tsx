import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { ROUTES } from '@shared/const/routes'
import Text from '@shared/ui/text'
import classnames from '@shared/utils/classnames'
import type { ITournament } from '@entities/tournament'
import s from './TournamentCard.module.css'

interface Props extends ITournament {}

const TournamentCard: FC<Props> = ({ id, title, image, description, isJoined }) => {
    return (
        <article className={s.card}>
            <Image src={image} width={400} height={225} className={s.image} alt={title} priority />
            <div className={s.body}>
                <Link className={s.typography} href={ROUTES.tournament(id)}>
                    <Text as='h3' size='lg' weight='semibold' className={s.text}>
                        {title}
                    </Text>
                    <Text as='p' size='sm' title={description} className={s.text}>
                        {description}
                    </Text>
                </Link>
                <Text as='span' className={classnames(s.badge, isJoined ? s.joined : s.notJoined)}>
                    {isJoined ? 'Joined' : 'Not joined'}
                </Text>
            </div>
        </article>
    )
}

export default TournamentCard
