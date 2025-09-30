import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster, toast } from 'sonner'
import './index.css'
import { ProfessionalApp } from './09-useContext/ProfessionalApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <ProfessionalApp />
  </StrictMode>,
)
