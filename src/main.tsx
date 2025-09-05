import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrafficLightWithHook/>
  </StrictMode>,
)
