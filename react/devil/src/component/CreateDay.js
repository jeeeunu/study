import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days")
  const history = useHistory();

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST', // 새로운 단어 생성
      headers: {
        'Content-Type': 'application/json', // 'Content-Type' 을 뜻함 보내는 리소스의 타입
      },
      body: JSON.stringify({ // 수정을 위한 정보 싣기 위함 // json 문법을 이용
        day: days.length + 1
      }),
    })
      .then(res => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          history.push(`/`);
        }
      })

  }

  return <>
    <h3>현재 일수 : {days.length}일</h3>
    <button onClick={addDay}>Day 추가</button>
  </>
}