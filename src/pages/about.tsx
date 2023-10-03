import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Olá</h1>
      </main>
    </>
  )
}
