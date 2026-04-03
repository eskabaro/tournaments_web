import type { FC } from 'react'
import Skeleton from '@shared/ui/skeleton'
import s from './PageLoader.module.css'

const SKELETON_COUNT = 9

const PageLoader: FC = () => {
    return (
        <div className={s.grid}>
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <div key={i} className={s.card}>
                    <Skeleton width='100%' className={s.image} />
                    <div className={s.body}>
                        <Skeleton width='75%' height={20} />
                        <Skeleton width='50%' height={20} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PageLoader
