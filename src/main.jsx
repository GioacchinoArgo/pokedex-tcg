import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HamburgerProvider } from './contexts/HamburgerContext.jsx'
import './css/index.css'
import App from './App.jsx'
import { LoaderProvider } from './contexts/LoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LoaderProvider>
        <HamburgerProvider>

          <App />

        </HamburgerProvider>
      </LoaderProvider>
    </BrowserRouter>
  </StrictMode >
)


