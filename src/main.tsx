import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster, toast } from 'sonner'
import './index.css'
import ClientInformation from './08-use-suspense/ClientInformation.tsx'
/* import { InstagromApp } from './07-useOptimistic/InstagromApp.tsx' */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors/>
    <ClientInformation  id={100}/>
  </StrictMode>,
)
