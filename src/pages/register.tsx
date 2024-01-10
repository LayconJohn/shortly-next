import Button from "@/components/form/Button"
import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "@/components/form/Form";
import { registerAction } from "@/actions/auth"

const inter = Inter({ subsets: ['latin'] })

export default function Register() {

    const toastOptions = {
        autoClose: 7500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };


    function handleError(error: Error) {
        const code = Number(error.message.slice(-3))
            switch (code) {
                case 422:
                    toast.error("Preencha os campos corretamente")
                    break
                case 409: 
                    toast.error("Usuário já cadastrado")
                    break
                default:
                    toast.error("Ocorreu um erro inesperado")     
            }        
    }

    return (
        <div className={`${styles.cardContainer} ${inter.className}`}>
             <h1 className={`${styles.cardTitle} ${inter.className}`}>Register</h1>
             <Form action={registerAction} className={`${styles.formContainer}`}>
                <input 
                    className={`${styles.cardInput}  ${inter.className}`} 
                    name="name"
                    type="text"
                    placeholder="Username"
                    min="4"
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    name="email"
                    type="text"
                    placeholder="Email"
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    name="password"
                    type="password"
                    placeholder="Password"
                    min="8"
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm Password"
                    min="8"
                />
                <Button type="submit" >
                    Registrar
                </Button>
             </Form>
            <ToastContainer />
        </div>
    )
}