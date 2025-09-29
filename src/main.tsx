import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster, toast } from 'sonner'
import './index.css'
import ClientInformation from './08-use-suspense/ClientInformation.tsx'
import { getUserAction } from './08-use-suspense/api/get-user.action.ts'
/* import { InstagromApp } from './07-useOptimistic/InstagromApp.tsx' */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl font-thin'>Cargando</h1>
      </div>
      }
    >
    <ClientInformation  getUser={ getUserAction(100)}/>
    </Suspense>
  </StrictMode>,
)
