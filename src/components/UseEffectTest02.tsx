import { useEffect, useRef, useState } from 'react'

const UseEffectTest02 = () => {
  const [key, setKey] = useState('init')
  const keyRef = useRef(key)

  const handelMouseUp = () => {
    console.log(`[ handleMouseUp ] key: ${key}, keyRef.current:; ${keyRef.current}`)
  }
  const handleKeyup = (e) => {
    console.log('[ handleKeyup ]', e.key)
    setKey(e.key)
    keyRef.current = e.key
  }

  useEffect(() => {
    console.log('set event')
    window.addEventListener('keyup', handleKeyup)
    window.addEventListener('mouseup', handelMouseUp)
    return () => {
      console.log('unset event')
      window.removeEventListener('mouseup', handelMouseUp)
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [])

  return (
    <div>
      <h1>02. state에 대응되는 ref사용하여 대응</h1>
      <h2>{key}</h2>
    </div>
  )
}

export default UseEffectTest02
