import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './contexts/user.context'

import Home from './routes/home/home.component'
import Navigation from './components/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

export default function App() {
  const { authIsReady, user } = useContext(UserContext)

  return (
    <>
      {authIsReady && (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={user ? <Navigate to="/" /> : <Authentication />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </>
      )}
    </>
  )
}
