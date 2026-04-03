import type { FC } from 'react'
import Skeleton from '@shared/ui/skeleton'
import s from './Loading.module.css'

const Loading: FC = () => {
    return (
        <div className={s.main}>
            <Skeleton className={s.inputSkeleton} />
            <Skeleton className={s.buttonSkeleton} />
        </div>
    )
}

export default Loading
