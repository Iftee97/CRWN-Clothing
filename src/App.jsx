import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './context/user.context'

import Home from './routes/home/home.component'
import Navigation from './components/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'

export default function App() {
  const { authIsReady, user } = useContext(UserContext)

  return (
    <>
      {authIsReady && (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={user ? <Navigate to="/" /> : <Authentication />} /> {/* if user is logged in, redirect to home page */}
          </Routes>
        </>
      )}
    </>
  )
}
