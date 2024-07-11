const Home = () => {
  console.log('Home')
  return (
    <div>
      <h1>UseEffectTest</h1>

      <div>
        <h2>useEffect와 window.addEventListener</h2>
        <ul>
          <li>
            <a href={`/window-event-test01`}>
              01. window.addEventListener 의 이벤트 핸들러에선 state 갱신이 안됨
            </a>
          </li>
          <li>
            <a href={`/window-event-test02`}>02. state에 대응되는 ref사용하여 대응 </a>
          </li>
          <li>
            <a href={`/window-event-test03`}>03. useEffect 의존성으로 솔루션 모색</a>
          </li>
          <li>
            <a href={`/window-event-test04`}>04. 핸들러를 ref로 관리</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>useEffect와 랜더링의 관계</h2>
        <ul>
          <li>
            <a href={`/render-test01`}>01. useEffect와 랜더링의 관계</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
