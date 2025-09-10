import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksApp } from './05-useReducer/TaskApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksApp/>
  </StrictMode>,
)
