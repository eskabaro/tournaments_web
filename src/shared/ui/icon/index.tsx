'use client'
import type { FC, SVGProps } from 'react'
import { COLORS, type ColorsType } from '@shared/const/colors'
import type { IconsType } from '@shared/const/icons'
import { ICONS } from '@shared/const/icons'
import classnames from '@shared/utils/classnames'

interface Props extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

const Icon: FC<Props> = ({ name, color, className, ...svgProps }) => {
    const Svg = ICONS[name]

    return <Svg className={classnames(color && COLORS[color], className)} {...svgProps} />
}

export default Icon
