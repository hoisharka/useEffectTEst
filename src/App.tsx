import { Routes, Route } from 'react-router-dom'
import './App.css'
import UseEffectTest01 from './components/UseEffectTest01.tsx'
import Home from './components/Home.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test01" element={<UseEffectTest01 />} />
    </Routes>
  )
}

export default App
