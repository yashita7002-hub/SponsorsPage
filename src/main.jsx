import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sponsors from './Sponsors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sponsors />
  </StrictMode>,
)
