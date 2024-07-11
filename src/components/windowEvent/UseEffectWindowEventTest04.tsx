import { useEffect, useRef, useState } from 'react'

const UseEffectWindowEventTest04 = () => {
  const [key, setKey] = useState('init')
  const handleMouseUpRef = useRef<() => void>(() => {})

  handleMouseUpRef.current = () => {
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
    const handleMouseUp = () => handleMouseUpRef.current()
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      console.log('unset mouseup event')
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div>
      <h1>04. 핸들러를 ref로 관리</h1>
      <h2>{key}</h2>
    </div>
  )
}

export default UseEffectWindowEventTest04
