// import dummy from "../db/data.json";
import React from "react";
import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";

export default function Day() {
  // dummy.words

  const { day } = useParams<{ day: string }>(); // 타입스크립트 적용 <{}>
  // const wordList = dummy.words.filter(word => (word.day === Number(day)))
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`) // 해당하는 day에 애들만 가져옴 다만 빈배열에 day를 채워넣어야함.
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setWords(data);
  //     })
  // }, [day]);

  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
