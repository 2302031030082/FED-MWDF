import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterRedux from "./components/CounterRedux";
import TodoRecoil from "./components/TodoRecoil";
import CrudReduxToolkit from "./components/CrudReduxToolkit";

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/crud">CRUD</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CounterRedux />} />
        <Route path="/todo" element={<TodoRecoil />} />
        <Route path="/crud" element={<CrudReduxToolkit />} />
      </Routes>
    </Router>
  );
}
