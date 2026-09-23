import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context/AppProvider'
import App from './App'
import './styles/global.css'

const container = document.getElementById('root')
if (!container) throw new Error('#root não encontrado em index.html')

createRoot(container).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
