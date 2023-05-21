import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import { UserContextProvider } from './contexts/user.context'
import { ProductsContextProvider } from './contexts/products.context'
import { CartContextProvider } from './contexts/cart.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
