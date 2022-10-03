import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// import
import Header from './component/Header';
import TodoList from './component/TodoList';

// reset
import './App.css';

export default function App() {
  return (
    <Wrap>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  padding: 50px;
  background-color: #222;
`;