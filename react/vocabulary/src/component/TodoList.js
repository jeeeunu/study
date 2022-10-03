import { useEffect, useState } from "react"
import styled from "styled-components";

export default function TodoList({ dodo }) {

  const [todo, setTodo] = useState([]);

  function liList(props) {
    const listItems = todo.map((dodo) => (
      <Li key={dodo.id}>
        {dodo.text}
        <button onClick={del}>삭제</button>
      </Li>
    ))
  }

  // 불러오기
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((res) => res.json())
      .then((todo) => {
        setTodo(todo);
      })
  });

  // 지우기
  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/todo/${todo.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setTodo({
              id: 0,
            });
          }
        });
    }
  }

  return (
    <>
      <Ul>
        {listItems}
      </Ul>
    </>
  )
}

const Ul = styled.ul`
  padding: 50px 0;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
  min-height: 50px;
  padding: 10px 0;
  color: #fff;

  & button {
    display: none;
    color: #0ff;
  };

  &:hover button {
    display: block;
  };
`;