import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>ㅣ<Link to="/Counter">Counter</Link>ㅣ<Link to="/Input">Input</Link>ㅣ<Link to="/Input2">Input2</Link>ㅣ<Link to="/List">List</Link>ㅣ
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Input2" element={<Input2 />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;