import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LenisProvider from './hooks/LenisProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <LenisProvider>
        <App />
      </LenisProvider>
    </StrictMode>
  </BrowserRouter>
)
