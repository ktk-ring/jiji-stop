import './App.css';
import { useState, useRef } from 'react';

// let postPosition;

function App() {

  //postPosition = checkBatchim(textInput) ? '와' : '과';

  return (
    <div className="App">
      <div className="mainTitle">
        <p>
          <h1>'지지를 철회한다' 밈 생성기</h1>
          <h2>jiji-stop generator</h2>
        </p>
      </div>

      <div className="list">
        <h3>사이트 설명</h3>
        <p>
          일명 <span style={{ fontWeight: "bolder" }}>'지지를 철회한다'</span> 밈을 생성해주는 사이트입니다.<br /><br />

          이 밈에 이름 부분을 일일이 갈아 끼우는 것이 귀찮아서... <br />
          한번에 만들어주는 사이트를 만들자는 아이디어로 개발되었습니다.<br /><br />

          원본부터 변형된 버전까지 자유롭게 선택하여 생성할 수 있습니다.<br />
        </p>
      </div>

      <Generator />

    </div>
  );
}

function checkBatchim(name) { // 이름에 받침 여부 체크
  if (typeof name !== 'string') return null;
  if (!name) return '';

  let lastLetter = name[name.length - 1];
  let uni = lastLetter.charCodeAt(0);

  if (uni < 44032 || uni > 55203) return '과/와';

  if ((uni - 44032) % 28 === 0) {
    return '와';
  }
  return '과';
}

function Generator() { // 밈 생성기
  const inputRef = useRef(null);
  const textRef = useRef(null);

  const textPlaceholder = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
  const [text, setText] = useState(textPlaceholder);

  let [autoCopy, setAutoCopy] = useState(true); // 자동 복사 기본값: 켜짐

  const memeText = () => {
    if (!inputRef.current.value) {
      alert("이름이 입력되지 않았습니다.");
      return;
    }
    const textInput = inputRef.current.value;
    const output = `오늘부로 ${textInput} 지지를 철회한다.

      오늘부터 지지관계에서 벗어나
      ${textInput}${checkBatchim(textInput)} 나는 한몸으로 일체가 된다.
      ${textInput}에 대한 공격은 나에 대한 공격으로 간주한다.
      
      세상에 70억 명의 ${textInput} 팬이 있다면, 나는 그들 중 한 명일 것이다.
      세상에 1억 명의 ${textInput} 팬이 있다면, 나 또한 그들 중 한 명일 것이다.
      세상에 천만 명의 ${textInput} 팬이 있다면, 나는 여전히 그들 중 한 명일 것이다.
      세상에 백 명의 ${textInput} 팬이 있다면, 나는 아직도 그들 중 한 명일 것이다.
      세상에 한 명의 ${textInput} 팬이 있다면, 그 사람은 아마도 나일 것이다.
      세상에 단 한 명의 ${textInput} 팬도 없다면, 나는 그제서야 이 세상에 없는 것이다.
      
      ${textInput}, 나의 사랑.
      ${textInput}, 나의 빛.
      ${textInput}, 나의 어둠.
      ${textInput}, 나의 삶.
      ${textInput}, 나의 기쁨.
      ${textInput}, 나의 슬픔.
      ${textInput}, 나의 안식.
      ${textInput}, 나의 영혼.
      ${textInput}, 나.`
    setText(output);
    if (autoCopy) {
      textRef.current.textContent = output;
      navigator.clipboard.writeText(output);
    };


  }

  return (
    <div>

      <div className="select">
        <h4>밈 종류 선택</h4>
      </div>
      <div className="select">
        <label>
          원본 <Info />
          <input type="checkbox"
            name="version"
            value="origin"
            className="check"
            defaultChecked
          />
        </label>

        <label>
          호날두 <Info />
          <input
            type="checkbox"
            name="version"
            value="ronaldo"
            className="check"
          />
        </label>

        <label>
          롤리타 <Info />
          <input type="checkbox"
            name="version"
            value="lolita"
            className="check"
          />
        </label>

        {/* {
        version
        ? <p>종류가 선택되지 않았습니다.</p>
        : { 종류 선택 코드 입력 }
        } */}

      </div>

      <div className="select">
        <p style={{ margin: "auto 15px" }}>
          클립보드 <br />자동복사
        </p>
        <input
          type="checkbox"
          id="autoCopy"
          onChange={(e) => setAutoCopy(e.target.checked)}
          defaultChecked
          hidden
        />
        <label for="autoCopy" className="toggleSwitch">
          <span className="toggleButton" />
        </label>
      </div>

      <div className="input">
        <h4 style={{ padding: "8px" }}>이름</h4>
        <input type="text" ref={inputRef}
        />
        <button onClick={memeText} style={{ fontSize: "18px" }}>
          생성하기
        </button>
      </div>

      <div>
        <div className="output">
          <p ref={textRef}>{text}</p>
        </div>
      </div>

      <div className="output">
        <button
          type="button"
          ref={textRef}
          onClick={() => {
            navigator.clipboard.writeText(text)}}
        >
          클립보드에 복사하기
        </button>
      </div>

    </div>
  )

  function Info() {
    return (
      <div>
        <img
          className="info"
          alt="info"
          src="img/info.png"
        />
      </div>)
  }
}

export default App;