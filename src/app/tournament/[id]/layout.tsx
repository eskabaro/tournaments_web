'use client'
import type { FC, PropsWithChildren } from 'react'
import ModalTournament from '@widgets/modal-tournament'

const ModalTournamentLayout: FC<PropsWithChildren> = ({ children }) => {
    return <ModalTournament type='replace'>{children}</ModalTournament>
}

export default ModalTournamentLayout
