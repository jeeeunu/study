// import { useEffect } from "react";
// import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export interface IDay {
  id: number;
  day: number;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");

  // 로딩글자 나타내기
  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  // const [days, setDays] = useState([]); // 빈배열로 만들고 api 에서 리스트로 가져와서 바꾸는 형식으로 함, 데이터가 바뀌면 자동으로 렌더링 될것임.

  // // api 통신
  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setDays(data);
  //     })
  //   // 개발자도구 네트워크를 통해 api 호출된것 확인가능
  // }, []);

  // const [count, setCount] = useState(0);

  // function onClick() {
  //   setCount(count + 1);
  // }

  // function onClick2() {
  //   setDays([
  //     ...days,
  //     {
  //       id: Math.random(),
  //       day: 1,
  //     },
  //   ]);
  // }

  // useEffect(() => {
  //   console.log("Count change")
  // }, []);
  // 실행하고 싶지 않아도(onclick 누를떄만 실행하고싶음.) ,onclick2 누를때도 불필요하게 실행되는 문제있음.
  // 그래서 배열을 두번째 매개변수로 넣음. .[count]를 넣음으로 인해 count가 변경되었을때만 useEffect가 실행된다.
  //  => 하지만 우린 api 통신할때 이용할것이므로 [] 빈배열을 넣을것임. 렌더링 되었을때 1번만 실행함.

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
        <li></li>
      </ul>
      {/* <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>Day change</button> */}
    </>
  );
}
