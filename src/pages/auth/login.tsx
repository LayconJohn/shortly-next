import Button from "@/components/form/Button"
import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import { shortlyService } from "@/services/shortly";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
 
    const toastOptions = {
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      };

    const [valuesForm, setValuesForm] = useState({
        email: "",
        password: ""
    });

    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    function handleChange(e: { target: { name: string; value: string; }; }) {
        setValuesForm({...valuesForm, [e.target.name]: e.target.value});
    }

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

    function resetForm() {
        setValuesForm({
            password: "",
            email: "",
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsDisabled(true)

        try {
            await shortlyService.login(valuesForm)
            toast(`Bem vindo`, toastOptions)
        } catch (error) {
            if (error instanceof Error) {
                handleError(error)
            }
        }
        resetForm()
        setIsDisabled(false)
        
    }

    return(
        <div  className={`${styles.cardContainer} ${inter.className}`}>
            <h1 className={`${styles.cardTitle} ${inter.className}`}>Login</h1>
            <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="emal"
                    name="email"
                    placeholder="Email"
                    value={valuesForm.email}
                    min="4"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="password"
                    name="password"
                    placeholder="Password"
                    min="6"
                    value={valuesForm.password}
                    onChange={(e) => handleChange(e)}
                />
                <Button text="Entrar" disabled={isDisabled}/>
            </form>
            <ToastContainer />
        </div>
        
    )
}