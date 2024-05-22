import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainProvider from './context/MainProvider.jsx'
import WishlistProvider from './context/WishlistProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </MainProvider>
  </React.StrictMode>,
)
