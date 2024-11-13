import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { GifExpertApp } from './GifExpertApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp></GifExpertApp>
  </StrictMode>,
);
