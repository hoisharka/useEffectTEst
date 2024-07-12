import { useEffect, useState } from 'react'

const UseEffectWindowEventTest01 = () => {
  const [key, setKey] = useState('init')

  const handleMouseUp = () => {
    console.log('[ handleMouseUp ] key', key)
  }
  const handleKeyup = (e) => {
    console.log('[ handleKeyup ]', e.key)
    setKey(e.key)
  }

  useEffect(() => {
    console.log('set event')
    window.addEventListener('keyup', handleKeyup)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      console.log('unset event')
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [])

  return (
    <div>
      <h1>01. useEffect와 window.addEventListener 사용시 문제점</h1>
      <h2>{key}</h2>
    </div>
  )
}

export default UseEffectWindowEventTest01
