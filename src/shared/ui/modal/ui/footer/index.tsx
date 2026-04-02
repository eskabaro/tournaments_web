import type { FC, PropsWithChildren } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Footer.module.css'

interface Props extends PropsWithChildren {
    style?: string
}

const Footer: FC<Props> = ({ style, children }) => {
    return <div className={classnames(s.main, style)}>{children}</div>
}

export default Footer
