import type { FC } from 'react'
import Skeleton from '@shared/ui/skeleton'
import s from './Loading.module.css'

const Loading: FC = () => {
    return (
        <div className={s.main}>
            <Skeleton height={38} className={s.inputSkeleton} />
            <Skeleton height={38} width={38} className={s.buttonSkeleton} />
        </div>
    )
}

export default Loading
