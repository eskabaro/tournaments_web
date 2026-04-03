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
    sun: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <g clipPath='url(#clip0_1027_7341)'>
                <path
                    d='M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
            <defs>
                <clipPath id='clip0_1027_7341'>
                    <rect width='24' height='24' fill='currentColor' />
                </clipPath>
            </defs>
        </svg>
    ),
    moon: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41101 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99271 10.5121 3.57345 8.9043C4.1542 7.29651 5.18082 5.88737 6.53321 4.84175C7.88559 3.79614 9.50779 3.15731 11.21 3C10.2134 4.34827 9.73384 6.00945 9.85852 7.68141C9.98321 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9905 14.2662 19.6517 13.7866 21 12.79Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    ),
    zap: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M13 2L3 14H12L11 22L21 10H12L13 2Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    monitor: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M8 21H16M12 17V21M4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    'x-mark': (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M18 6L6 18M6 6L18 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    search: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    success: (props: SVGProps<SVGSVGElement>) => (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M22 4L12 14.01L9 11.01' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    error: (props: SVGProps<SVGSVGElement>) => (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M15 9L9 15M9 9L15 15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
} as const
export type IconsType = keyof typeof ICONS
