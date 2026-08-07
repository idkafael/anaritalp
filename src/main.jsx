import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EgitoApp from './EgitoApp.jsx'
import DownsellScreen from './screens/DownsellScreen.jsx'
import VSLScreen from './screens/VSLScreen.jsx'

const path = window.location.pathname.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/egito' ? <EgitoApp /> :
     path === '/downsell' ? <DownsellScreen /> :
     path === '/vsl' ? <VSLScreen /> :
     <App />}
  </StrictMode>,
)
