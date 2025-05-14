import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <script src="./assets/vendor/preline/dist/preline.js"></script>
  </StrictMode>,
)
