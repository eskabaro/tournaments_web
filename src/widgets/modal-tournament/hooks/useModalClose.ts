import { useRouter } from 'next/navigation'
import type { ModalNavType } from '../types'

export const useModalClose = (type: ModalNavType) => {
    const router = useRouter()
    return () => (type === 'back' ? router.back() : router.replace('/'))
}
