
import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/Navbar.css'
// import 'bootstrap/dist/css/bootstrap.css'
import './css/global.css'
import './css/list.css'
import './css/planetlist.css'
import './css/Home.css'
import './css/Fonts.css'
import './css/stars.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
