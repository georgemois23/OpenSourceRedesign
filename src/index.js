import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import theme from './theme/theme.js'
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </BrowserRouter>
  </StrictMode>,
)
