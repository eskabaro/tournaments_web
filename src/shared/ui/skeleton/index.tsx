import type { ComponentProps, CSSProperties, FC } from 'react'
import classnames from '@shared/utils/classnames'
import s from './Skeleton.module.css'

interface SkeletonPropsType extends ComponentProps<'span'> {
    width?: CSSProperties['width']
    height?: CSSProperties['height']
    circle?: boolean
}

const Skeleton: FC<SkeletonPropsType> = ({ width, height, circle, className, ...rest }) => {
    return <span className={classnames(s.main, circle && s.circle, className)} style={{ width, height }} {...rest} />
}

export default Skeleton
