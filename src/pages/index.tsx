import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const router = useRouter()
  const toastOptions = {
    autoClose: 30000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const [isLogged, setIsLogged] = useState<string | null>(null);

  useEffect(() => {
    if(!localStorage.getItem("app-user")) {
      toast("Realize o login para prosseguir...", toastOptions)
    } else {
      setIsLogged(localStorage.getItem("app-user"))
    }

  }, [])

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={`${styles.title}`}>Shortly</h1>
        <p className={`${styles.description}`}>Encurtador de Links</p>
        <ToastContainer />
      </main>
    </>
  )
}
