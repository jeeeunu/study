import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";

export default function Clock() {

  const [time, setTime] = useState(moment()); //useState 훅을 통해 time 값 디폴트 설정

  useEffect((e) => {
    e = setInterval(() => { //e 라는 변수에 인터벌 종료를 위해 저장  
      setTime(moment()); // 현재 시간 세팅 
    }, 1000); //1000ms = 1s 간 반복 
    return () => {
      clearInterval(e); // 함수 언마운트시 clearInterval 
    };
  }, []);

  return (
    <>
      <Text>{time.format('YYYY년MM월DD일')}</Text>
      <Text>{time.format('HH시 mm분 ss초')}</Text>
    </>
  )
}

const Text = styled.p`
  margin-right: 15px;
  color: #fff;
  text-shadow:
  0 0 5px #fff,
  0 0 10px #fff,
  0 0 20px #fff,
  0 0 40px #0ff,
  0 0 80px #0ff,
  0 0 90px #0ff,
  0 0 100px #0ff,
  0 0 150px #0ff;
`;