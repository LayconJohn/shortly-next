import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Button() {
    return (
        <button className={`${styles.cardButton} ${inter.className}`} type="submit">
            Clique aqui
        </button>
    )
}