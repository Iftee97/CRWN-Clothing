import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './components/navigation/navigation.component'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
