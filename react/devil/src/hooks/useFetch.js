import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url) // 해당하는 day에 애들만 가져옴 다만 빈배열에 day를 채워넣어야함.
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data);
      })
  }, [url]);

  return data;
}