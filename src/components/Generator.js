import { useState, useRef } from 'react';
import "../css/Generator.css"

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

  const textPlaceholder = "결과가 이곳에 표시됩니다.";
  const [text, setText] = useState(textPlaceholder);

  const [checkVer00, setCheckVer00] = useState(true);
  const [checkVer01, setCheckVer01] = useState(true);
  const [checkVer02, setCheckVer02] = useState(true);

  let [autoCopy, setAutoCopy] = useState(true); // 자동 복사 기본값: 켜짐

  const [activeTab, setActiveTab] = useState(0); // 예시 탭
  const mouseHover = (index) => {
    setActiveTab(index);
  }

  const memeText = () => {
    if (!inputRef.current.value) {
      alert("이름이 입력되지 않았습니다.");
      return;
    }
    const textInput = inputRef.current.value;
    const ver00 =
      `오늘부로 ${textInput} 지지를 철회한다.
  
  오늘부터 지지관계에서 벗어나
  ${textInput}${checkBatchim(textInput)} 나는 한몸으로 일체가 된다.
  ${textInput}에 대한 공격은 나에 대한 공격으로 간주한다.
  
  `
    const ver01 =
      `세상에 70억 명의 ${textInput} 팬이 있다면, 나는 그들 중 한 명일 것이다.
  세상에 1억 명의 ${textInput} 팬이 있다면, 나 또한 그들 중 한 명일 것이다.
  세상에 천만 명의 ${textInput} 팬이 있다면, 나는 여전히 그들 중 한 명일 것이다.
  세상에 백 명의 ${textInput} 팬이 있다면, 나는 아직도 그들 중 한 명일 것이다.
  세상에 한 명의 ${textInput} 팬이 있다면, 그 사람은 아마도 나일 것이다.
  세상에 단 한 명의 ${textInput} 팬도 없다면, 나는 그제서야 이 세상에 없는 것이다.
  
  `
    const ver02 =
      `${textInput}, 나의 사랑.
  ${textInput}, 나의 빛.
  ${textInput}, 나의 어둠.
  ${textInput}, 나의 삶.
  ${textInput}, 나의 기쁨.
  ${textInput}, 나의 슬픔.
  ${textInput}, 나의 안식.
  ${textInput}, 나의 영혼.
  ${textInput}, 나.`

    let output = "";
    if (checkVer00) {
      output += ver00;
    }
    if (checkVer01) {
      output += ver01;
    }
    if (checkVer02) {
      output += ver02;
    }

    setText(output);

    if (autoCopy) {
      textRef.current.textContent = output;
      navigator.clipboard.writeText(output);
    };

  }

  return (
    <div className="container">

      <div className="left">{/* 여기서 부터 왼쪽 */}

        <div className="select">
          <h4>밈 본문 예시</h4>
        </div>
        <div>

          <div className="example">
            {activeTab === 0 && <p>
              오늘부로 지지를 철회한다.<br />
              <br />
              오늘부터 지지관계에서 벗어나<br />
              이 밈과 나는 한몸으로 일체가 된다.<br />
              이 밈에 대한 공격은 나에 대한 공격으로 간주한다.
            </p>}
            {activeTab === 1 && <p>
              세상에 70억명의 팬이 있다면, 나는 그들 중 한 명일 것이다.<br />
              세상에 1억명의 팬이 있다면, 나 또한 그들 중 한 명일 것이다.<br />
              세상에 천만 명의 팬이 있다면, 나는 여전히 그들 중 한 명일 것이다.<br />
              세상에 백 명의 팬이 있다면, 나는 아직도 그들 중 한 명일 것이다.<br />
              세상에 한 명의 팬이 있다면, 그 사람은 아마도 나일 것이다.<br />
              세상에 단 한 명의 팬도 없다면, 나는 그제서야 이 세상에 없는 것이다.
            </p>}
            {activeTab === 2 && <p>
              나의 사랑.
              나의 빛.<br />
              나의 어둠.
              나의 삶.<br />
              나의 기쁨.
              나의 슬픔.<br />
              나의 안식.
              나의 영혼.<br />
              나.
            </p>}
          </div>
          <div style={{ borderBottom: "2px solid gray" }}>
            <div
              className="exampleButton"
              onMouseEnter={() => mouseHover(0)}>
              <label>원본</label>
            </div>
            <div
              className="exampleButton"
              onMouseEnter={() => mouseHover(1)}>
              <label>호날두</label>
            </div>
            <div
              className="exampleButton"
              onMouseEnter={() => mouseHover(2)}>
              <label>롤리타</label>
            </div>
          </div>

        </div>
        <div className="select">
          <h4>종류 선택</h4>
        </div>

        <div className="select"> {/* 체크박스 */}

          <label>
            원본
            <input type="checkbox"
              className="check"
              onChange={(e) => setCheckVer00(!checkVer00)}
              defaultChecked
            />
          </label>

          <label>
            호날두
            <input type="checkbox"
              className="check"
              onChange={(e) => setCheckVer01(!checkVer01)}
              defaultChecked
            />
          </label>

          <label>
            롤리타
            <input type="checkbox"
              className="check"
              onChange={(e) => setCheckVer02(!checkVer02)}
              defaultChecked
            />
          </label>

        </div>

        <div className="select"> {/* 복사박스 */}
          <p style={{ margin: "auto 15px" }}>
            클립보드 <br />자동복사
          </p>
          <input type="checkbox"
            id="autoCopy"
            onChange={(e) => setAutoCopy(e.target.checked)}
            defaultChecked
            hidden
          />
          <label for="autoCopy" className="toggleSwitch">
            <span className="toggleButton" />
          </label>
        </div>

        <div className="input"> {/* 이름 입력란 */}
          <h4 style={{ padding: "8px" }}>이름</h4>
          <input
            type="text"
            ref={inputRef}
            placeholder="이름 입력"
          />
          <button onClick={memeText}>
            생성하기
          </button>
        </div>

      </div>{/* 여기 까지 왼쪽 */}

      <div className="right">{/* 여기서 부터 오른쪽 */}
        <div className="output">
          <h4>결과물</h4>
        </div>

        <div className="outputText">
          <p ref={textRef}>{text}</p> {/* 텍스트 출력*/}
        </div>

        <div className="outputButton">
          <button type="button"
            onClick={() => { navigator.clipboard.writeText(text) }}
            style={{ width: "250px" }}>

            클립보드에 복사하기
          </button>
        </div>
      </div>{/* 여기 까지 오른쪽 */}
    </div>
  )

}
export default Generator;