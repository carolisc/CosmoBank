import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.scss' //não achou
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} /> {/* it's mandatory to say what's the router={} parameter*/}
  </React.StrictMode>,
)
