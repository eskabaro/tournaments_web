import type { FC } from 'react'
import Text from '../text'
import s from './EmptyState.module.css'

interface Props {
    title?: string
    subtitle?: string
}

const EmptyState: FC<Props> = ({ title = 'No Data', subtitle = 'There is no data' }) => {
    return (
        <div className={s.main}>
            <Text as='h1'>{title}</Text>
            <Text>{subtitle}</Text>
        </div>
    )
}

export default EmptyState
