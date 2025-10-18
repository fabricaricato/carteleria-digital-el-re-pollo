import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './router/RouterApp'
import { PasswordProvider } from './context/PasswordContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordProvider>
      <RouterApp />
    </PasswordProvider>
  </StrictMode>,
)