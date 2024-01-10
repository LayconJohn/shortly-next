'use client'

import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const inter = Inter({ subsets: ['latin'] })

interface IButtonProps {
    text: string
    disabled: boolean
}

type SubmitProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button( props: SubmitProps ) {
    const { disabled, ...otherProps} = props;
    const status = useFormStatus()
    return (
        <div className={`${styles.cardButtonContainer}`}>
            <button {...otherProps} className={`${styles.cardButton} ${inter.className}`} disabled={status.pending || disabled} />
        </div>
    )
}