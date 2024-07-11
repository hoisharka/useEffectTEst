import { useEffect, useRef, useState } from 'react'

const UseEffectRenderTest01 = () => {
  console.log('[ UseEffectRenderTest01 ]')
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
    console.log('[ useEffect ] 의존성 key', key)
  }, [key])

  useEffect(() => {
    console.log(`[ useEffect ] 의존성 key + setKey('init')`, key)
    setKey('init')
  }, [key])

  return (
    <div>
      <h1>01. useEffect와 랜더링의 관계</h1>
      <h2>{key}</h2>
      <p>useEffect로 인해 랜더링이 다시 발생하는 경우는 useEffect안에서 state값을 바꿀 때이다.</p>
    </div>
  )
}

export default UseEffectRenderTest01
