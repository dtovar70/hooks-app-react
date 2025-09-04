import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrafficLightWithEffect />
  </StrictMode>,
)
