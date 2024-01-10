import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendBaseTheme  } from '@chakra-ui/react'
import NavBar from '@/components/navbar/Navbar'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <NavBar profileImage={''} />
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}
