import React from 'react';

function UserList() {
  const users = [
    { id: 1, name: 'Kishori' },
    { id: 2, name: 'Pavan' },
    { id: 3, name: 'Ladoo' },
    { id: 4, name: 'Bebo' },
  ];

  return (
    <div>
      <h2>User List 👥</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>👤 {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
