import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './router/RouterApp'
import { PasswordProvider } from './context/PasswordContext'
import { PreciosProvider } from "./context/PreciosContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordProvider>
      <PreciosProvider>
        <RouterApp />
      </PreciosProvider>
    </PasswordProvider>
  </StrictMode>
)