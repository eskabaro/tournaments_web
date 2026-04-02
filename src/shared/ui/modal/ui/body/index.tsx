import type { FC, PropsWithChildren } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Body.module.css'

interface Props extends PropsWithChildren {
    style?: string
}

const Body: FC<Props> = ({ style, children }) => {
    return <div className={classnames(s.main, style)}>{children}</div>
}

export default Body
