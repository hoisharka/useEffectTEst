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

      <p>
        keyup 할 때마다 key state는 변경되고 리랜더 되며 handleMouseUp도 갱신된다.
        <br />
        갱신된 handleMouseUp은 mouseup 리스너를 등록한 useEffect를 다시 돌린다.
        <br />
        그래서 갱신된 key state가 적용된 handelMouseUp가 다시 등록되고 mouseup 하면 갱신된 key
        state가 콘솔로 찍힌다.
      </p>
    </div>
  )
}

export default UseEffectTest01
