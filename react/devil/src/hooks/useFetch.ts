// jsx를 반환하는 컴포넌트가 아니니 .ts로 변경
import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url) // 해당하는 day에 애들만 가져옴 다만 빈배열에 day를 채워넣어야함.
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
