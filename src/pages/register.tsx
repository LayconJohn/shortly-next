import Button from "@/components/form/Button"
import styles from "@/styles/Form.module.css"
import { Inter } from 'next/font/google'
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        email: "",

    });

    function handleChange(e: { target: { name: string; value: string; }; }) {
        setValuesForm({...valuesForm, [e.target.name]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        toast("Em breve...", toastOptions)
    }

    return (
        <div className={`${styles.cardContainer} ${inter.className}`}>
             <h1 className={`${styles.cardTitle} ${inter.className}`}>Register</h1>
             <form onSubmit={handleSubmit}>
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="text"
                    placeholder="Username"
                    min="4"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="text"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className={`${styles.cardInput} ${inter.className}`} 
                    type="password"
                    placeholder="Password"
                    min="6"
                    onChange={(e) => handleChange(e)}
                />
                <Button />
             </form>
            <ToastContainer />
        </div>
    )
}