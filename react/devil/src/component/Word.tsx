import { useState } from "react";

interface IProps {
  word: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

export default function World({ word: w }: IProps) {
  // word:w 새로운 변수명으로 할당할 수 있음.

  const [word, setWord] = useState(w);

  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  // word.xx; // 타입 스크립트를 적용함으로 인해 없는 영역을 쓰면 오류뜸.

  function toggleShow() {
    setIsShow(!isShow); // 이 show가 트루면 false, 반대면 또 반대
  }

  // 새로고침해도 체크 유지하기, json db에 실시간 반영
  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // 'Content-Type' 을 뜻함 보내는 리소스의 타입
      },
      body: JSON.stringify({
        // 수정을 위한 정보 싣기 위함 // json 문법을 이용
        ...word, //기존 데이터
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  // rest api DELETE 이용하기 (삭제하기 기능)
  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE", //json 까지 삭제 완료, 하지만 화면에는 그대로 나타남.
      }).then((res) => {
        if (res.ok) {
          setWord({
            ...word, // 타입스크립트 적용 -> 기존 워드객체를 그대로 사용하기 위해 추가
            id: 0,
          });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
