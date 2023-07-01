import { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './contexts/user.context'

import Home from './routes/home/home.component'
import Navigation from './components/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import Category from './routes/category/category.component'

export default function App() {
  const { authIsReady, user } = useContext(UserContext)

  // console.log('STRIPE_PUBLISHABLE_KEY: >>>>>>>>>', import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY)
  // console.log('STRIPE_SECRET_KEY: >>>>>>>>>', import.meta.env.VITE_APP_STRIPE_SECRET_KEY)

  // useEffect(() => {
  //   async function getServerlessResponse() {
  //     const response = await fetch('https://crwn-clothing-silk.vercel.app/api/hello')
  //     if (response.ok && response.status === 200) {
  //       const data = await response.json()
  //       console.log('data: >>>>>>>>>', data)
  //     }
  //   }
  //   getServerlessResponse()
  // }, [])

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
            <Route path="/shop/:category" element={<Category />} />
          </Routes>
        </>
      )}
    </>
  )
}

// todo: associate a user (userId) with a cart in the database on checkout
