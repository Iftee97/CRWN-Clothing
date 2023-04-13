import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './components/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  )
}
