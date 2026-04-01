export const THEME = {
    dark: 'dark',
    light: 'light',
    system: 'system',
    neon: 'neon'
} as const
export type ThemeType = (typeof THEME)[keyof typeof THEME]
export const THEMES = Object.values(THEME) satisfies ThemeType[]
