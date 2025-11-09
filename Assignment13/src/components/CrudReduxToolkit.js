import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/crudSlice";

export default function CrudReduxToolkit() {
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const users = useSelector((state) => state.crud.users);
  const dispatch = useDispatch();

  const handleAddOrUpdate = () => {
    if (!name.trim()) return;
    if (editId) {
      dispatch(updateUser({ id: editId, name }));
      setEditId(null);
    } else {
      dispatch(addUser(name));
    }
    setName("");
  };

  return (
    <div className="card">
      <h2>Redux Toolkit CRUD</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={handleAddOrUpdate}>{editId ? "Update" : "Add"}</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name}{" "}
            <button onClick={() => { setName(u.name); setEditId(u.id); }}>✏️</button>
            <button onClick={() => dispatch(deleteUser(u.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
