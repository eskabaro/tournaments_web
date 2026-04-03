'use client'
import type { FC } from 'react'
import type { ErrorProps } from '@screens/error'
import Error from '@screens/error'

const ErrorPage: FC<ErrorProps> = (props) => <Error {...props} />
export default ErrorPage
