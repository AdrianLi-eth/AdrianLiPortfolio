import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { initRouter } from './lib/router'
import './index.css'

initRouter()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
