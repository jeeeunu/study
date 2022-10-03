import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

export default function CalendarPage() {
  const [dateValue, onChange] = useState(new Date());

  let { date } = useParams();

  function changeDateArray(props) {
    // console.log(dateValue)
    const date = dateValue.toString();
    console.log(date);
    const dateArray = date.split(" ").slice(0, 4, 5, 6, 7);
    console.log(dateArray)

  }

  changeDateArray();


  return (
    <>
      <Calendar onChange={onChange} value={dateValue} />
      <h2>gd {date}</h2>
    </>
  );
}
