import type { FC } from 'react'
import Text from '@shared/ui/text'
import s from './Footer.module.css'

const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <Text as='span'>Created by OK</Text>
            </div>
        </footer>
    )
}

export default Footer
