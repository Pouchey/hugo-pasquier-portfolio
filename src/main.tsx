import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '_style/global.css'
import '_style/animations.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
