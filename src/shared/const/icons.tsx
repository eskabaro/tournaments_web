import type { SVGProps } from 'react'

export const ICONS = {
    loading: (props: SVGProps<SVGSVGElement>) => (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 16C6.801 16 5.648 15.741 4.572 15.23L5.429 13.423C6.235 13.806 7.1 14 8 14C11.309 14 14 11.309 14 8C14 4.691 11.309 2 8 2C4.691 2 2 4.691 2 8C2 8.901 2.194 9.766 2.578 10.572L0.772 11.431C0.26 10.354 0 9.2 0 8C0 3.589 3.589 0 8 0C12.411 0 16 3.589 16 8C16 12.411 12.411 16 8 16Z'
                fill='currentColor'
            />
        </svg>
    ),
    'x-mark': (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M18 6L6 18M6 6L18 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
} as const
export type IconsType = keyof typeof ICONS
