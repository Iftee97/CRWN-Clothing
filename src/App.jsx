import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
