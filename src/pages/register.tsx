import Button from "@/components/form/Button"
import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { shortlyService } from "@/services/shortly";

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

    const [valuesForm, setValuesForm] = useState({
        name: "",
        password: "",
        confirmPassword: "",
        email: "",

    });

    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    function handleChange(e: { target: { name: string; value: string; }; }) {
        setValuesForm({...valuesForm, [e.target.name]: e.target.value});
    }

    function resetForm() {
        setValuesForm({
            name: "",
            password: "",
            email: "",
            confirmPassword: ""
        })
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

    function validForm() {    
        if (valuesForm.password !== valuesForm.confirmPassword) {
            toast.error("Senha e confirmar senha devem ser iguais")
            resetForm()
            return true;
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsDisabled(true)
        if (validForm()) return
        try {
            await shortlyService.register(valuesForm)
            toast(`Bem vindo ${valuesForm.name}`, toastOptions)
            localStorage.setItem("app-user", valuesForm.name)
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                handleError(error)
            }
        }
        resetForm()
        setIsDisabled(false)
    }

    return (
        <div className={`${styles.cardContainer} ${inter.className}`}>
             <h1 className={`${styles.cardTitle} ${inter.className}`}>Register</h1>
             <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
                <input 
                    className={`${styles.cardInput}  ${inter.className}`} 
                    name="name"
                    type="text"
                    placeholder="Username"
                    min="4"
                    value={valuesForm.name}
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    name="email"
                    value={valuesForm.email}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    name="password"
                    type="password"
                    value={valuesForm.password}
                    placeholder="Password"
                    min="6"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    name="confirmPassword"
                    value={valuesForm.confirmPassword}
                    type="password"
                    placeholder="confirm Password"
                    min="6"
                    onChange={(e) => handleChange(e)}
                />
                <Button text="Cadastrar" disabled={isDisabled}/>
             </form>
            <ToastContainer />
        </div>
    )
}