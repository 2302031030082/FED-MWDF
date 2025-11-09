import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PublicAPI from "./components/PublicAPI";
import JsonServerCRUD from "./components/JsonServerCRUD";
import FirebaseAuthCRUD from "./components/FirebaseAuthCRUD";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Public API</Link>
        <Link to="/json">JSON CRUD</Link>
        <Link to="/firebase">Firebase CRUD</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PublicAPI />} />
        <Route path="/json" element={<JsonServerCRUD />} />
        <Route path="/firebase" element={<FirebaseAuthCRUD />} />
      </Routes>
    </Router>
  );
}
