import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MemoCounter from './06-memos/MemoCounter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoCounter />
  </StrictMode>,
)
