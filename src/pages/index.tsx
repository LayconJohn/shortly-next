import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <h1>Hello Next App</h1>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

      </main>
    </>
  )
}