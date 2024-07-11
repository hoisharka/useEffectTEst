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
      <h1>01. window.addEventListener 의 이벤트 핸들러에선 state 갱신이 안됨</h1>
      <h2>{key}</h2>
    </div>
  )
}

export default UseEffectWindowEventTest01
