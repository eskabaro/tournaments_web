import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginPrettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default defineConfig([
    ...nextVitals,
    prettierConfig,
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
    {
        plugins: {
            prettier: pluginPrettier,
            import: pluginImport,
            'unused-imports': unusedImports
        },
        rules: {
            'no-console': 'warn',
            'no-floating-decimal': 'error',
            'no-sequences': 'error',
            curly: 'off',
            'no-lonely-if': 'error',
            'one-var-declaration-per-line': 'error',
            '@next/next/no-img-element': 'error',
            'func-style': 'error',
            'no-debugger': 'warn',
            'no-empty': 'error',
            semi: ['warn', 'never'],
            'space-in-parens': 'error',
            'react/jsx-wrap-multilines': 'off',
            'react/no-unescaped-entities': 'off',
            'no-unused-vars': 'off',
            quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
            'array-callback-return': 'off',
            'prettier/prettier': [
                'warn',
                {
                    endOfLine: 'auto',
                    printWidth: 250,
                    trailingComma: 'none',
                    tabWidth: 4,
                    semi: false,
                    singleQuote: true,
                    jsxSingleQuote: true,
                    arrowParens: 'always',
                    bracketSameLine: false
                }
            ],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    pathGroups: [
                        { pattern: '@shared/**', group: 'internal', position: 'after' },
                        { pattern: '@entities/**', group: 'internal', position: 'after' },
                        { pattern: '@features/**', group: 'internal', position: 'after' },
                        { pattern: '@widgets/**', group: 'internal', position: 'after' },
                        { pattern: '@screens/**', group: 'internal', position: 'after' },
                        { pattern: '@app/**', group: 'internal', position: 'after' }
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    'newlines-between': 'never',
                    alphabetize: { order: 'asc', caseInsensitive: true }
                }
            ],
            'react-hooks/set-state-in-effect': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@typescript-eslint': tseslint.plugin
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: { project: './tsconfig.json' }
        },
        rules: {
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': 'error'
        }
    }
])
