import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoAtom";

export default function TodoRecoil() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTodo = (id) => setTodos(todos.filter(t => t.id !== id));

  return (
    <div className="card">
      <h2>Recoil Todo List</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add a task" />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
