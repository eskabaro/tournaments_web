'use client'
import type { FC, PropsWithChildren } from 'react'
import ModalTournament from '@widgets/modal-tournament'

const Layout: FC<PropsWithChildren> = ({ children }) => <ModalTournament type='back'>{children}</ModalTournament>
export default Layout
