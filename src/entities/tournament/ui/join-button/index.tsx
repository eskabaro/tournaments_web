'use client'
import { type FC, useState } from 'react'
import { Alert } from '@shared/state/useAlertStore'
import Button from '@shared/ui/button'
import { join } from '../../actions'

interface Props {
    tournamentId: string
    isJoined: boolean
}

const JoinButton: FC<Props> = ({ tournamentId, isJoined }) => {
    const [joined, setJoined] = useState(isJoined)
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        const nextJoined = !joined

        try {
            setIsLoading(true)
            setJoined(nextJoined)

            const result = await join(tournamentId, nextJoined)

            if (result.success) {
                const message = nextJoined ? 'You have joined the tournament' : 'You have left the tournament'
                Alert('success', message)
            } else {
                setJoined(!nextJoined)
                Alert('error', result.message)
            }
        } catch {
            setJoined(!nextJoined)
            Alert('error', 'Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button variant={joined ? 'border' : 'primary'} loading={isLoading} onClick={handleClick}>
            {joined ? 'Leave tournament' : 'Join tournament'}
        </Button>
    )
}

export default JoinButton
