export const COLORS = {
    bg: 'text-bg',
    'bg-secondary': 'text-bg-secondary',
    'bg-tertiary': 'text-bg-tertiary',
    'text-primary': 'text-text-primary',
    'text-secondary': 'text-text-secondary',
    'text-placeholder': 'text-text-placeholder',
    'text-disabled': 'text-text-disabled',
    accent: 'text-accent',
    'accent-hover': 'text-accent-hover',
    'accent-subtle': 'text-accent-subtle',
    error: 'text-error',
    'error-subtle': 'text-error-subtle',
    warning: 'text-warning',
    'warning-subtle': 'text-warning-subtle',
    success: 'text-success',
    'success-subtle': 'text-success-subtle'
} as const
export type ColorsType = keyof typeof COLORS
