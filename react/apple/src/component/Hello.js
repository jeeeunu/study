// useState 기능 사용하고자 react 에서 useState import 하기
import { useState } from "react";
import UserName from "./UserName";

export
  default function Hello({ age }) {
  // useState 만들기
  const [name, setName] = useState('Mike');
  const msg = age > 19 ? '성인 입니다' : '미성년자 입니다'

  return (
    <>
      <h2>
        {name}({age}):{msg}
      </h2>
      <UserName name={name} />
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike")
      }}>Change</button>
    </>
  )
}