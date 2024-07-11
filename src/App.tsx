import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home.tsx'
import UseEffectWindowEventTest01 from './components/windowEvent/UseEffectWindowEventTest01.tsx'
import UseEffectWindowEventTest02 from './components/windowEvent/UseEffectWindowEventTest02.tsx'
import UseEffectWindowEventTest03 from './components/windowEvent/UseEffectWindowEventTest03.tsx'
import UseEffectWindowEventTest04 from './components/windowEvent/UseEffectWindowEventTest04.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/window-event-test01" element={<UseEffectWindowEventTest01 />} />
      <Route path="/window-event-test02" element={<UseEffectWindowEventTest02 />} />
      <Route path="/window-event-test03" element={<UseEffectWindowEventTest03 />} />
      <Route path="/window-event-test04" element={<UseEffectWindowEventTest04 />} />
      <Route path="/render-test01" element={<UseEffectWindowEventTest04 />} />
    </Routes>
  )
}

export default App
