import type { ComponentProps, FC } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Body.module.css'

interface Props extends ComponentProps<'div'> {}

const Body: FC<Props> = ({ className, children }) => {
    return <div className={classnames(s.main, className)}>{children}</div>
}

export default Body
