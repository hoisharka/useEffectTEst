const Home = () => {
  console.log('Home')
  return (
    <div>
      <h1>UseEffectTest</h1>
      <div>
        <a href={`/test01`}>01. window.addEventListener 의 이벤트 핸들러에선 state 갱신이 안됨. </a>
      </div>
    </div>
  )
}

export default Home
