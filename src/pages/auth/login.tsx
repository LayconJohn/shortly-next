import Button from "@/components/form/Button"
import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import { shortlyService } from "@/services/shortly";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Form from "@/components/form/Form";
import { loginAction } from "@/actions/auth";

const inter = Inter({ subsets: ['latin'] })

export default function Login() {

    return(
        <div  className={`${styles.cardContainer} ${inter.className}`}>
            <h1 className={`${styles.cardTitle} ${inter.className}`}>Login</h1>
            <Form action={loginAction} className={`${styles.formContainer}`}>
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="emal"
                    name="email"
                    placeholder="Email"
                    min="4"
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="password"
                    name="password"
                    placeholder="Password"
                    min="8"

                />
                <Button type="submit">
                    Entrar
                </Button>
            </Form>
            <ToastContainer />
        </div>
        
    )
}