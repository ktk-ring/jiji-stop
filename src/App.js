import './App.css';
import { useState, useRef } from 'react';

let nameInput = "이름";
let postPosition;

function App() {

  postPosition = checkBatchim(nameInput) ? '과' : '와';

  return (
    <div className="App">
      <div className="main-title">
        <p>
        <h1>'지지를 철회한다' 밈 생성기</h1>
        <h2>jiji-stop generator</h2>
        </p>
      </div>

      <div className="list">
        <h4>사이트 설명</h4>
        <p>
          지지를 철회한다 밈을 생성해주는 사이트입니다.<br/><br/>
          
          이 밈에 이름 부분을 일일이 갈아 끼우는 것이 귀찮아서... <br/>
          한번에 만들어주는 사이트를 만들자는 아이디어로 개발되었습니다.<br/><br/>

          원본부터 변형된 버전까지 자유롭게 선택하여 생성할 수 있습니다.<br/>
        </p>
      </div>

      <Generator></Generator>

      <div className='output'>
        <button type="button" style={{ textAlign: 'left' }}>
          클립보드에 복사하기
        </button>
      </div>

    </div>
  );
}

function checkBatchim() {
  if (typeof nameInput !== 'string') return null;

  let lastLetter = nameInput[nameInput.length - 1];
  let uni = lastLetter.charCodeAt(0);

  if (uni < 44032 || uni > 55203) return null;

  return (uni - 44032) % 28 !== 0;
}

function Generator() {
  const [nameInput, setName] = useState("");
  const textRef = useRef(null);

  let [autoCopy, toggleAutoCopy] = useState(true); // 자동 복사 기본값: 켜짐

  const memeText = () => {
    const text =
      `오늘부로 ${nameInput} 지지를 철회한다.

오늘부터 지지관계에서 벗어나
${nameInput}${postPosition}`/* 와/과 */ + ` 나는 한몸으로 일체가 된다.
${nameInput}에 대한 공격은 나에 대한 공격으로 간주한다.

세상에 70억명의 ${nameInput} 팬이 있다면, 나는 그들 중 한 명일 것이다.
세상에 1억명의 ${nameInput} 팬이 있다면, 나 또한 그들 중 한 명일 것이다.
세상에 천만 명의 ${nameInput} 팬이 있다면, 나는 여전히 그들 중 한 명일 것이다.
세상에 백 명의 ${nameInput} 팬이 있다면, 나는 아직도 그들 중 한 명일 것이다.
세상에 한 명의 ${nameInput} 팬이 있다면, 그 사람은 아마도 나일 것이다.
세상에 단 한 명의 ${nameInput} 팬도 없다면, 나는 그제서야 이 세상에 없는 것이다.

${nameInput}, 나의 사랑.
${nameInput}, 나의 빛.
${nameInput}, 나의 어둠.
${nameInput}, 나의 삶.
${nameInput}, 나의 기쁨.
${nameInput}, 나의 슬픔.
${nameInput}, 나의 안식.
${nameInput}, 나의 영혼.
${nameInput}, 나.`

    textRef.current.value = text;
    textRef.current.select();
    if (autoCopy) {
      document.execCommand("copy");
    }
  }

  return (
    <div>

      <div className="input">
        <p>이름 입력</p>
        <input type="text" onChange={
          (e) => setName(e.target.value)
        } />
        <button onClick={memeText} style={{ fontSize: 16 }}>생성하기</button>
      </div>

      <div className="select">

        <p>종류를 선택하세요</p>
      </div>
      <div className="select">

        <p>원본</p><input type="checkbox" name="version" value="origin"></input>
        <p>호날두</p><input type="checkbox" name="version" value="ronaldo"></input>
        <p>롤리타</p><input type="checkbox" name="version" value="lolita"></input>
      </div>
      <div className="select">

        <p>클립보드 자동 복사</p><button onClick={() => {toggleAutoCopy(!autoCopy);}}>
          {autoCopy ? "켜짐 ON" : "꺼짐 OFF"}
        </button><br />

      </div>

      <div>
        <div className="output">
          <p>결과</p>
        </div>

        <div className="output">
          <textarea ref={textRef}></textarea>
          <p>{memeText.text}</p>
        </div>
      </div>

    </div>
  )
}

export default App;