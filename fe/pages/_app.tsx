import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, baseTheme } from '@chakra-ui/react'

const colors = {
  initialColorMode: "dark",
}
const fonts = {
  body:"'Quicksand',sans-serif",
}
const theme = extendTheme({ colors, fonts })

export default function App({ Component, pageProps }: AppProps) {
return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
