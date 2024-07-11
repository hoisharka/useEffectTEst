import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home.tsx'
import UseEffectTest01 from './components/UseEffectTest01.tsx'
import UseEffectTest02 from './components/UseEffectTest02.tsx'
import UseEffectTest03 from './components/UseEffectTest03.tsx'
import UseEffectTest04 from './components/UseEffectTest04.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test01" element={<UseEffectTest01 />} />
      <Route path="/test02" element={<UseEffectTest02 />} />
      <Route path="/test03" element={<UseEffectTest03 />} />
      <Route path="/test04" element={<UseEffectTest04 />} />
    </Routes>
  )
}

export default App
