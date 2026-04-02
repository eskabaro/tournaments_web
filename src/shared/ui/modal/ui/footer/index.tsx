import type { ComponentProps, FC } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Footer.module.css'

interface Props extends ComponentProps<'div'> {}

const Footer: FC<Props> = ({ className, children }) => {
    return <div className={classnames(s.main, className)}>{children}</div>
}

export default Footer
