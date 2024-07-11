import { useEffect, useState } from 'react'

const UseEffectTest01 = () => {
  const [key, setKey] = useState('init')

  const handelMouseUp = () => {
    console.log(`[ handleMouseUp ] key: ${key}`)
  }
  const handleKeyup = (e) => {
    console.log('[ handleKeyup ]', e.key)
    setKey(e.key)
  }

  useEffect(() => {
    console.log('set keyup event')
    window.addEventListener('keyup', handleKeyup)
    return () => {
      console.log('unset keyup event')
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [])

  useEffect(() => {
    console.log('set mouseup event')
    window.addEventListener('mouseup', handelMouseUp)
    return () => {
      console.log('unset mouseup event')
      window.removeEventListener('mouseup', handelMouseUp)
    }
  }, [handelMouseUp])

  return (
    <div>
      <h1>03. useEffect 의존성으로 솔루션 모색</h1>
      <h2>{key}</h2>
    </div>
  )
}

export default UseEffectTest01
