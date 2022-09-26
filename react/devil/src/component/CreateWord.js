import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch('http://localhost:3001/days')
  const history = useHistory();
  // 로딩때는 추가하지 않기
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    console.log(engRef.current.value) // current 속성을 이용해서 해당요소에 접근 가능, value 값을 얻을 수 있음.
    console.log(korRef.current.value)
    console.log(dayRef.current.value)

    // 로딩이 아닐때만 실행
    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: 'POST', // 새로운 단어 생성
        headers: {
          'Content-Type': 'application/json', // 'Content-Type' 을 뜻함 보내는 리소스의 타입
        },
        body: JSON.stringify({ // 수정을 위한 정보 싣기 위함 // json 문법을 이용
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false
        }),
      })
        .then(res => {
          if (res.ok) {
            alert("생성이 완료 되었습니다");
            history.push(`/day/${dayRef.current.value}`);
            setIsLoading(false); // 다시 false 로 바꿈
          }
        })
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return <form onSubmit={onSubmit}>
    <div className="input_area">
      <label>Eng</label>
      <input type="text" placeholder="computer" ref={engRef}></input>
    </div>
    <div className="input_area">
      <label>Kor</label>
      <input type="text" placeholder="컴퓨터" ref={korRef}></input>
    </div>
    <div className="input_area">
      <select ref={dayRef}>
        {days.map(day => (
          <option key={day.id} value={day.day}>
            {day.day}
          </option>
        ))}
      </select>
    </div>
    <button style={{
      opacity: isLoading ? 0.3 : 1,
    }}>{isLoading ? "Saving" : "저장"}</button>
  </form >
}