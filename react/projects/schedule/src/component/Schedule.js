import { useEffect, useContext, useState } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  const context = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../../db/data.json')
      .then(res => res.json())
      .then(res => {
        context.data = res.data;
        setData(res.data);
      })
  }, [])

  return (
    <section>
      {data.map(item => (
        <Link to={`/detail/${item.id}`} key={item.id}>
          <h2>{item.title}</h2>
        </Link>
      ))}
    </section>
  )
}