import './App.css';
import React from 'react';
import Generator from "./components/Generator.js"


function App() {

  return (
    <div className="App">
      <div className="mainTitle">
        <p>
          <h1>'지지를 철회한다' 밈 생성기</h1>
          <h2>jiji-stop meme generator</h2>
        </p>
      </div>

      <Generator />

      <h3 className="titleBox">『오늘부로 지지를 철회한다.<br/>오늘부터 지지관계에서 벗어나<br/>나는 한 몸으로 일체가 된다.<br/>•••』</h3>

      <div className="list">
        <h3 style={{margin: "42px auto 22px auto"}}>사이트 설명</h3>
        <p>
          일명 <span style={{ fontWeight: "800" }}>'지지를 철회한다'</span> 밈을 생성해주는 사이트입니다.<br /><br />

          이 밈에 이름 부분을 일일이 갈아 끼우는 것이 귀찮아서... <br />
          한번에 만들어주는 사이트를 만들자는 아이디어로 개발되었습니다.<br /><br />

          원본부터 변형된 버전까지 자유롭게 선택하여 생성할 수 있습니다.<br />
        </p>

        <h3 style={{margin: "42px auto 22px auto"}}>기타 정보</h3>
        <h4>제작자 정보</h4>

        <p style={{lineHeight: "200%"}}>
          김태균&nbsp;
          <a href="https://www.github.com/ktk-ring/" target="_blank" rel="noreferrer">
            <img className="logo"
              alt="GitHub_Logo"
              src={`${process.env.PUBLIC_URL}/img/logo_github.png`}
            /></a>&nbsp;
          <a href="https://www.instagram.com/ring_squaredd/" target="_blank" rel="noreferrer">
          <img className="logo"
              alt="Instagram_Logo"
              src={`${process.env.PUBLIC_URL}/img/logo_instagram.png`}
            /></a>&nbsp;
          <br/>
          송하민&nbsp;
          <a href="https://www.github.com/kegani42/" target="_blank" rel="noreferrer">
            <img className="logo"
              alt="GitHub_Logo"
              src={`${process.env.PUBLIC_URL}/img/logo_github.png`}
            /></a>&nbsp;
          <a href="https://www.instagram.com/taf_42" target="_blank" rel="noreferrer">
          <img className="logo"
              alt="Instagram_Logo"
              src={`${process.env.PUBLIC_URL}/img/logo_instagram.png`}
            /></a>&nbsp;
          <p style={{fontSize: "16px"}}>공동 기획 및 공동 제작</p>
        </p>
      </div>

      
    </div>
  );
}

export default App;