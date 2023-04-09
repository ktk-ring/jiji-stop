import './App.css';
import { useState, useRef } from 'react';

let nameInput = "이름";
let postPosition;

function App() {

  postPosition = checkBatchim(nameInput) ? '과' : '와';

  return (
    <div className="App">
      <div className="main-title">
        <h1>'지지를 철회한다' 밈 생성기</h1>
      </div>

      <div className="list">
        <h4>사이트 설명</h4>
        <p>설명입니다.</p>
      </div>

        {/* 입력칸 이거 아님 */}
        {/* 아래에 있는 걸 여기로 올려야 함 */}
      <div className="input">
        <p>이름 입력</p>
        <input type="text" name="name" size="15"></input>
        <button onClick={() => { }} style={{ fontSize: 16 }}>생성하기</button>
      </div>

      <div className="select">
        <p>선택하세요</p>
        <p>원본</p><input type="checkbox" name="version" value="origin"></input><br />
        <p>호날두</p><input type="checkbox" name="version" value="ronaldo"></input><br />
        <p>롤리타</p><input type="checkbox" name="version" value="lolita"></input><br />
      </div>

      <Output></Output>

      <div className="output">

      </div>

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

function Output() {
  const [nameInput, setName] = useState("");
  const textRef = useRef(null);

  const memeText = () => {

    const text =
      `오늘부로 ${nameInput} 지지를 철회한다.

오늘부터 지지관계에서 벗어나
${nameInput}${postPosition} 나는 한몸으로 일체가 된다.
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
    document.execCommand("copy");
  }

  return (
    <div>
      이름 입력
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={memeText}>생성하기</button>
      <textarea ref={textRef}></textarea>
    </div>
  )
}

export default App;