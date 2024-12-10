import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HamburgerProvider } from './contexts/HamburgerContext.jsx'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <HamburgerProvider>

        <App />

      </HamburgerProvider>
    </BrowserRouter>
  </StrictMode >
)


