
import { createRoot } from 'react-dom/client'

import Router from './router.tsx'

import "./styles/globals.css"

createRoot(document.getElementById('root')!).render(
  <Router/>,
)
