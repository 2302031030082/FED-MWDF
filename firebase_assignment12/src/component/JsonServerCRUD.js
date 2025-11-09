import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function JsonServerCRUD() {
  const API = "http://localhost:3001/users";
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (!name || !email) return;
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, { name, email });
        setEditId(null);
      } else {
        await axios.post(API, { name, email });
      }
      fetchUsers();
      setName(""); setEmail("");
    } catch {
      setError("Failed to save user");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchUsers();
    } catch {
      setError("Failed to delete");
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="card">
      <h2>JSON Server CRUD</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>{editId ? "Update" : "Add"}</button>

      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => { setEditId(u.id); setName(u.name); setEmail(u.email); }}>✏️</button>
                <button onClick={() => handleDelete(u.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
