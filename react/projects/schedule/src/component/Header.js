import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Link to={`/scheduleList`}>일정 보기</Link>
      <Link to={`/`}>HOME</Link>
      <Link>일정 추가하기</Link>
    </>
  );
}
