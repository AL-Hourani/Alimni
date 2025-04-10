
import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from '@heroui/react'
import './css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HeroUIProvider>
        <App />
     </HeroUIProvider>
  </StrictMode>,
)
