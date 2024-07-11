const Home = () => {
  console.log('Home')
  return (
    <div>
      <h1>UseEffectTest</h1>
      <ul>
        <li>
          <a href={`/test01`}>01. window.addEventListener 의 이벤트 핸들러에선 state 갱신이 안됨</a>
        </li>
        <li>
          <a href={`/test02`}>02. state에 대응되는 ref사용하여 대응 </a>
        </li>
        <li>
          <a href={`/test03`}>03. useEffect 의존성으로 솔루션 모색</a>
        </li>
        <li>
          <a href={`/test04`}>04. 핸들러를 ref로 관리</a>
        </li>
      </ul>
    </div>
  )
}

export default Home
