import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface IButtonProps {
    text: string
    disabled: boolean
}

export default function Button( {text, disabled}: IButtonProps ) {
    return (
        <div className={`${styles.cardButtonContainer}`}>
            <button className={`${styles.cardButton} ${inter.className}`} type="submit" disabled={disabled}>
                {text}
            </button>
        </div>
    )
}