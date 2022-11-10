import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CssBaseline/>
    <Navbar/>
  </React.StrictMode>
)
