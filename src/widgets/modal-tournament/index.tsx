import { notFound } from 'next/navigation'
import type { FC } from 'react'
import Modal from '@shared/ui/modal'
import { tournamentApi } from '@entities/tournament'

export interface ModalTournamentProps {
    params: Promise<{ id: string }>
}

const ModalTournament: FC<ModalTournamentProps> = async ({ params }) => {
    const { id } = await params
    const data = await tournamentApi.getTournamentById(id).catch(notFound)

    return (
        <Modal>
            <h2 className='text-[var(--color-text-primary)] text-xl font-semibold'>{data.game}</h2>
        </Modal>
    )
}

export default ModalTournament
