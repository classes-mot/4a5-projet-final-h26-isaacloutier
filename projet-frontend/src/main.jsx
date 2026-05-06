import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../src/traduction/i18n/i18n.jsx";
//mongodb+srv://2496147:28S3pt3mbr32007!@clusterprojetfinal.w3ka0kp.mongodb.net/?appName=ClusterProjetFinal
//https://foura5-projet-final-h26-isaacloutier-4.onrender.com
//https://woofontrency.onrender.com

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
