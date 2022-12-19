import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/sora/variable.css'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {
    body: 'SoraVariable',
  },
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
